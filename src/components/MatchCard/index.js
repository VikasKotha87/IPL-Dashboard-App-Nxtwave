// Write your code here
import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
    return (
      <li>
        <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
