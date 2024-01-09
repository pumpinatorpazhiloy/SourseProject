const images = () => {
	const imgModal = document.createElement('div'),
			workSection = document.querySelector('.works'),
			bigImg = document.createElement('img');

	imgModal.classList.add('popup');
	workSection.appendChild(imgModal);

	imgModal.style.justifyContent = 'center';
	imgModal.style.alignItems = 'center';
	imgModal.style.display = 'none';

	imgModal.appendChild(bigImg);

	workSection.addEventListener('click', e => {
		e.preventDefault();

		let target = e.target;

		if (target && target.classList.contains('preview')) {
			imgModal.style.display = 'flex';
			const path = target.parentNode.getAttribute('href');
			bigImg.setAttribute('src', path);
		}

		if(target && target.matches('div.popup')) {
			imgModal.style.display = 'none';
		}
	});
};

export default images;