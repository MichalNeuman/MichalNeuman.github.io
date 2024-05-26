
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
const firebaseConfig = {
    apiKey: "AIzaSyDG_DI51gJV40bY47YG86kUe_eV-3HgGsc",
    authDomain: "lucrum-login.firebaseapp.com",
    projectId: "lucrum-login",
    storageBucket: "lucrum-login.appspot.com",
    messagingSenderId: "561968143412",
    appId: "1:561968143412:web:cc537c4524f0ec5495fe61"
  };

 
