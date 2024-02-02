function showelement(elementID, clickedElement) {
    var element = document.querySelector("." + elementID);
    var allElements = document.querySelectorAll('.about_content > div');
    var allLinks = document.querySelectorAll('.about_partitation > li');

    // Hide all elements
    allElements.forEach(function (el) {
        el.style.display = 'none';
    });

    // Show the clicked element
    element.style.display = 'block';

    // Remove "active" class from all links
    allLinks.forEach(function (link) {
        link.classList.remove("active");
    });

    // Add "active" class to the clicked link
    clickedElement.classList.add("active");
}


function toggleNavbar() {
    var navigationBar = document.querySelector('.navigationbar');
    navigationBar.classList.toggle('show');
}
