import React, { useState } from 'react'

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later',
		'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    	'Premature optimization is the root of all evil.',
    	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
	]

	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
	
	const selectRandomAnecdote = () => {
		setSelected(Math.floor(Math.random() * anecdotes.length))
	}

	const updateVotes = (update) => () => {
		const copy = [...points]
		copy[update] += 1
		setPoints(copy)
	}

	function indexOfMax(arr) {
		if (arr.length === 0) {
			return -1;
		}
	
		let max = arr[0];
		let maxIndex = 0;
	
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] > max) {
				maxIndex = i;
				max = arr[i];
			}
		}
	
		return maxIndex;
	}

	let maxIndex = indexOfMax(points)

	return (
		<div>
			<h1>Anecdote of the day</h1>

			{anecdotes[selected]}<br />
			has {points[selected]} votes<br />

			<button onClick = {updateVotes(selected)}>
				vote
			</button>

			<button onClick = {selectRandomAnecdote}>
				next anecdote
			</button>

			<h1>Anecdote with most votes</h1>

			{anecdotes[maxIndex]}<br />
			has {points[maxIndex]} votes<br />
		</div>
	)
}

export default App