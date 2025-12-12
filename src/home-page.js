
export function loadHomePage(){
    // first we get the the parent container (content div)
    const content = document.getElementById("content")

    // add header 
    const header = document.createElement("H1")
    //add text to header
    header.textContent = "The Quacking Duck"
    //append header to page
    content.appendChild(header)

    //setup container and restaurant info to add to page
    const firstContainer = document.createElement("div")
    const infoPara = document.createElement("p")
    infoPara.style.whiteSpace = "pre-wrap"
    infoPara.classList.add("front-page-text")
    let info = `Where food and passion comes together.`
    // let info = `Welcome to farmers table where we pride ourselves in serving fresh local meats and produce!\n
    // We take simple ingredients and elevate them with modern techniques to produce elevated dishes!\n
    // We specialize in modern french cuisine to highlight seasonal produce.\n
    // Although our menu is constantly changing we also serve staples year round such as beef stew and steak frites.`
    infoPara.textContent = info
    firstContainer.appendChild(infoPara)
    content.appendChild(firstContainer)

}


