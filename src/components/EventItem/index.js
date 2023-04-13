// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItem, onChangeActiveTab} = props
  const changeActiveTab = () => {
    onChangeActiveTab(eventItem.registrationStatus)
  }
  return (
    <li className="eventItem">
      <button type="button" onClick={changeActiveTab} className="eventBtn">
        <img src={eventItem.imageUrl} alt="event" className="eventImg" />
      </button>
      <p className="eventName">{eventItem.name}</p>
      <p className="itemPara">{eventItem.location}</p>
    </li>
  )
}

export default EventItem
