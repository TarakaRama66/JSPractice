function store(name) {
  localStorage.setItem("username", name);
  sessionStorage.setItem("sessionUser", name);
}

function retrieve() {
  return {
    local: localStorage.getItem("username"),
    session: sessionStorage.getItem("sessionUser")
  };
}
function save() {
  let name = "Gupta";

  localStorage.setItem("username", name);
  sessionStorage.setItem("sessionUser", name);

  console.log("Saved!");
}

// usage
store("Gupta");
store("Tarak");

let data = retrieve();
console.log("Local:", data.local);
console.log("Session:", data.session);