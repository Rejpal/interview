import dispatcher from "../dispatcher.js"

export function addContact (fullName, bio, phone, email) {
  	dispatcher.dispatch ({
		type: "ADD_CONTACT",
		fullName,
		bio,
		phone,
		email
	})
}

export function addNewContact () {
	let fullName = ""
	let bio = ""
	let phone = ""
	let email = ""
	console.log ("new contact: " + fullName + bio + phone + email)
  	dispatcher.dispatch ({
		type: "ADD_CONTACT",
		fullName,
		bio,
		phone,
		email
	})
	
}

export function changeActive (id) {
  	dispatcher.dispatch ({
		type: "CHANGE_ACTIVE",
		id
	})
}

export function deleteActive() {
	dispatcher.dispatch ({
		type: "DELETE_ACTIVE"
	})
}

export function saveActive(contact) {
	dispatcher.dispatch ({
		type: "SAVE_ACTIVE",
		contact
	})
}