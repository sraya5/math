export function treeView(className) {
    var toggler = document.getElementsByClassName(className);
    var i;
        
    for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("open");
    });
    }
}