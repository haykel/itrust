import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<div className="form-group">
				<label>Name</label>
				<input className="form-control" placeholder="Name" type="text" name="name" value={user.name} onChange={handleInputChange} />
			</div>
			<div className="form-group">
				<label>Username</label>
				<input className="form-control" placeholder="Username" type="text" name="username" value={user.username} onChange={handleInputChange} />
			</div>
			<button className="btn btn-primary">Add new user</button>
		</form>
	)
}

export default AddUserForm
