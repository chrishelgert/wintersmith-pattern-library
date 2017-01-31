/* eslint no-param-reassign: [2, { "props": false }] */

module.exports = function helpers(env, cb) {
  /**
   * Capitalize the given word
   *
   * @param {String} word
   * @result {String} capitalized word
   */
  function capitalize(word) {
    return word
      .substr(0, 1)
      .toUpperCase()
      .concat(word.substr(1));
  }

  /**
   * Get the page-title for a pattern-template
   *
   * @param {Object} page - current page
   * @return {String} pagetitle
   */
  function getPatternTitle(page) {
    var parentCategories = Object.keys(page.parent.parent);
    var currentPageUrl = page.filepath.relative;
    var title = '';

    parentCategories.forEach(function getTitle(prop) {
      if (currentPageUrl.indexOf(prop) !== -1) {
        title = prop;
      }
    });

    return capitalize(title);
  }

  /**
   * Get the subcategory-url for the navigation
   *
   * @param {Object} pages - all pages for a category
   * @return {String} subcategory-url
   */
  function getSubcategoryUrl(pages) {
    var key = Object.keys(pages)[0];
    return pages[key]
      .filepath
      .relative
      .replace('md', 'html');
  }

  /**
   * Get a array with Stylesheet files
   *
   * @param {Object} contents - content-tree
   * @return {Object} Array with files
   */
  function getStylesheetFiles(contents) {
    var files = [contents.stylesheets['base.css'].url];
    var customFiles = env.locals.stylesheets;

    if (customFiles && customFiles.length) {
      files = customFiles;
    }

    return files;
  }

  /**
   * Get a array with JavaScript files
   *
   * @param {Object} contents - content-tree
   * @return {Object} Array with files
   */
  function getJavaScriptFiles(contents) {
    var files = [contents.javascripts['base.js'].url];
    var customFiles = env.locals.javascripts;

    if (customFiles && customFiles.length) {
      files = customFiles;
    }

    return files;
  }

  // add the functions to the environment, so we can use it
  env.helpers.getPatternTitle = getPatternTitle;
  env.helpers.getSubcategoryUrl = getSubcategoryUrl;
  env.helpers.getStylesheetFiles = getStylesheetFiles;
  env.helpers.getJavaScriptFiles = getJavaScriptFiles;

  // tell the plugin manager we are done
  cb();
};
