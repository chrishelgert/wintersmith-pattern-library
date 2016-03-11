var test = require('ava');

// Fake plugin-structure for wintersmith
var env = {
  helpers: {}
};
require('../../plugins/helpers')(env, function helpers() {});

/**
 * Creates a page-mock
 *
 * @param {string} path - relative filepath
 * @result {object} page-mock
 */
function createPageMock(path) {
  return {
    filepath: {
      relative: path
    },
    parent: {
      parent: {
        alerts: {},
        progress: {}
      }
    }
  };
}

test('createPatternTitle', function createPatternTitle(t) {
  var pageMock = createPageMock('/patterns/components/alerts/default.md');

  var title = env.helpers.createPatternTitle(pageMock);
  var expected = 'Alerts';

  t.is(title, expected);
});

test('createSubcategoryUrl', function createSubcategoryUrl(t) {
  var pagesMock = {
    'default.md': createPageMock('/patterns/components/alerts/default.md'),
    'link-color.md': createPageMock('patterns/components/alerts/link-color.md')
  };

  var url = env.helpers.createSubcategoryUrl(pagesMock);
  var expected = '/patterns/components/alerts/default.html';

  t.is(url, expected);
});
