import AboutHeader from "../Components/AboutScreen/AboutHeader"
import JoinOurTeamAbout from "../Components/AboutScreen/JoinOurTeamAbout"
import OurValues from "../Components/AboutScreen/OurValues"
import Rates from "../Components/AboutScreen/Rates"
import WhoWeAre from "../Components/AboutScreen/WhoWeAre"

const About = () => {
  return (
    <div>
        <AboutHeader />
        <Rates />
        <WhoWeAre />
        <OurValues />
        <JoinOurTeamAbout />
    </div>
  )
}

export default About