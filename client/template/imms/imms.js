Template.newImms.events({
  "click #clickB": function(evt,template){
    evt.preventDefault();
    var im = {};
    im.name =  template.find("#name").value;
    Meteor.call("Immeuble.Save",im);
  }
})
