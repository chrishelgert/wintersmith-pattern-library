module.exports = function helpers(env, cb) {
  /**
   * capitalize the given word
   * 
   * @param  {String}  word
   * @result {String}        capitalized word
   */
  function capitalize(word) {
    return word.substr(0, 1).toUpperCase().concat(word.substr(1));
  }
  
  /**
   * creates the page-title for a pattern-template
   * 
   * @param  {Object}  page       current page
   * @return {String}             pagetitle
   */
  function createPatternTitle(page) {
    var parentCategory = page.parent.parent;
    var currentPageUrl = page.filepath.relative;
    
    var title = '';
    for(var prop in parentCategory) {
      if(currentPageUrl.indexOf(prop) !== -1) {
        title = prop;
      }
    }
    
    return capitalize(title);
  }
  
  /**
   * creates a subcategory-url for the navigation
   * 
   * @param  {object}  pages  all pages for a category
   * @return {string}         subcategory-url
   */
  function createSubcategoryUrl(pages) {
    var key = Object.keys(pages)[0];
    return pages[key].filepath.relative.replace('md', 'html');
  }
  
  // add the functions to the environment, so we can use it
  env.helpers.createPatternTitle = createPatternTitle;
  env.helpers.createSubcategoryUrl = createSubcategoryUrl;
  
  // tell the plugin manager we are done
  cb();
};