import React, { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick = {handleClick}>{text}</button>

const Stat = ({ feedBack, count }) => {
	return (
		<tr>
			<td>{feedBack}</td>
			<td>{count}</td>
		</tr>
	)
}

const Statistics = ({good , neutral, bad}) => {
	const total = good + bad + neutral

	if (total === 0)
		return <p>No feedback given</p>

	return (
		<table>
			<tbody>
				<Stat feedBack = {'good'} count = {good} />
				<Stat feedBack = {'neutral'} count = {neutral} />
				<Stat feedBack = {'bad'} count = {bad} />
				<Stat feedBack = {'all'} count = {total} />
				<Stat feedBack = {'average'} count = {(good - bad) / total} />
				<Stat feedBack = {'positive'} count = {`${good / total} %`} />
			</tbody>
		</table>
	)
}

const App = () => {
  	const [good, setGood] = useState(0)
  	const [neutral, setNeutral] = useState(0)
  	const [bad, setBad] = useState(0)

	const handleClick = (toChange) => () => toChange[1](toChange[0] + 1)

	return (
		<div>
			<h1>give feedback</h1>
			
			<Button handleClick = {handleClick([good, setGood])} text = {'good'} />
			<Button handleClick = {handleClick([neutral, setNeutral])} text = {'neutral'} />
			<Button handleClick = {handleClick([bad, setBad])} text = {'bad'} />

			<h1>statistics</h1>
			
			<Statistics good = {good} neutral = {neutral} bad = {bad} />
		</div>
	)
}

export default App