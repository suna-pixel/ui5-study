sap.ui.define([
  "sap/ui/base/ManagedObject",
  "sap/ui/core/Fragment"
], function(ManagedObject, Fragment){
  "use strict";

  return ManagedObject.extend("zstep002.controller.HelloDialog", {
    constructor: function(oView){
      this._oView = oView;
    },
    open: function(){
      var oView = this._oView;
      if(!oView.byId("helloDialog")){
        var oFragmentController = {
          onCloseDialog: function(){
            oView.byId("helloDialog").close();
          }
        };

        Fragment.load({
          id: oView.getId(),
          name: "zstep002.view.HelloDialog",
          controller: oFragmentController
        }).then(function(oDialog){
          oView.addDependent(oDialog);
          oDialog.open();
        });
      }else{
        oView.byId("helloDialog").open();
      }
    },
    exit: function(){
      delete this._oView;
    }
  });
});
