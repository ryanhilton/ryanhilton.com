"use strict";
import styles from "../scss/styles.scss";
import resume from "../resume.pdf";

(function (window, document) {

	// Global Query Selector All shortcut
	let qsa = (elements) => document.querySelectorAll(elements);

	function triggerCollection() {
		let showTriggers = qsa('.show-more');
		let triggersArray = Array.from(showTriggers);

		triggersArray.forEach (
			initialHeight => initialHeight.addEventListener('click', removeHeightClass)
		);
	}

	// for (var workPanel of workPanels) workPanel.classList.contains("initial-height") && (this.previousElementSibling.classList.remove("initial-height"), this.style.display = "none")

	function removeHeightClass() {
		let workPanels = qsa('.work-panels');
		for (var workPanel of workPanels) {
			workPanel.classList.contains('initial-height') && this.previousElementSibling.classList.remove('initial-height'),
			// 'this' is assigned to the showMoreTrigger that was clicked, so it gets hidden
			this.style.display = 'none';
		}
	}

	triggerCollection();

})(window, document);
