const btn_act = document.getElementById("btn_act");

btn_act.addEventListener("click", ResponseServer());


async function ResponseServer() {
    const response = await fetch("api/", {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify("TTTTTTTT")
    })
    
}