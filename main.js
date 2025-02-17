const predefinedActivities = [
    "go for walk",
    "read a book",
    "watch movie",
    "learn new somthing",
]


function SelectRandom() {
    const randomIndex = Math.floor(Math.random() * predefinedActivities.length)

    document.getElementById("activity").innerText = predefinedActivities[randomIndex]
}

function addCustomActivity() {
    const customActivity = document.getElementById("customActivity").value.trim();
    if (customActivity) {
        predefinedActivities.push(customActivity);

        document.getElementById("customActivity").value = ''
        alert(`activity "$ {customActivity}" added!`)
    } 
}