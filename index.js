const btn = document.getElementById("btn")
const activity = document.getElementById("activity")
const title = document.getElementById("title")

btn.addEventListener('click', function() {
    fetch("https://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => { 
        activity.textContent = data.activity 
        title.textContent = "🤖 HappyBot 🤖"
        document.body.style.backgroundColor = "blue"
    })
})