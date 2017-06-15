Meteor.publish('immeublesP', function(){
  return Immeuble.find({});
});
