// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, imageUrl, id} = teamData
    return (
      <Link to={`/team-matches/${id}`}>
        <li>
          <img src={imageUrl} alt={`${name}`} />
          <p>{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
