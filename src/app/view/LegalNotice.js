Ext.define("Login.view.LegalNotice", {
    extend: "Ext.Panel",
    xtype: "legalNotice",
    config: {
        scrollable: true,
        items: [{
            xtype: "toolbar",
            title: "Legal Notice",
            docked: "top",
            items: [{
                xtype: "spacer"
            }, {
                xtype: "button",
                text: "Done",
                listeners: {
                    tap: function (a) {
                        a.getParent().getParent().hide()
                    }
                }
            }]
        }, {
            html: '<div style="width : 100%; height: 100%; padding: 10px;"><h1>Header</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br /><h2>1. Subheader</h2><br /><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p></div>'
        }]
    }
});