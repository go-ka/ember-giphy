import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GiphyItemComponent extends Component {
  @tracked loaded = false;
  @tracked expanded = false;

  @action toggleSize() {
    this.expanded = !this.expanded;
  }
  @action setLoaded() {
    this.loaded = true;
  }
}