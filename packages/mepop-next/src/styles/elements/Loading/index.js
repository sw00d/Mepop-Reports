import Spinner from "./Spinner"
import ThreeDotLoader from "./ThreeDotLoader"

const Loading = ({dotLoader, ...props}) => {
    return dotLoader ? <ThreeDotLoader  {...props}/> : <Spinner {...props}/>
}
export default Loading