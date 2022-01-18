// JS File for login
type = "module";
    import {getAuth} from "firebase/auth";
document.getElementById('loginForm').addEventListener("submit",(e) =>{
	e.preventDefault();
	login();
})

firebase.auth().onAuthStateChanged((user) =>{
	if(user){
		location.replace("panel.html");
	}
})

function login(){
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password)
  	.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

// document.getElementById("loginForm").addEventListener("submit",(event)=>{
//     event.preventDefault()
// })

// firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//         location.replace("panel.html")
//     }
// })

// function login(){
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .catch((error)=>{
//         document.getElementById("error").innerHTML = error.message
//     })
// }