# Foxy CSS

Foxy CSS is a small, independently tended magazine about CSS. Each issue gives one concept room to breathe, pairing a practical explanation with an interactive demo.

Issue 1 covers Flexbox: the container properties, the item properties, and a live playground for seeing how they work together.

## Pages

- `/` — published issues
- `/issues/flexbox` — Issue 1: Flexbox
- `/about` — about Foxy CSS

The site is static HTML, CSS, and a little JavaScript for the Flexbox playground. Netlify publishes the `site/` folder on every push to `main`.

## Local development

Serve the site locally:

```sh
npm start
```

That opens a static server for the `site/` directory.

Run the checks with:

```sh
npm test
```
