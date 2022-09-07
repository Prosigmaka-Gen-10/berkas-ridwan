import { useParams } from "react-router-dom"

const MembersDetails = () => {
    const {memberId} = useParams();
    return (
        <div>Member Details {memberId}</div>
    )
}

export default MembersDetails