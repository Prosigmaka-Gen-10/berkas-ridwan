import { useParams } from "react-router-dom"

const MemberDetails = () => {
    const {memberId} = useParams();
    return (
        <div>Member Details {memberId}</div>
    )
}

export default MemberDetails;