Template.post.helpers({
  date: function() {
    var time = this.date_created;
    var date = moment(time);
    
    var now = moment();
    var date_string = date.from(now);
    return date_string;
  }
});
