
## Alchemy Tutorial From [YouTube Tutorial](https://www.youtube.com/watch?v=YehktV6LSqw&t=29s)

- Project [Github Repo](https://github.com/alchemyplatform/Build-Your-NFT-Explorer)
- Hosted React Project on [Vercel](https://build-your-nft-explorer.vercel.app/)
- Original creator [Vitto Rivabella](https://twitter.com/vittostack)


## Setup

- Install project named `alchemy-nft-api-explorer` with 
    - `npx create-react-app alchemy-nft-api-explorer`
- Install Tailwind CSS [(8:10)](https://youtu.be/YehktV6LSqw?si=5KiIp5JCtWGZqxew&t=490)
    - Per [TailwindCSS Installation Docs](https://tailwindcss.com/docs/installation)
        - run **`npm install -D tailwindcss`**
        - then initialize configuration (`tailwind.config.js`) with **`npx tailwindcss init`**
    - At [(9:10)](https://youtu.be/YehktV6LSqw?si=XA1xmUJka5YGbg2H&t=550) update **tailwind.config.js**
    - Add the Tailwind directives to our **top level main CSS file**, which in this project is `index.css`
        
```css
@tailwind base; 
@tailwind components; 
@tailwind utilities; 
```


## Project Steps

1. utils/FetchNfts.js set up at [(13:15)](https://youtu.be/YehktV6LSqw?si=0KEZegXs7YMrBOuw&t=795)
    - Get your Alchemy API key. 
    - 

2. 

---
---
# Default Notes from Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
