import { hideElemByClass, toggleTailByClass } from 'hiding.js';
import { treeView } from 'treeview.js';

document.addEventListener("DOMContentLoaded", function() {
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