import Route from '@ember/routing/route';
import { GiphyFetch } from '@giphy/js-fetch-api'
import ENV from 'ember-giphy/config/environment';

const gf = new GiphyFetch(ENV.GIPHY_API_KEY);

export default class IndexRoute extends Route {

  async model() {
    return this.getItems('gift');
  }
  async getItems(itemType) {
    //type: gifs / stickers / text
    const tGifs = await gf.trending({ limit: 25, offset: 0, rating: 'g' });
    // console.log(tGifs);
    return tGifs.data;
  }
  
}
