document.addEventListener("DOMContentLoaded", function() {
    function toggleTailByClass(childClassName, parentClassName) {
        // Get all parent elements with the specified parent class
        const parentElements = document.querySelectorAll(`.${parentClassName}`);
        
        parentElements.forEach(parent => {
            // Get child elements within the parent that have the specified child class
            const childElements = parent.querySelectorAll(`.${childClassName}`);
            
            childElements.forEach(child => {
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
    toggleTailByClass("label", "layout.Proof")
})