## Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Used React JS, JavaScript, HTML, SCSS, React-Bootstrap

# Live App URL:  https://swat-mobility.surge.sh/


## Capabilities

- Search photos from the unsplash.com API
- List search result on cards
- Cards are clickable and taking the users to unsplash page of the photo 
- Page navigator to browse other pages

## What can be implemented

- Page can be optimized for mobile.
- SEO friendly URLs and It will allow users to share the search result.
- CI/CD integration  (ex: with circle ci, travis ci).
- Need to use middleware to connect to the unsplash API because current approach exposes the API key to the outside.
 

## Available Scripts

- First you need to clone the application to your local machine and go into it using terminal
- Run `npm install` to install all the dependencies
- Get a copy of `.env.sample` file and rename it to `.env` 
- Save your UNSPLASH TOKEN key in `REACT_APP_ACCESS_TOKEN` environment variable  of `.env` file

In the project directory, you can run below command to start the project:

```
npm start
#or
yarn start

```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```
npm run test
#or
yarn test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm run build
#or
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Folder Structure

```
    ├── ...
    ├── containers              
    │   └── Dashboard.js            # main container that shows search result, navbar, pagination
    └── components                  # react component files
    │   ├── Error                   # error component
    │   │   ├── index.js            # component code
    │   │   ├── index.module.scss   # CSS module
    │   │   └── index.test.js       # Unit test
    │   ├── CardList                # card component
    │   ├── Navigator               # Search result component
    │   ├── Header                  # footer component
    │   ├── ...                 
    └── utils
    │   ├── styles                  # styles related codes
    │   └── api                     # API and data fetching related logics
    └── .env.sample                 # env variables for local & staging
```
