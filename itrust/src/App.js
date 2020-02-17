import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import LogsCruds from './tables/LogsCruds'

const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Test 1', username: 'First Test ' },
		{ id: 2, name: 'Test 2', username: 'Second Test ' },
		{ id: 3, name: 'Test 3', username: 'Third Test ' },
	]
	// LogData

	const logsData = [
		{ id: 1, time: 'Sun, 16 Feb 2020 19:53:03 GMT', action:'Ajout element' },
		{ id: 2, time: 'Sun, 16 Feb 2020 19:53:03 GMT', action:'Suppression element' },
		{ id: 3, time: 'Sun, 16 Feb 2020 19:53:03 GMT', action:'Modification element' },
	]
	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ logs, setLogs ] = useState(logsData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
	
	// get date for log time
	const getDate = () =>{
		const currentTimes = new Date();
		const time = currentTimes.toGMTString()
		return time
	}

	// CRUD operations
	const setLogsADD = (msg) =>{			
			let log ={}			
			log.id = logs.length + 1
			log.time = getDate() 
			log.action = msg
			setLogs([ ...logs, log ])
	}

	const addUser = (user) => {
		user.id = users.length + 1
		let msg = "Ajout element"

		setUsers([ ...users, user ])
		setLogsADD(msg)
	}

	const deleteUser = (id) => {
		let msg = "Suppression element"

		setEditing(false)
		setLogsADD(msg)
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		let msg = "Modification element"

		setEditing(false)
		setLogsADD(msg)
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<h1>CRUD App with Hooks And Log Event</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
			<div className="flex-large">
				<h2>View Logs</h2>
				<LogsCruds logs={logs}/>
			</div>
		</div>
	)
}

export default App
