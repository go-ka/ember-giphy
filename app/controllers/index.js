import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @tracked gifsFilterValue;
  // model
  @tracked filteredGifs = this.model;
  
  @action filterGifs() {
    this.filteredGifs = this.model.filter(item => item.title.toLowerCase().includes(this.gifsFilterValue.toLowerCase()));
  }
}
