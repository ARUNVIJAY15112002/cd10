// Write your code here
import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {name, imgUrl} = details
  return (
    <li className="li-container">
      <div>
        <img src={imgUrl} className="img-prop" alt={name} />
        <p className="headel">{name}</p>
      </div>
    </li>
  )
}
export default DestinationItem
