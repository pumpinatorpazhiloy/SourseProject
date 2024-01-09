const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
	const header = document.querySelector(headerSelector),
			tab = document.querySelectorAll(tabSelector),
			content = document.querySelectorAll(contentSelector);

	const hideTab = () => {
		content.forEach(i => {
			i.style.display = 'none';
		})

		tab.forEach(i => {
			i.classList.remove(activeClass);
		});
	};	
	
	const showTab = (i = 0) => {
		content[i].style.display = display;

		tab[i].classList.add(activeClass);
	};

	hideTab();
	showTab();

	header.addEventListener('click', (e) => {
		const target = e.target;
		if (target &&
			 (target.classList.contains(tabSelector.replace(/\./, "")) || 
		target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
			 tab.forEach((item, i) => {
				  if (target == item || target.parentNode == item) {
						hideTab();
						showTab(i);
				  }
			 });
		}
  });
};

export default tabs;