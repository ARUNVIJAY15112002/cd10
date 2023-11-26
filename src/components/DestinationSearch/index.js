import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {serachValue: ''}

  searchInput = e => {
    this.setState({serachValue: e.target.value.toLowerCase()})
  }

  render() {
    const {serachValue} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(x =>
      x.name.includes(serachValue),
    )

    return (
      <div>
        <div className="card-2">
          <h1>Destination Search</h1>
          <input type="search" onChange={this.searchInput} />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="list-container">
          {searchResults.map(x => (
            <DestinationItem details={x} key={x.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
