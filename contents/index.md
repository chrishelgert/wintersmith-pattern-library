---
title: Overview
template: layout.jade
---

<center>
  ![Icon](images/favicon.png)
</center>

<center>
  [**wintersmith-pattern-library**](https://github.com/chrishelgert/wintersmith-pattern-library)
  is a project for creating and managing your front-end pattern library.
</center>

---

### Introduction

#### Folder structure

Your patterns are located in the `contents/patterns` folder.

**For example:**

```
contents/patterns/
  components/
    alerts/
      default.md
      link-color.md
    progress/
      contextual-alternatives.md
        default.md
        striped.md
  elements/
    buttons/
      default.md
      disabled.md
      outline.md
      sizes.md
    colors/
      color-palette.md
    typography/
      blockquotes.md
      customizing-headings.md
      headings.md
      inline-text-elements.md
      lead.md
```

**Explanation:**

```
elements/       <= Category
  typography/   <= Subcategory
    headings.md <= Pattern
```

#### Pattern format

Each pattern has a `title`. The `description`, `show_code` and `use_source` is
optional.

**For example `headings.md`:**

```html
---
title: Headings
description: All HTML headings, &lt;h1&gt; through &lt;h6&gt;, are available. .h1 through .h6 classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.
---

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

#### Frontmatter

Frontmatter allows page-specific variables to be included at the top of a
template using the JSON format.

**For example:**

```
---
title: Lorem ipsum
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
iusmod tempor incididunt ut labore et dolore magna aliqua.
show_code: false
use_source: false
---
```

**title:** The title of the page.

**description:** The description of the page.

**show_code:** If you set the value to `false`, the code is not displayed.

**use_source:** If you set the value to `false`, your CSS will not load.


#### Assets

Your JS is located at `contents/javascripts/`

```
contents/javascripts
  wpl/    <= JS for the wintersmith-pattern-library
  base.js <= JS for your patterns
```

and your CSS is located at `contents/stylesheets/`

```
contents/stylesheets/
  wpl/      <= CSS for the wintersmith-pattern-library
  base.css  <= CSS for your patterns
```

Your JS and CSS are hosted on a CDN? Insert your external assets into `config.json`:

```json`
{
  "locals": {
    "stylesheets": [
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css"
    ],
    "javascripts": [
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"
    ]
  }
}
```

### Preview the site with `npm run preview`

Start the preview web-server from inside your project folder.
Using the command-line and run `npm run preview`:

```bash
$ cd my_pattern_library
$ npm run preview
```

This will start a local web server running at http://localhost:8080/.

### Building the site with `npm run build`

Finally, when you are ready to deliver static code, you will need to build the
site. Using the command-line, from the project folder, run `npm run build`:

```bash
$ cd my_pattern_library
$ npm run build
```

This will create a static file for each file located in your source folder.

### OMG, I don't know what I should do!

For help, see the official [Wintersmith](http://wintersmith.io/) website.
No success? Then create an [Issue](https://github.com/chrishelgert/wintersmith-pattern-library/issues/new).

### License

[**wintersmith-pattern-library**](https://github.com/chrishelgert/wintersmith-pattern-library)
is free and open source! The code is licensed under
[MIT](https://github.com/chrishelgert/wintersmith-pattern-library/blob/master/LICENSE).
