sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "zstep099/model/models"
], function(Controller, MessageToast, models){
  "use strict";

  return Controller.extend("zstep099.controller.App",{
     onInit() {
       var oModel = models.createJsonModel();
       this.getView().setModel(oModel, "jsonModel")
     }

  });

});
