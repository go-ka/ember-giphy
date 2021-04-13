import Controller from '@ember/controller';
import { action } from '@ember/object';
import { GiphyFetch } from '@giphy/js-fetch-api'
import ENV from 'ember-giphy/config/environment';

const gf = new GiphyFetch(ENV.GIPHY_API_KEY);

export default class IndexController extends Controller {
  offset = 1;

  @action
  async loadMoreItems(itemType = 'gifs') {
    const gifs = await gf.trending({ type: itemType, limit: 25, offset: 25*this.offset, rating: 'g' });
    this.model.pushObjects(gifs.data);
    this.offset++;
  }
}
