// Variables
let featuredList = [
    
    {
        name: "Space Warrior",
        link: "https://taran-megahard.itch.io/space-warrior",
        img: "Assets/SpaceWarrior_Cover.jpg",
        btnTxt: "Play on itch.io"
    }
];

// Function for Auto adding Featured Items
function addFeatured(){
    
    // Get Element from HTML
    let showcase = document.getElementById("showcase");
    
    // For Every Game
    featuredList.forEach(item => {
        
        // Make Main Element
        const mainDiv = document.createElement("div");
        mainDiv.id = "main";
        
        // Make Left Side
        const leftSide = document.createElement("div");
        leftSide.id = "left-side";
        
        // Make Right Side
        const rightSide = document.createElement("div");
        rightSide.id = "right-side";
        
        // Make Name
        const title = document.createElement("h3");
        title.textContent = item.name;
        
        // Make Img
        const image = document.createElement("img");
        image.src = item.img;
        
        // Make Link
        const link = document.createElement("a");
        link.href = item.link;
        link.target = "_blank";
        
        // Make Button
        const button = document.createElement("button");
        button.textContent = item.btnTxt;
        
        // Append Element
        link.append(button);
        leftSide.append(title, link);
        rightSide.append(image);
        mainDiv.append(leftSide, rightSide);
        showcase.append(mainDiv);
    });
}

// Function to Sent Messages to Parent
function sendToParent(){
    
    // Tab Name Message
    window.parent.postMessage({
        type: "tab",
        tabName: "Home"
    }, "*")
}

// Function for Calling All Initial Functions
function init(){
    
    addFeatured();
    sendToParent();
}

// Call Initial Functions
init();