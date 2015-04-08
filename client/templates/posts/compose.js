if (!Cookie.get('identity')) {
  Cookie.set('identity', Date.now());
}

Template.compose.events({
  'click button': function (e) {
    var $content = $(e.target).parent().find('textarea');
    
    var post = {
      date_created: Date.now(),
      author: Cookie.get('identity'),
      content: $content.val()
    }
    
    if (post.content) {
      Posts.insert(post);
      $content.val('');
    } else {
      alert('your post must not be empty...');
    }
  }
});

Template.compose.helpers({
  identity: function() {
    return Cookie.get('identity');
  }
});
