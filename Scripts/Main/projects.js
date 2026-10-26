// Function for adding Item into Showcase
function updateShowcase(filter = null){
    
    // Get Data From HTML
    const showcase = document.getElementById("showcase");
    
    // Item to add in Showcase
    const items = [
        {
            name: "Space Warrior",
            type: "video game",
            img: "Assets/SpaceWarrior_Cover.jpg",
            des: "A fun space arcade combat game.",
            btns: [
                {
                    txt: "play",
                    src: "https://taran-megahard.itch.io/space-warrior"
                }
            ]
        },
        {
            name: "Blaster",
            type: "video game",
            img: "Assets/Blaster_Cover.jpg",
            des: "A space shooter game.",
            btns: [
                {
                    txt: "play",
                    src: "https://taran-megahard.itch.io/blaster"
                }
            ]
        }
    ];
    
    // Iter Every Item
    items.forEach(item => {
        
        // Make Divs
        const mainDiv = document.createElement("div");
        const img = document.createElement("img");
        const type = document.createElement("div");
        const name = document.createElement("div");
        const des = document.createElement("div");
        const btnsDiv = document.createElement("div");
        
        // Modify Classes & IDs
        mainDiv.className = "item";
        type.id = "type";
        name.id = "name";
        des.id = "des";
        btnsDiv.id = "btns-div"
        
        // Modify Content
        img.src = item.img;
        img.alt = "image";
        type.textContent = item.type;
        name.textContent = item.name;
        des.textContent = item.des;
        
        // Iter All Btns
        item.btns.forEach(btn => {
            
            // Make btn
            const item = document.createElement("button");
            item.textContent = btn.txt;
            
            // Add Event Listener
            item.addEventListener("click", () => {
                
                // Change Location
                window.parent.location.href = btn.src;
            });
            
            // Append Child
            btnsDiv.appendChild(item);
        });
        
        // Append Childs
        mainDiv.appendChild(img);
        mainDiv.appendChild(type);
        mainDiv.appendChild(name);
        mainDiv.appendChild(des);
        mainDiv.appendChild(btnsDiv);
        showcase.appendChild(mainDiv);
    });
}

// Function to Sent Messages to Parent
function sendToParent(){
    
    // Tab Name Message
    window.parent.postMessage({
        type: "tab",
        tabName: "Projects"
    }, "*")
}

// Function for Calling All Initial Functions
function init(){
    
    sendToParent();
    updateShowcase();
}

// Call Initial Functions
init();