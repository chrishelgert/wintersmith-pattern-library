var test = require('ava');

// Fake plugin-structure for wintersmith
var env = {
  helpers: {},
  locals: {}
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

/**
 * Creates a contents-mock
 *
 * @return {object} contents-mock
 */
function createContentsMock() {
  return {
    javascripts: {
      'base.js': {
        filepath: {
          relative: 'javascripts/base.js'
        }
      }
    },
    stylesheets: {
      'base.css': {
        filepath: {
          relative: 'stylesheets/base.css'
        }
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

test('getJavaScriptFiles with config', function getJavaScriptFiles(t) {
  var contentMock = createContentsMock();
  var expected = ['http://www.example.com/a.js', 'http://www.example.com/b.js'];
  var javaScriptFiles;

  env.locals = { javascripts: expected };
  javaScriptFiles = env.helpers.getJavaScriptFiles(contentMock);

  t.same(javaScriptFiles, expected);
});

// TODO: Doesn't work
test('getJavaScriptFiles without config', function getJavaScriptFiles(t) {
  var contentMock = createContentsMock();
  var javaScriptFiles;

  env.locals = {};
  javaScriptFiles = env.helpers.getJavaScriptFiles(contentMock);

  t.same(javaScriptFiles, ['javascripts/base.js']);
});

test('getStylesheetFiles with config', function getStylesheetFiles(t) {
  var contentMock = createContentsMock();
  var expected = ['http://www.example.com/a.css', 'http://www.example.com/b.css'];
  var stylesheetFiles;

  env.locals = { stylesheets: expected };
  stylesheetFiles = env.helpers.getStylesheetFiles(contentMock);

  t.same(stylesheetFiles, expected);
});

// TODO: Doesn't work
test('getStylesheetFiles without config', function getStylesheetFiles(t) {
  var contentMock = createContentsMock();
  var stylesheetFiles;

  env.locals = {};
  stylesheetFiles = env.helpers.getStylesheetFiles(contentMock);

  t.same(stylesheetFiles, ['stylesheets/base.css']);
});
