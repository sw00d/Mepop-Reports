import { useState, useMemo, useEffect } from 'react'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import GoogleMapReact from 'google-map-react'

import Card from '../../../styles/elements/Card'
import Tooltip from '../../../styles/elements/Tooltip'
import styled from 'styled-components'
import SalesTable from '../../general/SalesTable'
import Flex from '../../../styles/layout/Flex'

const SalesMap = ({ data, styles }) => {
  const [salesToMap, setSalesToMap] = useState([])
  const [salesToShow, setSalesToShow] = useState({})
  const { mapQuestKey, googleMapsKey, geocodes } = useSelector(state => state.generalReducer)

  useEffect(() => {
    return setSalesToMap(_.values(geocodes))
  }, [mapQuestKey, geocodes])

  if (!googleMapsKey) return null

  return (
    <Card headerText='Map of Sales (US ONLY)'>
      <Flex width={[1, 1, 1, 1]}>
        <MapContainer mini={salesToShow.sales}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapsKey.key }}
            defaultCenter={{ lat: 39, lng: -98 }}
            defaultZoom={0}
            yesIWantToUseGoogleMapApiInternals
            minWidth='500px'
          >
            {salesToMap.length
              ? salesToMap.map((zip, i) => {
                const { geopoint: { lat, lng } } = zip
                if (getTitle(zip).includes('undefined')) return null // this weeds out other countries
                return (
                  <Tooltip
                    offset={40}
                    title={getTitle(zip)}
                    hideOnClick={false}
                    key={i}
                    lat={lat}
                    lng={lng}
                  >
                    <I className='fa fa-map-marker' onClick={() => setSalesToShow(zip)} />
                  </Tooltip>
                )
              })
              : null}

          </GoogleMapReact>
          {salesToShow.sales
            ? (
              <SalesTable
                m='0'
                minWidth='500px'
                data={salesToShow.sales}
                boxShadow='none'
                headerText={getTitle(salesToShow)}
                onClose={() => setSalesToShow({})}
              />
            )
            : null}
        </MapContainer>
      </Flex>
    </Card>
  )
}

export default SalesMap

// utils
function getTitle ({ location }) {
  const title = `${location.city}, ${location.state} ${location.zip}`
  return title
}

const MapContainer = styled.div`
  visibility: visible;
  height: 400px;
  width: 100%;
  background: 'black';
  transition: .2s;
  display: flex;
`
const I = styled.i`
  font-size: 40px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.sunset};

  &:hover {
    color: ${({ theme }) => theme.colors.red}

  }
`
