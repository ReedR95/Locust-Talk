
Template.feed.helpers({
  posts: function() {
    return Posts.find({}, {sort: {'date_created': -1}});
  }
});
