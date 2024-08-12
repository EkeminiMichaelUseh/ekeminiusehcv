let navLinks = document.getElementById('navLinks');
function showMenu(){
    navLinks.style.left = '30%';
}
function hideMenu(){
    navLinks.style.left = '-250px';
}

let contactDetails = document.getElementById('contactDetails');
function appear(){
    contactDetails.style.left = '30%';
}
function disAppear(){
    contactDetails.style.left = '-250px';
}

let moreProjects = document.getElementById('moreProjects');
function openMore(){
    moreProjects.style.height = '90vh';
}
function closeMore(){
    moreProjects.style.height = '0';
}