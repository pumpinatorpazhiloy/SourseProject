const modals = () => {
	//ENGINEER POPUP

	const bindModal = (btnPopup, modalEngineerSelector, closeBtnSelector, closeClickOverlay = true) => {

		const btnSelector = document.querySelectorAll(btnPopup),
				modalSelector = document.querySelector(modalEngineerSelector),
				close = document.querySelector(closeBtnSelector),
				modalWindows = document.querySelectorAll('[data-modal]'),
				scroll = calcScroll();

		btnSelector.forEach(i => {
			i.addEventListener("click", e => {
				if(e.target) {
					e.preventDefault();
				}
	
				modalWindows.forEach(item => {
					item.style.display = 'none';
				})

				modalSelector.style.display = 'block';
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scroll}px`;
				// document.body.classList.add('modal-open');
			});
		});
		
		close.addEventListener("click", () => {
			modalWindows.forEach(item => {
				item.style.display = 'none';
			})

			modalSelector.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = '0px';
			// document.body.classList.remove('modal-open');
		});

		modalSelector.addEventListener("click", e => {
			if(e.target === modalSelector && closeClickOverlay) {
				modalWindows.forEach(item => {
					item.style.display = 'none';
				})

				modalSelector.style.display = 'none';
				document.body.style.overflow = '';
				document.body.style.marginRight = '0px';
				// document.body.classList.add('modal-open');
			}
		})
	};

	const setTimeOutModal = (selector, time) => {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
		}, time)
	}

	const calcScroll = () => {
		let div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';
		
		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
	// setTimeOutModal('.popup', 60000);
}

export default modals;