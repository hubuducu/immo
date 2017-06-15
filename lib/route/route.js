FlowRouter.route("/",{
    subscriptions:function () {
      this.register('immeublesP',  Meteor.subscribe('immeublesP'));
    },
    actions:function() {
        FlowLayout.render("index");
    }
});

FlowRouter.route("/imms",{
    subscriptions:function () {
      this.register('immeble',  Meteor.subscribe('immeublesP'));
    },
    actions:function() {
        FlowLayout.render("index", {page: 'imms'});
    }
});
