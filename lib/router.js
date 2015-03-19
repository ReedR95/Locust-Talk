Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('', {
  name: 'feed',
  waitOn: function() {
    return [Meteor.subscribe('posts')]
  }
});
