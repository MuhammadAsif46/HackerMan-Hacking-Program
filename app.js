
let user = prompt("enter your name");

let messages = [
    `Initializing Hack program '${user}'.....`,
    `Hacking '${user}' username and password.....`,
    `Username found '${user}06'....`,
    "Connecting to Facebook.....",
    "Connecting to Intragram.....",
    "Connecting to Whatsupp.....",
    "Connecting to githhub.....",
    "Connecting to linkedin....."
]

const waiting = (seconds)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(true) 
        }, seconds * 1000)
    })
}

const hacking = async (message)=>{
    await waiting(1)
    // console.log(messages);
    let hackers = document.getElementById("hacker");
    hackers.innerHTML += message + "<br>"
}

(async ()=>{
    for (let items of messages) {
        await hacking(items)
    }
})()