sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog",
	"sap/ui/Device"
    
], function(UIComponent, JSONModel, HelloDialog, Device) {
    'use strict';
    
    return UIComponent.extend("com.lucino.sapui.Component", {
        metadata : {
            manifest: "json"
        },
        init: function() {
            UIComponent.prototype.init.apply(this, arguments)

            // Set data model
            var oData = {
                recipient: {
                    name: "World"
                }
            }
            var oModel = new JSONModel(oData)
            this.setModel(oModel)

            // set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

            // Set dialog
            this._helloDialog = new HelloDialog(this.getRootControl())

            // Create the views base on the url/hash
            this.getRouter().initialize()
        },

        exit: function() {
            this._helloDialog.destroy()
            delete this._helloDialog
        },

        openHelloDialog: function() {
            this._helloDialog.open()
        },

        // getContentDensityClass : function () {
		// 	if (!this._sContentDensityClass) {
		// 		if (!Device.support.touch) {
		// 			this._sContentDensityClass = "sapUiSizeCompact";
		// 		} else {
		// 			this._sContentDensityClass = "sapUiSizeCozy";
		// 		}
		// 	}
		// 	return this._sContentDensityClass;
		// }

    })
});