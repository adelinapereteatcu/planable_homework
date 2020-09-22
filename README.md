# Planable test assigment

This is the implemntation of a web application using React with Meteor platform. 
It fetches data from Reddit and saves it in MongoDB database.
The data is displayed in the UI using the React framework Material-UI and it renders:
 - an icon with the first letter of the author's name
 - the name of the author
 - the post title
 - the number of comments
 
There is also pagination to see more posts.

## Installation

Download the repo and run the following command in the parent directory to install all the dependencies.

```bash
npm install
```

## Usage

Run the web application in the command prompt using the following command: 
```python
meteor run
```

For visualising the database run in another command prompt:
```python
meteor mongo
```

To see the collections from the database use the following command: 
```python
show collections
```

To see the data from a collection use:  
```python
db.[your-collection-name].find()
```

The app can be seen on http://localhost:3000/ in the browser.
