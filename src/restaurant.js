import {loadHomePage} from './home-page.js'
import './styles.css'

//function to initialize web page 
function initializePage(){

    //load the home page
    loadHomePage()
    //get buttons 
    const navButtons = document.querySelectorAll(".nav-button")

    //add event listeners to buttons
    navButtons.forEach(button=>{
        button.addEventListener("click", handleButtonClick)
    })

}

initializePage()

//function to handle function calls and tab change logic
function handleButtonClick(event){
   const button = event.target
   const buttonId = event.target.id

   // remove active from all buttons 
    document.querySelectorAll(".nav-button").forEach(btn =>{
        btn.classList.remove("active")
    })
   
    // add the active class to the selected button
    button.classList.add("active")
    
    //clear the current content on the page
    const content = document.getElementById("content")
    content.innerHTML =""

    if(buttonId === "Home"){
        loadHomePage()
    }

    if(buttonId === "About"){
       loadAboutUs()
    }

    if(buttonId === "Menu" ){
        loadMenu()
    }
}

//