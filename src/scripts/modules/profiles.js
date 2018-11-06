export class Profiles {
	setup() {
		const
			noProfiles = $('.no-profiles'),
			profilesShelf = $('.profiles-shelf'),
			createProfile = $('.create-profile');

		const changePage = (function() {

			if (!localStorage.profiles) {
				noProfiles.removeClass('hide');
				profilesShelf.addClass('hide');
			} else {
				profilesShelf.RemoveClass('hide');
				noProfiles.addClass('hide');
			}
		})()

		const addProfile = (function() {
			const
				inputName = $('#input-name'),
				button = $('.button.create');

			inputName.keydown(() => {
				if (inputName.val().length > 0) {
					button.addClass('active');
				} else {
					button.removeClass('active');
				}
			});

			button.click(() => {
				let profilesStorage = localStorage.getItem('profiles');
				let values = profilesStorage ? profilesStorage.substr(profilesStorage.indexOf('[') + 1) : '';
				let valuesNew = values ? values.substr(0, values.indexOf(']')) : '';

				profilesStorage ? localStorage.setItem('profiles', `{names: [${valuesNew}, ${inputName.val()}]}`) : localStorage.setItem('profiles', `{names: [${inputName.val()}]}`);
			});
		})()
	}
}