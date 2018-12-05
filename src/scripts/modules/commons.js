export class Commons {
	setup() {
		const
			noProfiles = $('.no-profiles'),
			profilesShelf = $('.profiles-shelf'),
			createProfile = $('.create-profile'),
			backButton = $('.back-button');
			
		const backButtonClick = (function() {
			backButton.click(() => {
				if ($('main').hasClass('home')) {
					if (!$(createProfile).hasClass('hide')) {
						createProfile.addClass('hide');
						profilesShelf.removeClass('hide');
					}
				}

				if ($('main').hasClass('game')) {
					backButton.click(() => {
						window.location.replace('./');
					});
				} else if ($('main').hasClass('config')){
					window.location.replace('/panel.php');
				}
			});
		})();
	}
}