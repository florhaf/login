Ext.define("Login.view.tablet.LegalNotice", {
    extend: "Login.view.LegalNotice",
    xtype: "tablet-legalNotice",
    config: {
        showAnimation: {
            type: "popIn"
        },
        hideAnimation: {
            type: "popOut"
        },
        width: "500px",
        height: "600px",
        floating: true,
        centered: true,
        modal: true,
        hideOnMaskTap: false
    }
});