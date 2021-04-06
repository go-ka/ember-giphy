import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | giphy-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a Giphy Item with all the information', async function(assert) {
    this.setProperties({
      item: {
        title: 'Spring April GIF by SpongeBob SquarePants',
        images: {
          fixed_height_small: {
            webp: 'https://media2.giphy.com/media/X4M6homF66qFq/100.webp?cid=a19c730d6rsdn5uyb3hjkqf21ua6yllhr26ucrvhz2340hij&rid=100.webp'
          },
          fixed_height_small_still: {
            url: 'https://media2.giphy.com/media/X4M6homF66qFq/100_s.gif?cid=a19c730d6rsdn5uyb3hjkqf21ua6yllhr26ucrvhz2340hij&rid=100_s.gif'
          },
          original_mp4: {
            mp4: 'https://media2.giphy.com/media/X4M6homF66qFq/giphy.mp4?cid=a19c730d6rsdn5uyb3hjkqf21ua6yllhr26ucrvhz2340hij&rid=giphy.mp4'
          }
        },
        is_sticker: false
      }
    });

    await render(hbs`<GiphyItem @item={{this.item}} />`);

    assert.dom('button').hasClass('item');
    assert.dom('p.click').exists();
    assert.dom('p.click').includesText('Click to');
    assert.dom('img').exists();

    await click('p.click');
    assert.dom('video').exists();
    assert.dom('p.title').exists();
    assert.dom('p.title').hasText('Spring April GIF by SpongeBob SquarePants');

  });
});
