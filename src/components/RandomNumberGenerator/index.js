import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: '0'}

  getRandomnumber = () => {
    console.log('clicked')

    const newNumber = Math.ceil(Math.random() * 100)
    console.log(newNumber)

    this.setState({randomNumber: newNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            type="button"
            className="button"
            onClick={this.getRandomnumber}
          >
            Generate
          </button>
          <p className="Number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
