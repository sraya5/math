function toggleMultipleClasses(classList, show) {
    classList.forEach(className => {
      const elements = document.querySelectorAll('.' + className);
      elements.forEach(el => {
        el.style.display = show ? '' : 'none';
      });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".Formula").forEach(el => {
        if (el.clientWidth > screen.width*0.8) {
            el.setAttribute("display", "none")
        }
    })
    

    function toggleTailByClass(childClassName, parentClassName) {
        // Get all parent elements with the specified parent class
        const parentElements = document.querySelectorAll(`.${parentClassName}`);
        
        parentElements.forEach(parent => {
            // Get child elements within the parent that have the specified child class
            const child = parent.querySelectorAll(`.${childClassName}`)[0];
            if (child) {
                child.style.cursor = "pointer";
                child._is_open = false
                const tails = []
                let sibling = child.nextSibling;
                while (sibling) {
                    tails.push(sibling);
                    if (sibling.style) {
                        sibling._display = sibling.style.display
                        sibling.style.display = "none";
                    } else {
                        sibling._textContent = sibling.textContent
                        sibling.textContent = ""
                    }
                    sibling = sibling.nextSibling;
                }

                // Attach a click event listener to each child element
                child.addEventListener("click", () => {
                    child._is_open = !child._is_open
                    if (child._is_open) {
                        parent.style.border = "1px solid";
                        parent.style.padding = "0.5em";
                        tails.forEach(sibling => {
                            if (sibling.style) {
                                sibling.style.display = sibling._display
                            } else {
                                sibling.textContent = sibling._textContent
                            }
                        })
                    } else {
                        parent.style.border = "";
                        parent.style.padding = "";
                        tails.forEach(sibling => {
                            if (sibling.style) {
                                sibling.style.display = "none";
                            } else {
                                sibling.textContent = ""
                            }
                        });
                    };
                });
            };
        });
    };

    function treeView(className) {
        var toggler = document.getElementsByClassName(className);
        var i;
            
        for (i = 0; i < toggler.length; i++) {
            toggler[i].addEventListener("click", function() {
                this.parentElement.querySelector(".nested").classList.toggle("active");
                this.classList.toggle("open");
            });
        }
    }


    toggleTailByClass("label", "layout.Proof")


    treeView("Section")
})