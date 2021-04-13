import Route from '@ember/routing/route';
import { GiphyFetch } from '@giphy/js-fetch-api'
import ENV from 'ember-giphy/config/environment';

const gf = new GiphyFetch(ENV.GIPHY_API_KEY);

export default class IndexRoute extends Route {
  async model() {
    return (await gf.trending({ type: 'gifs', limit: 25, offset: 0, rating: 'g' })).data;
  }
}
