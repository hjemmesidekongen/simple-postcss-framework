[![Netlify Status](https://api.netlify.com/api/v1/badges/751b31b0-29b0-486a-8f58-295105327b88/deploy-status)](https://app.netlify.com/sites/simple-postcss-framework/deploys)

## Demo
To see what this simple PostCSS framework offers, please visit:
https://simple-postcss-framework.hjemmesidekongen.dk/

## What does this framework offer?
- grid
- buttons
- typography (paragraph, link and headings)

## Installation and usage

## Installation
`npm install simple-postcss-framework`

`yarn add simple-postcss-framework`

### Import into existing project
You can import this project with the following:

`@import "../node_modules/simple-postcss-framework/styleguide/stylesheet.css"`

This is depending on the path to your "node_modules" folder.

### Override variables
Copy "variables.css"-file from "styleguide/variables.css" to your project and override the variables. You can also create an empty file and just override single variables like:

`
:root {
    --base__line-height: 1.5;
}
`

## Why did @hjemmesidekongen create this framework?
Basically almost all frameworks are bloated. 

In the last 10 projects i've only used 20% of the entire CSS framework. But was forced to load the entire 100% of the framework. This lead to a +150kb. not-needed code-load on each pageload - that is silly.
