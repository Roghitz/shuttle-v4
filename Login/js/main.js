const inputs = document.querySelectorAll(".input");


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

var objPeople = [
	{ // Object @ 0 index
		username: "admin",
		password: "admin"
	},
	{ // Object @ 1 index
		username: "mani",
		password: "mama"
	},
	{ // Object @ 2 index
		username: "yo",
		password: "yo"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for (var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if (username == objPeople[i].username && password == objPeople[i].password) {
			alert(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}

	}
	document.location.href = ("/Book/index.html")
	alert("incorrect username or password")
}