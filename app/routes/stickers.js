import Route from '@ember/routing/route';
import { GiphyFetch } from '@giphy/js-fetch-api'
import ENV from 'ember-giphy/config/environment';

const gf = new GiphyFetch(ENV.GIPHY_API_KEY);

export default class StickersRoute extends Route {
  async model() {
    return this.getItems('stickers');
  }
  async getItems(itemType = 'gifs') {
    //type: gifs / stickers / text
    const tGifs = await gf.trending({ type: itemType, limit: 25, offset: 0, rating: 'g' });
    console.log(tGifs);
    return tGifs.data;
  }
}
