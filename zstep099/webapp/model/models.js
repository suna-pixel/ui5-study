sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
function (JSONModel, Device) {
    "use strict";

    return {
       createJsonModel: function() {
         var oModel = new JSONModel();
         var sPath = jQuery.sap.getModulePath("zstep099","model/localData/myData.json");
         oModel.loadData(sPath);
         return oModel;
       }
    };

});
