async function signIn() {
    const login = document.getElementById("input-login").value;
    const password = document.getElementById("input-pass").value;

    const res = await fetch("/api/login", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({login : login, password : password})
    });

    const data = await res.json();
    if (data.success){
        alert(data.message);
    }
    else{
        alert(data.error);
    }
}

async function signUp() {
    const login = document.getElementById("input-login").value;
    const password = document.getElementById("input-pass").value;
    const res = await fetch("/api/register", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({login : login, password : password})
    });

    const data = await res.json();
    if (data.success){
        alert(data.message);
    }
    else{
        alert(data.error);
    }
}