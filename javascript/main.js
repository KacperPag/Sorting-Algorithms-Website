function sortingAlgorithmsDropdown() {
    document.getElementById("sortingAlgorithmsDropdown").classList.toggle("show");
}
  
window.onclick = function(e) {
    if (!e.target.matches('.sortingAlgorithmsDropdownBtn')) {
        var myDropdown = document.getElementById("sortingAlgorithmsDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}