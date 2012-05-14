Ext.define("Login.view.phone.LegalNotice", {
    extend: "Login.view.LegalNotice",
    xtype: "phone-legalNotice",
    config: {
        showAnimation: {
            type: "slide",
            direction: "up"
        },
        hideAnimation: {
            type: "slide",
            direction: "down",
            out: true
        },
        top:0,
        left:0,
        width: "100%",
        height: "100%",
        modal: true,
        hideOnMaskTap: false
    }
});