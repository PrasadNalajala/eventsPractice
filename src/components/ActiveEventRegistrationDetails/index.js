// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeTab} = props
  console.log(activeTab)
  const noActiveEvent = () => (
    <div className="activeTab">
      <p className="noActive">
        Click on an event, to view its registration details
      </p>
    </div>
  )
  const yetToRegister = () => (
    <div className="yetToRegister">
      <img
        className="yetToImg"
        alt="yet to register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      />
      <p>
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form
      </p>
      <div className="registerBtn">
        <button type="button">Register Here</button>
      </div>
    </div>
  )
  const registred = () => (
    <div className="yetToRegister">
      <img
        className="yetToImg"
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <h1 className="register">You have already registered for the event</h1>
    </div>
  )
  const registrationClosed = () => (
    <div className="yetToRegister">
      <img
        className="yetToImg"
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )
  switch (activeTab) {
    case 'noActiveEvent':
      console.log('triggered switch')
      return noActiveEvent()
    case 'YET_TO_REGISTER':
      console.log('switch triggered')
      return yetToRegister()

    case 'REGISTERED':
      return registred()

    case 'REGISTRATIONS_CLOSED':
      return registrationClosed()

    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
