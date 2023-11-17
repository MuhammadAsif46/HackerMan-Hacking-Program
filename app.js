
let user = prompt("enter your name");

let messages = [
    `Initializing Hack (" ${user} ") program .....`,
    `Connecting to (" ${user} ") Facebook.....`,
    "Connecting to Server 1.....",
    "Connection failed. Retrying.....",
    "Connecting to Server 2.....",
    "Connected Successfully.....",
    `Hacking (" ${user} ") username and password.....`,
    `Username found (" ${user}06")...`,
    "Hacking Successfully.....",
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