sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "./controller/HelloDialog"
], function(UIComponent, JSONModel, HelloDialog){
  "use strict";

  return UIComponent.extend("zstep002.Component", {
    metadata: {
      manifest: "json"
    },
    init: function(){
      UIComponent.prototype.init.apply(this, arguments);

      var oData = {
        recipient : {
          name: "World"
        }
      };
      var oModel = new JSONModel(oData);
      this.setModel(oModel);

      this._helloDialog = new HelloDialog(this.getRootControl());
  },
  openHelloDialog: function(){
    this._helloDialog.open();
  },
  exit: function(){
    this._helloDialog.destory();
    delete this._helloDialog;
  }
  });
});
