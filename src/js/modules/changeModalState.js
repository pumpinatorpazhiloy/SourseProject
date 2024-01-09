import checkNumInp from './checkNumInp.js';

const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img'),
			windowWidth = document.querySelectorAll('#width'),
			windowHeight = document.querySelectorAll('#height'),
			windowType = document.querySelectorAll('#view_type'),
			windowProfile = document.querySelectorAll('.checkbox');

	checkNumInp('#width');
	checkNumInp('#height');

	const bindAction = (event, element, props) => {
		element.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch(item.nodeName) {
					case 'SPAN':
						state[props] = i;
						break;
					case 'INPUT':
						if(item.getAttribute('type') === 'checkbox') {
							i === 0 ? state[props] = 'Холодное' : state[props] = 'Тёплое';
							element.forEach((box, j) => {
								box.checked = false;
								if(i == j) {
									box.checked = true;
								}
							})
						} else {
							state[props] = item.value;
						}
						break;
					case 'SELECT':
						state[props] = item.value;
					break;
				}
				console.log(state);
			});
		});
	};

	bindAction('click', windowForm, 'form');
	bindAction('input', windowHeight, 'height');
	bindAction('input', windowWidth, 'width');
	bindAction('change', windowType, 'type');
	bindAction('change', windowProfile, 'profile');
};

export default changeModalState;