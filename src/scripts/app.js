import {Profiles} from 'modules/profiles';
import {Commons} from 'modules/commons';
import {Game} from 'modules/game';

$(document).ready(function() {
    const profiles = new Profiles();
    const commons = new Commons();
    const game = new Game();

    profiles.setup();
    commons.setup();
    game.results();
});