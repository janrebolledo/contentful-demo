# Contentful CMS Site

To start this project, you must have

1. A [Contentful](https://contentful.com) account and space
2. Node & NPM installed

## Project Setup

### Content Model

![Content Model](/public/Content Model.png)

> Note:  
> If you'd like to change the content model, you have to mess around with `Post.jsx` & `[slug].jsx` and edit the imports

### Enviroment Variables

Create a `.env.local` file in the root directory and with this set up.

```
CONTENTFUL_SPACE_ID=YOUR SPACE KEY HERE
CONTENTFUL_ACCESS_KEY=YOUR ACCESS KEY HERE
```

When deploying the website, make sure to add these to your enviroment variables

### Running Locally

To run this project locally you can use

`npm run dev`

or

`yarn dev`
