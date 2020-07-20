sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
    'use strict';
    
    new ComponentContainer({
        name: "com.lucino.sapui",
        settings: {
            id: "lucino_app"
        },
        async: true
    }).placeAt("content")
});