const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("show"); // Toggle the 'show' class
});

window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + window.innerHeight;
    const hiddenLists = document.querySelectorAll(".sidebar-lists.hidden");

    hiddenLists.forEach((list) => {
        if (scrollPosition >= list.offsetTop) {
            list.classList.remove("hidden");
        }
    });
});

document
    .getElementById("closeButton")
    .addEventListener("click", function () {
        sidebar.classList.remove("show"); // Remove the 'show' class to hide the sidebar
    });