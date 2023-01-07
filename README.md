# Next.js 13 Contentful Blog

Site is live [here](https://contentful-demo-janrebolledo.vercel.app/).

> ⚠️ Caution:  
> This project uses `appDir`, an experimental feature of Next.js 13.

To start this project, you must have

1. A [Contentful](https://contentful.com) account and space
2. Node & NPM installed

## Lighthouse Report

![Lighthouse report](/public/Lighthouse.png)

SEO is handled through `head.js`.

## Project Setup

### Project Dependencies

Blog content is pulled from Contentful CMS, the default `contentful` package is used.

Blog content is written in markdown. Markdown processor `marked` is used to display content.

`Plaiceholder` is used to have blurred image placeholders.

### Content Model

![Content Model](/public/ContentModel.png)

> Note:  
> If you change the content model, you have to edit with `Post.jsx` & `[slug].jsx` and edit the imports

![Variables](/public/Variables.png)

Edit `Variables.jsx` to change the name of the site, it handles SEO.

### Enviroment Variables

Create a `.env.local` file in the root directory and with this set up.

```
CONTENTFUL_SPACE_ID=YOUR SPACE KEY HERE
CONTENTFUL_ACCESS_KEY=YOUR ACCESS KEY HERE
```

When deploying the website, make sure to add these to your enviroment variables

### Running Locally

Make sure all of your packages are installed and up to date with `npm install`

To run this project locally you can use

`npm run dev`

or

`yarn dev`
