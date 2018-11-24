import {Profiles} from 'modules/profiles';
import {Commons} from 'modules/commons';
import {Game} from 'modules/game';
import {Letters} from 'modules/letters';

$(document).ready(function() {
    const profiles = new Profiles();
    const commons = new Commons();
    const game = new Game();
    const letters = new Letters();

    profiles.setup();
    commons.setup();
    game.results();
    game.leds();
    letters.setup();
});