import Service from '@ember/service';
import { GiphyFetch } from '@giphy/js-fetch-api';
import ENV from 'ember-giphy/config/environment';

const gf = new GiphyFetch(ENV.GIPHY_API_KEY);

export default class GiphyFetchService extends Service {
  qty = 25;
  async getItems(itemType = 'gifs', offset = 0) {
    const tGifs = await gf.trending({
      type: itemType,
      limit: this.qty,
      offset: this.qty * offset,
      rating: 'g',
    });
    return tGifs.data;
  }
}
