export class Profiles {
	setup() {
		const noProfiles = $('.no-profiles');
		const profilesShelf = $('.profiles-shelf');
		const createProfile = $('.create-profile');
		const profilesList = $('.profiles');
		const buttonPlay = $('.button.play');

		const changePage = (function() {
			if (!localStorage.getItem('profiles')) {
				noProfiles.removeClass('hide');
				profilesShelf.addClass('hide');
			} else {
				profilesShelf.removeClass('hide');
				noProfiles.addClass('hide');
			}
		})();

		const ableCreateProfile = (function() {
			$('.add-profile, .create-profile-cta').click(() => {
				noProfiles.addClass('hide');
				profilesShelf.addClass('hide');
				createProfile.removeClass('hide');
			});
		})();

		const appendProfileItem = function(listNumber, name) {
			profilesList.append(`
				<li class="profile">
					<input type="radio" name="profile" id="${listNumber}" value="${name}">

					<label for="${listNumber}">
						<span class="profile-id">${listNumber}</span>
						<p class="text name">${name}</p>
					</label>
				</li>
			`);
		};

		const loadProfiles = (function() {
			let storageProfiles = JSON.parse(localStorage.getItem('profiles'));

			if (storageProfiles) {
				$(storageProfiles.names).each((index, element) => appendProfileItem(index + 1, element));
				buttonPlay.addClass('active');
			}
		})();

		const listLastProfile = function() {
			let storageProfiles = JSON.parse(localStorage.getItem('profiles'));
			let lastItemCount = storageProfiles.names.length;

			appendProfileItem(lastItemCount, storageProfiles.names[lastItemCount - 1]);
			buttonPlay.addClass('active');
		};

		const addProfile = (function() {
			const
				inputName = $('#input-name'),
				button = $('.button.create');

			inputName.keydown(() => inputName.val().length > 0 ? button.addClass('active') : button.removeClass('active'));

			button.click(() => {
				let profilesStorage = localStorage.getItem('profiles');
				let values = profilesStorage ? profilesStorage.substr(profilesStorage.indexOf('[') + 1) : '';
				let valuesNew = values ? values.substr(0, values.indexOf(']')) : '';

				profilesStorage ? localStorage.setItem("profiles", `{"names": [${valuesNew}, "${inputName.val()}"]}`) : localStorage.setItem("profiles", `{"names": ["${inputName.val()}"]}`);
				
				createProfile.addClass('hide');
				profilesShelf.removeClass('hide');

				listLastProfile();
			});
		})();

		const startGame = (function() {
			$('.button.play').click(() => {
				sessionStorage.setItem('logged', $('[name=profile]'));
				window.location.replace('./panel.php');
			})
		})();
	}
}