import { hideElemByClass, toggleTailByClass } from 'hiding.js';
import { treeView } from 'treeview.js';

document.addEventListener("DOMContentLoaded", function() {
    function hideElemByClass(checkbox, classNames) {
        classNames.forEach(name => {
            document.querySelectorAll(`.${name}`).forEach(el => {
                el.style.display = checkbox.checked ? "none" : "block";
            });
        })
    }

    function toggleTailByClass(childClassName, parentClassName) {
        // Get all parent elements with the specified parent class
        const parentElements = document.querySelectorAll(`.${parentClassName}`);
        
        parentElements.forEach(parent => {
            // Get child elements within the parent that have the specified child class
            const childElements = parent.querySelectorAll(`.${childClassName}`);
            
            childElements.forEach(child => {
                let sibling = child.nextSibling;
                const tails = [];
                // Collect and remove all sibling nodes that come after the child element
                while (sibling) {
                    const nextSibling = sibling.nextSibling;
                    tails.push(sibling);
                    sibling.remove();
                    sibling = nextSibling;
                }
                child._hiddenTail = tails; // Save the removed siblings
    
                // Attach a click event listener to each child element
                child.addEventListener("click", () => {
                    let sibling = child.nextSibling;
                    const tails = [];
                    
                    // Collect and remove all sibling nodes that come after the child element
                    while (sibling) {
                        const nextSibling = sibling.nextSibling;
                        if (!child._hiddenTail) {
                            tails.push(sibling);
                            sibling.remove();
                        }
                        sibling = nextSibling;
                    }
    
                    // Store the removed tails and re-add them on subsequent clicks
                    if (!child._hiddenTail) {
                        child._hiddenTail = tails; // Save the removed siblings
                    } else {
                        child._hiddenTail.forEach(node => child.parentNode.appendChild(node));
                        child._hiddenTail = null; // Reset the saved siblings
                    }
                });
            });
        });
    }

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
    checkbox.addEventListener("change", hideElemByClass(definitions_checkbox, definitions));

    const examples = ["layout.Example", "layout.Example_"]
    const examples_checkbox = document.getElementById("examples_checkbox");
    checkbox.addEventListener("change", hideElemByClass(examples_checkbox, examples));

    const theorems = ["layout.Lemma", "layout.Claim", "layout.Theorem", "layout.Corollary",
                        "layout.Lemma_", "layout.Claim_", "layout.Theorem_", "layout.Corollary_"]
    const theorems_checkbox = document.getElementById("theorems_checkbox");
    checkbox.addEventListener("change", hideElemByClass(theorems_checkbox, theorems));

    const proofs = ["layout.Proof"]
    const proofs_checkbox = document.getElementById("proofs_checkbox");
    checkbox.addEventListener("change", hideElemByClass(proofs_checkbox, proofs));

    
    toggleTailByClass("label", "layout.Proof")


    treeView("section")
})