// Get Data From HTML
const body = document.body;

// Function for adding footer in document
function addFooter(){
    
    // Variables
    const currentYear = new Date().getFullYear();
    
    // Make Divs
    const footer = document.createElement("footer");
    const rights = document.createElement("div");
    const policies = document.createElement("div");
    const terms = document.createElement("button");
    const privacyPolicy = document.createElement("button");
    const about = document.createElement("button");
    
    // Modify Classes & IDs
    rights.id = "rights";
    policies.id = "policies";
    
    // Modify Content
    rights.textContent = `Copyright © Mega Hard 2025-${currentYear}. All Rights Reserved.`
    terms.textContent = "Terms";
    privacyPolicy.textContent = "Privacy Policies";
    about.textContent = "About";
    
    // Add Event Listeners
    terms.addEventListener("click", () => {
        
        // Change Window Location
        window.parent.location.href = "terms.html";
    });
    privacyPolicy.addEventListener("click", () => {
        
        // Change Window Location
        window.parent.location.href = "privacy_policy.html";
    });
    about.addEventListener("click", () => {
        
        // Change Window Location
        window.parent.location.href = "about.html";
    });
    
    // Append Childs
    policies.appendChild(terms);
    policies.appendChild(privacyPolicy);
    policies.appendChild(about);
    footer.appendChild(rights);
    footer.appendChild(policies);
    body.appendChild(footer);
}

// Function for Calling all Initial Functions
function init(){
    
   addFooter();
}

// Call Initial Function
init();