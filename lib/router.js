Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('', {
  name: 'feed',
  waitOn: function() {
    return [Meteor.subscribe('posts')]
  }
});
