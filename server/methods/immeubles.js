Meteor.methods({
  'Immeuble.Save': function(objImm){
    Immeuble.insert(objImm);
  }
})
