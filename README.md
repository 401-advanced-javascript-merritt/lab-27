# lab-27

![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

[![Build Status](https://www.travis-ci.com/401-advanced-javascript-merritt/lab-27.svg?branch=master)](https://www.travis-ci.com/401-advanced-javascript-merritt/lab-27)

## React Testing and Deployment Lab
### Chris Merritt

### Links and Resources
* [PR]()

AWS Buckets link: 
* [link](http://merrittlab27.s3-website-us-west-2.amazonaws.com/)

AWS Pipeline link:
* [link](https://merrittlab27stack-merrittlab27bucket-1nl7995ms6hlu.s3.us-east-2.amazonaws.com/index.html)

Netlify Link:
* [link](https://zealous-jackson-68ba60.netlify.com/#)

### Components:

#### `<Header />`
* Creates a header tag with some text in it.

#### `<Counter />`
* has state: counter, polarity.

* handleUp:
  * raises the state counter by one

* handleDown:
  * lowers the state counter by one.

* Creates a section with a minus button and a plus button.

#### `<Footer />`
* Creates a footer tag with some text in it.

### Setup
#### `.env` requirements
* `npm i`
* `PORT` - assign a port number
* `MONGODB_URI` - URL to the running mongo instance/db
#### Running the app
* `npm start`
* Endpoint: `/`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* `npm run test`
* Assertions: 
  * Counter should increment the count
  * Counter should decrease the count
* What assertions need to be / should be made?
  * The snapshot should pass.
  
#### UML
[uml](./uml.jpg)