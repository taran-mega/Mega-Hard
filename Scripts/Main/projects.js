// Function for adding Item into Showcase
function updateShowcase(filter = null){
    
    // Get Data From HTML
    const showcase = document.getElementById("showcase");
    
    // Reset Showcase
    showcase.innerHTML = "";
    
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
        
        // Check Item Types
        if (item.type !== filter && filter !== null) return;
        
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

// Function for applying filter on projects
function applyFilter(){
    
    // Get Data from HTML
    const filterBtns = document.getElementById("filter-btns");
    
    // Make Divs
    const allBtn = document.createElement("button");
    const gameBtn = document.createElement("button");
    
    // Modify Content
    allBtn.textContent = "All projects";
    gameBtn.textContent = "Games";
    
    // Modify Classes & IDs
    allBtn.className = "active";
    
    // Add Event Listener
    allBtn.addEventListener("click", () => {
        updateShowcase();
    });
    gameBtn.addEventListener("click", () => {
        updateShowcase("video game");
    });
    
    // Append Childs
    filterBtns.appendChild(allBtn);
    filterBtns.appendChild(gameBtn);
    
    // Get Data again from HTML (:2)
    const btns = document.querySelectorAll("#filter-btns button");
    
    // Iter all Filter Buttons
    btns.forEach(btn => {
        
        // Add Event Listener
        btn.addEventListener("click", () => {
            
            // Remove 'active' from every button
            btns.forEach(item => {
                item.classList.remove("active");
            });
            
            // Add 'remove' on which button is clicked
            btn.classList.add("active");
        });
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
    applyFilter();
}

// Call Initial Functions
init();