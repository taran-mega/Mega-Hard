// Function to add a profiles in Document
function addProfiles(){
    
    // Profiles to add
    const profiles = [
        {
            name: "Taranjit Singh",
            rank: "Founder & Developer",
            contacts: {
                email: "taranjit260526@gmail.com"
            }
        }
    ];
    
    // Get Data from HTML
    const profilesArea = document.getElementById("profiles");
    
    // Iter over profiles
    profiles.forEach(profile => {
        
        // Make Divs
        const main = document.createElement("div");
        const leftDiv = document.createElement("div");
        const rightDiv = document.createElement("div");
        const avatar = document.createElement("img");
        const name = document.createElement("div");
        const rank = document.createElement("div");
        const contacts = document.createElement("div");
        
        // Modify Classes and IDs
        main.className = "main";
        leftDiv.id = "left-div";
        rightDiv.id = "right-div";
        avatar.id = "avatar";
        name.id = "name";
        rank.id = "rank";
        contacts.id = "contacts";
        
        // Modify Content
        avatar.src = "Assets/team-avatar.svg";
        name.textContent = profile.name;
        rank.textContent = profile.rank;
        
        // Iter Over Contacts
        for (const [key, value] of Object.entries(profile.contacts)){
            
            // Make Contact div
            const contact = document.createElement("div");;
            contact.className = "contact";
            contact.textContent = `${key}: ${value}`;
            contacts.append(contact);
        }
        
        // Append Childs
        leftDiv.append(avatar);
        rightDiv.append(name, rank, contacts);
        main.append(leftDiv, rightDiv);
        profilesArea.append(main);
    });
}

// Function to Sent Messages to Parent
function sendToParent(){
    
    // Tab Name Message
    window.parent.postMessage({
        type: "tab",
        tabName: "Our team"
    }, "*")
}

// Function for Calling All Initial Functions
function init(){
    
    sendToParent();
    addProfiles();
}

// Call Initial Functions
init();