// Function for Adding Tabs in Panel
function addTabs(){
    
    // Get Data From HTML
    const tabsArea = document.getElementById("tabs");
    const page = document.getElementById("page");
    
    // Tabs Name
    const tabs = [
        {
            name: "Home",
            src: "home.html"
        },
        {
            name: "Projects",
            src: "projects.html"
//        },
//        {
//            name: "Our team",
//            src: "team.html"
        }
    ];
    
    // Iter Tabs
    tabs.forEach(tab => {
        
        // Check Whether Source is Available 
        if (!tab.src) return;
        
        // Make Button
        const btn = document.createElement("button");
        btn.className = "tab";
        btn.textContent = tab.name
        
        // Add Event Listener
        btn.addEventListener("click", () => {
            
            page.src = tab.src;
        });
        
        // Append Child
        tabsArea.appendChild(btn);
    });
}

// Function for adding Event Listener for taking message from Childs
function takeMessageFromChild(){
    
    // Get Data From HTML
    const tabs = document.querySelectorAll("#tabs .tab");
        
    // Add Event Listener
    window.addEventListener("message", (event) => {
        
        // Check Message Type
        if (!event.data.type === "tab") return;
        
        // Iter All
        tabs.forEach(tab => {
             
             
             // Check Tab Name
             if (tab.textContent === event.data.tabName){
                 tab.classList.add("active");
             }
             else{
                 tab.classList.remove("active");
             }
        });
    });
}

// Function for Calling Event Listener Functions
function addEventListeners(){
    
    takeMessageFromChild();
}

// Function for Calling all Initial Functions
function init(){
    
    addTabs();
    addEventListeners();
}

// Call Initial Function
init();