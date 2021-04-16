import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { GiphyFetch } from '@giphy/js-fetch-api';
import ENV from 'ember-giphy/config/environment';

const gf = new GiphyFetch(ENV.GIPHY_API_KEY);

export default class IndexController extends Controller {
  @tracked gifsFilterValue;
  // model
  @tracked filteredGifs = this.model;
  offset = 1;

  @action filterGifs() {
    this.filteredGifs = this.model.filter((item) =>
      item.title.toLowerCase().includes(this.gifsFilterValue.toLowerCase())
    );
  }

  @action async loadMoreItems(itemType = 'gifs') {
    const gifs = await gf.trending({
      type: itemType,
      limit: 25,
      offset: 25 * this.offset,
      rating: 'g',
    });
    this.model.pushObjects(gifs.data);
    this.filterGifs();
    this.offset++;
  }
}
