import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @tracked gifsFilterValue;
  @tracked filteredGifs = this.model;
  @service giphyFetch;
  offset = 1;

  @action filterGifs() {
    this.filteredGifs = this.model.filter((item) =>
      item.title.toLowerCase().includes(this.gifsFilterValue.toLowerCase())
    );
  }

  @action async loadMoreItems(itemType = 'gifs') {
    const newItems = await this.giphyFetch.getItems(itemType, this.offset);
    this.model.pushObjects(newItems);
    this.offset++;
    if (this.gifsFilterValue) {
      this.filterGifs();
    }
  }
}
