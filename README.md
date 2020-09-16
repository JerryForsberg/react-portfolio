# react-portfolio

This portfolio was created using react with both functional and class based components, and was styled using mostly react bootstrap, with some in-line styling. 

## Structure

The portfolio consists of an about me page, a past work page, and a contact page. 

along with this, there are 2 components, one for the navbar, and one for cards. 

##### Components

The navbar uses react router for navigation and is only called in the app.js file

The card component takes in props to display relevant information for each card on the past work page.

##### Pages

Each page uses some predefined components from react bootstrap. 

The about page uses a simple jumbotron inside of a container, and has within it, some image components from bootstrap, as well as icons that link to my github and linkedin and a pdf of my resume, as well as a button for navigation to the past work page. 

The past work page also uses react bootstrap for the container, and then calls in the card that I created in the components, and then maps data from a json file, using state, and uses that data to fill in each individual card with the corresponding data.

The contact page is a basic form inside of a container with some placeholder and a submit button.

Each page is then imported by app.js and exact routes are set using react-router-dom.

## Deployed Version
 This app is deployed using netlify and can be found using the following link https://jerry-forsberg.netlify.app/
