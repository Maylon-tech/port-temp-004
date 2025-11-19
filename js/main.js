"use strict";

// Light and Dark Mode

const /* {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]")
const /* {NodeElement} */ $HTML = document.documentElement
let /* {Boolean / String } */ isDark = window.matchMedia("(prefers-color-scheme: dark)").matches 


console.log(isDark)

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme")
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light"
    sessionStorage.setItem("theme", $HTML.dataset.theme)
}

const changeTheme = () => {

    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light"
    sessionStorage.setItem("theme", $HTML.dataset.theme)
}

$themeBtn.addEventListener("click", changeTheme)

/*
    TAB
*/

const /*NodeList*/ $tabBtn = document.querySelectorAll("[data-tab-btn]")
let /*NodeElement*/ [lastActiveTab] = document.querySelectorAll("[data-tab-content]")
let /*NodeElement*/ [lastActiveTabBtn] = $tabBtn

$tabBtn.forEach(item => {
    item.addEventListener("click", function() {
        lastActiveTab.classList.remove("active")
        lastActiveTabBtn.classList.remove("active")

        const /*NodeElement*/ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`)
        $tabContent.classList.add("active")
        this.classList.add("active")

        lastActiveTab = $tabContent
        lastActiveTabBtn = this

    })
})

// Email function

function sendEmail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_ymvic41", "template_jwbdn0d", params).then(alert("Email sent Successfully..!!"))
}