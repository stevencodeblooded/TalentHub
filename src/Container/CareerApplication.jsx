import { useParams } from "react-router-dom"
import CareerTitle from "../Components/CareerApplicationScreen/CareerTitle"
import JobDescription from "../Components/CareerApplicationScreen/JobDescription"
import JoinOurTeamCareer from "../Components/CareerApplicationScreen/JoinOurTeamCareer"

const CareerApplication = () => {
  const { id } = useParams()
  return (
    <div>
        <CareerTitle />
        <JobDescription />
        <JoinOurTeamCareer />
    </div>
  )
}

export default CareerApplication