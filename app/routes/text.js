import Route from '@ember/routing/route';
import { GiphyFetch } from '@giphy/js-fetch-api'
import ENV from 'ember-giphy/config/environment';

const gf = new GiphyFetch(ENV.GIPHY_API_KEY);

export default class TextRoute extends Route {
  async model() {
    return this.getItems('text');
  }
  async getItems(itemType = 'gifs') {
    const tGifs = await gf.trending({ type: itemType, limit: 25, offset: 0, rating: 'g' });
    return tGifs.data;
  }
}
