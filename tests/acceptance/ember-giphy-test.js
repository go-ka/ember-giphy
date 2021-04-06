import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember giphy', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    assert.dom('h1').hasText('GIPHY TRENDS');
    assert.dom('nav .menu-gifs').hasText('gifs');
    assert.dom('nav .menu-stickers').hasText('stickers');
    assert.dom('nav .menu-text').hasText('text');

    await click('nav .menu-stickers');
    assert.equal(currentURL(), '/stickers')

  });

  test('visiting /stickers', async function(assert) {
    await visit('/stickers');
    assert.equal(currentURL(), '/stickers');
    assert.dom('nav .menu-text').hasText('text');

    await click('nav .menu-text');
    assert.equal(currentURL(), '/text')
  });

  test('visiting /text', async function(assert) {
    await visit('/text');
    assert.equal(currentURL(), '/text');
    assert.dom('nav .menu-gifs').hasText('gifs');

    await click('nav .menu-gifs');
    assert.equal(currentURL(), '/')
  });
});
