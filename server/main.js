import { Meteor } from 'meteor/meteor';
import Posts from '/imports/api/posts';
import { HTTP } from 'meteor/http';

Meteor.startup(() => {
  // If the Links collection is empty, add some data.

  console.log("Meteor start up");
  Posts.remove({});

  HTTP.get('https://www.reddit.com/r/popular.json', {}, function (error, response) {

    if (error) {
      console.log(error);
    } else {
      //console.log(response.data.data.children["0"].data.title);
      if (Posts.find().count() === 0) {

      response.data.data.children.forEach(function (obj) { 
          //console.log(obj.data.title); 
          //console.log(obj.data.author_fullname); 
          Posts.insert({
            post_title: obj.data.title, 
            author: obj.data.author,
            num_comments: obj.data.num_comments,
            subreddit: obj.data.subreddit,
            thumbnail: obj.data.thumbnail
          });
        });
      }
    }
  });
});
