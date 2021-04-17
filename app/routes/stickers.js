import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class StickersRoute extends Route {
  @service giphyFetch;
  async model() {
    return this.giphyFetch.getItems('stickers');
  }
}
