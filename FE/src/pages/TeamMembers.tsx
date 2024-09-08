import ContactUs from "../components/ContactUs"
import AllTeamMembers from "../components/TeamMembers/AllTeamMembers"
import TeamMemberHero from "../components/TeamMembers/TeamMemberHero"

const TeamMembers = () => {
  return (
    <div>
        <TeamMemberHero/>
        <AllTeamMembers/>
        <ContactUs/>
    </div>
  )
}

export default TeamMembers