import { configure } from '@kadira/storybook';

function loadStories() {
    require('../src/app/components/Players/components/StockTile/StockTile.story.js');
    require('../src/app/components/Players/components/Counter/Counter.story.js');
}

configure(loadStories, module);
