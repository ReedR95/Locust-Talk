//if (Meteor.isClient) {

Router.route('/', function(){
  //this.render('main');
  
  // if (!Session.get('identity')) {
  //   Session.set('identity', Date.now());
  // }
  // 
  // Template.compose.events({
  //   'click button': function (e) {
  //     var $content = $(e.target).parent().find('textarea');
  //     
  //     post = {
  //       date_created: Date.now(),
  //       author: Session.get('identity'),
  //       content: $content.val()
  //     }
  //     if (post.content) {
  //       Posts.insert(post);
  //       $content.val('');
  //     } else {
  //       alert('your post must not be empty...');
  //     }
  //   }
  // });
  // 
  // Template.compose.helpers({
  //   identity: function() {
  //     return Session.get('identity');
  //   }
  // });
})
  

//}
