const cardContainer = document.getElementById("cardContainer")

let addNote = () => {
    const title = document.getElementById("title")
    const textArea = document.getElementById("textarea")

    if (title.value != "" && textArea.value != "") {
        const div = document.createElement("div")
        div.setAttribute("class", "card animate__animated animate__fadeInUp")

        const h3 = document.createElement("h3")
        h3.setAttribute("class", "titleTxt")

        const titleTxt = document.createTextNode(title.value)
        h3.appendChild(titleTxt)
        div.appendChild(h3)

        const p = document.createElement("p")
        p.setAttribute("class", "pTxt")

        const textAreaTxt = document.createTextNode(textArea.value)
        p.appendChild(textAreaTxt)
        div.appendChild(p)

        const div2 = document.createElement("div")
        div2.setAttribute("class", "divbtn2")
        const btn1 = document.createElement("button")
        btn1.setAttribute("onclick", "editCard(this)")
        const editTxt = document.createTextNode("Edit")
        btn1.appendChild(editTxt)
        div2.appendChild(btn1)
        const btn2 = document.createElement("button")
        btn2.style.backgroundColor = "rgb(255, 38, 38)"
        btn2.setAttribute("onclick", "deleteCard(this)")
        const deleteTxt = document.createTextNode("Delete")
        btn2.appendChild(deleteTxt)
        div2.appendChild(btn2)
        div.appendChild(div2)
        cardContainer.appendChild(div)
        title.value = ""
        textArea.value = ""
    }

    else {
        alert("Please fill both sections SIR !!")
    }

}

let deleteAll = () => {
    cardContainer.innerHTML = ""
}

let deleteCard = e => {
    e.parentNode.parentNode.remove()
}

let editCard = e => {
    let title = prompt("Edit Title: ", e.parentNode.parentNode.firstElementChild.innerHTML)
    e.parentNode.parentNode.firstElementChild.innerHTML = title
    let description = prompt("Edit Description", e.parentNode.parentNode.firstElementChild.nextElementSibling.innerHTML)
    e.parentNode.parentNode.firstElementChild.nextElementSibling.innerHTML = description
}