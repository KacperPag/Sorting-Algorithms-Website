window.onclick = function(e) {
    if (!e.target.matches('.sortingAlgorithmsDropdownBtn')) {
        var sortingAlgorithmsDropdown = document.getElementById("sortingAlgorithmsDropdown");
        if (sortingAlgorithmsDropdown.classList.contains('show')) {
            sortingAlgorithmsDropdown.classList.remove('show');
        }
    }
}

function sortingAlgorithmsDropdown() {
    document.getElementById("sortingAlgorithmsDropdown").classList.toggle("show");
}