FlowRouter.route("/",{
    subscriptions:function () {
      this.register('immeublesP',  Meteor.subscribe('immeublesP'));
    },
    action:function() {
      FlowLayout.render('page2');
    }
});
FlowRouter.route("/imms",{
    subscriptions:function () {
      this.register('immeublesP',  Meteor.subscribe('immeublesP'));
    },
    action:function() {
      FlowLayout.render("imms");
    }
});

FlowRouter.route("/newImms",{
    subscriptions:function () {
    },
    action:function() {
      FlowLayout.render("newImms");
    }
});
