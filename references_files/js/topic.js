document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".Formula").forEach(el => {
        if (el.clientWidth > screen.width*0.8) {
            el.setAttribute("display", "none")
        }
    })

    function hideElemByClass(checkbox, classNames) {
        classNames.forEach(name => {
            document.querySelectorAll(`.${name}`).forEach(el => {
                el.style.display = checkbox.checked ? "block" : "none";
            });
        })
    }

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
                        tails.forEach(sibling => {
                            if (sibling.style) {
                                sibling.style.display = sibling._display
                            } else {
                                sibling.textContent = sibling._textContent
                            }
                        })
                    } else {
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


    const definitions = ["layout.Definition", "layout.Definition_"]
    const definitions_checkbox = document.getElementById("definitions_checkbox");
    definitions_checkbox.addEventListener("change", hideElemByClass(definitions_checkbox, definitions));

    const examples = ["layout.Example", "layout.Example_"]
    const examples_checkbox = document.getElementById("examples_checkbox");
    examples_checkbox.addEventListener("change", hideElemByClass(examples_checkbox, examples));

    const theorems = ["layout.Lemma", "layout.Claim", "layout.Theorem", "layout.Corollary",
                        "layout.Lemma_", "layout.Claim_", "layout.Theorem_", "layout.Corollary_"]
    const theorems_checkbox = document.getElementById("theorems_checkbox");
    theorems_checkbox.addEventListener("change", hideElemByClass(theorems_checkbox, theorems));

    const proofs = ["layout.Proof"]
    const proofs_checkbox = document.getElementById("proofs_checkbox");
    proofs_checkbox.addEventListener("change", hideElemByClass(proofs_checkbox, proofs));

    
    toggleTailByClass("label", "layout.Proof")


    treeView("section")
})