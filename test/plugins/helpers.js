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
 * @return {object} page-mock
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

test('getPatternTitle', function getPatternTitle(t) {
  var pageMock = createPageMock('/patterns/components/alerts/default.md');

  var title = env.helpers.getPatternTitle(pageMock);
  var expected = 'Alerts';

  t.is(title, expected);
});

test('getSubcategoryUrl', function getSubcategoryUrl(t) {
  var pagesMock = {
    'default.md': createPageMock('/patterns/components/alerts/default.md'),
    'link-color.md': createPageMock('patterns/components/alerts/link-color.md')
  };

  var url = env.helpers.getSubcategoryUrl(pagesMock);
  var expected = '/patterns/components/alerts/default.html';

  t.is(url, expected);
});
