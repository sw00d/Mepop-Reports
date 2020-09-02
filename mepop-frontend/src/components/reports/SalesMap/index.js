import { useState, useEffect, memo } from 'react'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

import Card from '../../../styles/elements/Card'
import Tooltip from '../../../styles/elements/Tooltip'
import SalesTable from '../../general/SalesTable'
import SaleDetails from '../../general/SaleDetails'
import Flex from '../../../styles/layout/Flex'
import { getGeopoints } from '../util/geopoints'

const SalesMap = memo(({ data, styles, isBasic }) => {
  const [salesToMap, setSalesToMap] = useState([])
  const [salesToShow, setSalesToShow] = useState({})
  const [activeSale, activateSale] = useState(null)
  const { googleMapsKey } = useSelector(state => state.generalReducer)
  const [geocodes, setGeocodes] = useState([])

  useEffect(() => {
    getGeopoints(data, (res) => {
      setGeocodes(res)
    })
  }, [data])

  useEffect(() => {
    return setSalesToMap(_.values(geocodes))
  }, [geocodes])

  if (!googleMapsKey) return null

  return (
    <Card
      headerContent='Map of Sales (US only)'
      proOnly={isBasic ? {
        component: 'Map of Sales (US only)',
        img: 'sales-map.png',
        style: { height: '400px' }
      } : null}
      pb={!isBasic ? '30px' : null}
      background='mainBg'
    >
      <Flex width={[1, 1, 1, 1]} height='400px'>
        <Flex width={[1, 1, 1, 1]} height='430px'>
          <MapContainer mini={salesToShow.sales}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: googleMapsKey.key }}
              defaultCenter={{ lat: 39, lng: -98 }}
              defaultZoom={0}
              yesIWantToUseGoogleMapApiInternals
              gestureHandling='cooperative'
              options={{ gestureHandling: 'cooperative' }}
              minWidth='500px'
            >
              {salesToMap.length
                ? salesToMap.map((zip, i) => {
                  const { geopoint: { lat, lng } } = zip
                  if (getTitle(zip).includes('undefined')) return null // this weeds out other countries
                  return (
                    <Marker
                      setSalesToShow={setSalesToShow}
                      activateSale={activateSale}
                      zip={zip}
                      key={i}
                      lat={lat}
                      lng={lng}
                    />
                  )
                })
                : null}

            </GoogleMapReact>
          </MapContainer>
        </Flex>
        {salesToShow.sales && !activeSale
          ? (
            <SalesTable
              boxShadow='none'
              m='0'
              minWidth='50%'
              data={salesToShow}
              headerContent={getTitle(salesToShow)}
              handleRowClick={(row, i) => {
                activateSale(row.rowData)
              }}
              onClose={() => setSalesToShow({})}
            />
          ) : activeSale ? (
            <SaleDetails
              chartHeight={200}
              currencyType={data.currency_type}
              boxShadow='none'
              m='0'
              minWidth='50%'
              onClose={() => activateSale(null)}
              row={activeSale}
              getUrl={data.getUrl}
            />
          )
            : null}
      </Flex>
    </Card>
  )
})

export default SalesMap

const Marker = memo(({ zip, setSalesToShow, activateSale }) => {
  return (
    <Tooltip
      offset={40}
      title={getTitle(zip)}
      hideOnClick={false}
    >
      <I
        className='fa fa-map-marker' onClick={() => {
          activateSale(null)
          setSalesToShow(zip)
        }}
      />
    </Tooltip>)
})

// utils
function getTitle ({ location, sales }) {
  const title = `${location.city}, ${location.state} ${location.zip} - ${sales.length}`
  return title
}

const MapContainer = styled.div`
  visibility: visible;
  height: 100%;
  width: 100%;
  background: 'black';
  transition: .2s;
  display: flex;
`
const I = styled.i`
  font-size: 25px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.pastelRose};

  &:hover {
    color: ${({ theme }) => theme.colors.red}

  }
`
