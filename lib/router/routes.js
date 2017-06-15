FlowRouter.route("/",{
    subscriptions:function () {
      this.register('immeublesP',  Meteor.subscribe('immeublesP'));
    },
    action:function() {
      FlowLayout.render("index", {page: 'page'});
    }
});
FlowRouter.route("/imms",{
    subscriptions:function () {
      Meteor.subscribe('immeublesP');

      this.register('immeublesP',  Meteor.subscribe('immeublesP'));
    },
    action:function() {
      FlowLayout.render("index", {page: 'imms'});
    }
});

FlowRouter.route("/newImms",{
    subscriptions:function () {
    },
    action:function() {
      FlowLayout.render("newImms");

    }
});
