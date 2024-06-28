// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  Increment = () => {
    this.setState(prevState => {
      const a = prevState.count + Math.round(Math.random() * 100)
      const b = a % 2 === 0
      console.log(a)
      console.log(b)
      return {count: a, isEven: b}
    })
  }

  render() {
    const {count, isEven} = this.state
    const evenOrOdd = isEven ? 'Even' : 'Odd'
    return (
      <div className="cont-1">
        <div className="cont-2">
          <h1>Count {count}</h1>
          <div className="cont-3">
            <p>Count is {evenOrOdd}</p>
            <button className="btnpr" type="button" onClick={this.Increment}>
              Increment
            </button>
            <p>*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
