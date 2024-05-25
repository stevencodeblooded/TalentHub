import Hero from "../Components/HomeScreen/Hero"
import JoinOurTeamHome from "../Components/HomeScreen/JoinOurTeamHome"
import OverviewSteps from "../Components/HomeScreen/OverviewSteps"

const Home = () => {
  return (
    <div>
        <Hero />
        <OverviewSteps />
        <JoinOurTeamHome />
    </div>
  )
}

export default Home