sap.ui.define([
  "sap/m/Text"
], function(Text){
  "use strict";

  new Text({
      text: "Hello World with control"
  }).placeAt("content");     //append 기능
  // alert("UI5 is ready");  //popup메시지
});
