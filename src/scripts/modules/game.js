import infos from './letters';

export class Game {
	results() {
		$('.result .slider').slick({
			arrows: false,
			dots: true
		});
	}

	leds() {
		const leds = [$('#1'), $('#2'), $('#3'), $('#4'), $('#5'), $('#6'), $('#7'), $('#8'),$('#9'), $('#10'), $('#11'), $('#12'), $('#13'), $('#14'), $('#15'), $('#16'), $('#17'), $('#18'), $('#19'), $('#20'), $('#21'), $('#22'), $('#23'), $('#24'), $('#25'), $('#26'), $('#27'), $('#28'), $('#29'), $('#30'), $('#31'), $('#32'), $('#33'), $('#34'), $('#35'), $('#36'), $('#37'), $('#38'), $('#39'), $('#40'), $('#41'), $('#42'), $('#43'), $('#44'), $('#45'), $('#46'), $('#47'), $('#48'), $('#49'), $('#50'), $('#51'), $('#52'), $('#53'), $('#54'), $('#55'), $('#56'), $('#57'), $('#58'), $('#59'), $('#60'), $('#61'), $('#62'), $('#63'), $('#64') ]
		const infoIndex = Math.floor(Math.random() * Math.floor(3));
		const sortedObj = infos[infoIndex];
		let sortedTotal = 0, clickedTotal = 0;

		/** Append what letter is sorted */
		$('.letter').text(sortedObj.letter);

		/** Append each word to the list of words */
		sortedObj.words.forEach(element => $('.word-list').append(`<li class="list-item">${element}</li>`));

		/** Append each object name and figure to the list of figures */
		for (let item in sortedObj.objects) {
			$('.object-list').append(`
				<li class="object">
					<figure class="image">
						<img src="${sortedObj.objects[item]}" alt="${item}">
					</figure>
					<p class="obj-name">${item}</p>
				</li>
			`);
		}
		
		/** Count how many positions have a number different from 0 */
		for (let value in sortedObj.values) {
			if (sortedObj.values[value] > 0) sortedTotal++;
		}
		
		console.log('sortedTotal', sortedTotal, sortedObj);

		for (let led of leds) {
			led.text(led.attr('id'))
			
			let color = 0;
			
			led.click(function() {
				let self = $(this);

				color++;
				
				if (color > 3) {
					color = 0;
				}
				
				self.attr('data-color', color);
				
				switch (color) {
					case 1:
						this.style.background = '#ff4343';
					break;
					
					case 2:
						this.style.background = '#4388ff';
					break;
					
					case 3:
						this.style.background = '#43ff75';
					break;
					
					default:
						this.style.background = 'none';
					break;
				}
				
				let itemColor = Number(self.attr('data-color'));
				let itemId = Number(self.attr('id'));

				if (itemColor === sortedObj.values[itemId] && sortedObj.values[itemId] !== 0) {
					led.addClass('checked');
					clickedTotal++;

					if (clickedTotal === sortedTotal) {
						$('.button.done').removeClass('disable').addClass('active');
						$(leds).each((i, obj) => {
							obj.addClass('disable');
						})
					} else {
						console.log(`${clickedTotal} is smaller than ${sortedTotal}`);
					}
				} else {
					console.log(`${itemColor} is not equal ${sortedObj.values[itemId]}`);
				}
			});
		}
	}
}