sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"
 ], function (Controller, Fragment, MessageToast) {
    "use strict";

    return Controller.extend("com.lucino.sapui.controller.HelloPanel", {
        btnHandler : function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
        },
        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog()
        }
    });
 });