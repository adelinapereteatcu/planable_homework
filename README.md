# Planable test assigment

This isthe implemntation of a web application using React with Meteor platform. 
It fetches data from Reddit and saves is in the database.
The data is displayed in the UI using the React framework Material-UI and it renders:
 - an icon with the first name of the post author
 - the name of the author
 - the post title
 - the number of comments
There is also pagination to see more posts.

## Installation

Download the repo and run the following command to install all the dependencies.

```bash
npm install
```

## Usage

Run the web application in the command prompt using the following command: 
```python
meteor run
```

To visualise the database run in another command prompt
```python
meteor run
```

To see the collections from the database run 
```python
show collections
```

To see the data from a collection use:  
```python
db.[your-collection-name].find()
```

The app can be visualised on http://localhost:3000/
