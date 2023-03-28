// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onSubscribe = () => {
    this.setState(prevValue => ({isSubscribe: !prevValue.isSubscribe}))
  }

  render() {
    const {isSubscribe} = this.state

    return (
      <div className="welcome-container">
        <h1 className="wel-head">Welcome</h1>
        <p className="wel-desc">Thank you!Happy Learning</p>
        {isSubscribe ? (
          <button type="button" className="button" onClick={this.onSubscribe}>
            Subscribe
          </button>
        ) : (
          <button type="button" className="button" onClick={this.onSubscribe}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
