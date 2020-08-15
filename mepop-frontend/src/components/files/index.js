import FileDrop from './FileDrop'
import FileTable from './FileTable'
import Flex from '../../styles/layout/Flex'

const Files = () => {
  return (
    <Flex height='100%' width={[1]} flexDirection='column'>
      <FileDrop />
      <FileTable />
    </Flex>
  )
}

export default Files
