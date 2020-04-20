import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Statistic = ({ text, value, key }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [stats, setStats] = useState([])
  const all = stats.length
  const avg = (good * 1 + bad * -1) / all || 0
  const perc = `${(good * 100) / all || 0} %`

  const setToGood = () => {
    setStats(stats.concat('G'))
    setGood(good + 1)
  }
  const setToNeutral = () => {
    setStats(stats.concat('N'))
    setNeutral(neutral + 1)
  }
  const setToBad = () => {
    setStats(stats.concat('B'))
    setBad(bad + 1)
  }

  return (
    <Fragment>
      <h2> Give Feedback</h2>
      <Button text="Good" handleClick={() => setToGood()} />
      <Button text="Neutral" handleClick={() => setToNeutral()} />
      <Button text="Bad" handleClick={() => setToBad()} />
      <h2>Statistics</h2>
      {stats.length > 0 ? (
        <>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={all} />
          <Statistic text="Average" value={avg} />
          <Statistic text="Positive" value={perc} />
        </>
      ) : (
        'No feedback given'
      )}
    </Fragment>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
