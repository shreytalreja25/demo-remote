console.log("Hello World")

function World(Name) {
    var Name = prompt("Enter Name");
    if (Name === "Shrey") {
        console.log("Access Granted to " + Name)
    } else {
        console.log("Access Denied to " + Name)
    }
}

World();