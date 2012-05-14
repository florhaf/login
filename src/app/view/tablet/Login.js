Ext.define('Login.view.tablet.Login', {
	extend : 'Ext.Panel',
	xtype : 'tablet-login',
	
	requires : [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.form.Password'
    ],
	
	config : {
        id: "mainloginview",
        layout : {
            type : 'vbox',
            pack : 'center',
            align : 'middle'
        },
        cls : 'background-ipad',
        items : [{
            width : '60%',
            items : [{
                cls : 'text',
                html : '<div style="font-size: 32px;">Morgan Stanley <span style="color: #c8ffff">Mobile Apps</span></div>'
            },{
                cls : 'hrDiv-ipad',
                html : '<hr />'
            },{
                layout : 'hbox',
                items : [{
                    layout : 'vbox',
                    width : '50%',
                    items : [{
                        cls : 'text-ipad',
                        html : '<b>Login</b>'
                    },{
                        cls : 'text-ipad',
                        html : '<span style="font-size: 16px;">Username</span>'
                    },{
                        cls : 'field',
                        autoCapitalize : false,
                        autoComplete : false,
                        autoCorrect : false,
                        xtype : 'textfield',
                        placeHolder : 'Username',
                        name : loginNameField
                    },{
                        cls : 'text-ipad',
                        html : '<span style="font-size: 16px;">Password</span>'
                    },{
                        cls : 'field',
                            autoCapitalize : false,
                            autoComplete : false,
                            autoCorrect : false,
                        xtype : 'passwordfield',
                        name : passwordField,
                        placeHolder : '(PIN + SecurID) - or - SoftID',
                            listeners : {
                                painted : function(passwordfield) {

                                    var input = passwordfield.element.down('input');
                                    input.set({
                                        pattern : '[0-9]*'
                                    });

                                },
                                keyup: function (a, b) {
                                    if (b.browserEvent.keyCode == 13) {
                                        b.stopEvent();
                                        a.blur();
                                        a.getParent().getParent().getParent().getParent().fireEvent("submit")
                                    }
                                }
                            }
                    },{
                        cls: "button-ipad",
                        xtype: "button",
                        ui: "confirm",
                        text: (navigator.cookieEnabled) ? "Submit" : "Enable cookies to login",
                        disabled: !navigator.cookieEnabled,
                        listeners: {
                            tap: function (a) {
                                a.getParent().getParent().getParent().getParent().fireEvent("submit")
                            }
                        }
                    }]
                },{
                    layout : {
                      type : 'vbox',
                        align : 'right'
                    },
                    width : '50%',
                    items : [{
                        cls : 'text-ipad login',
                        html	:
                            '<div  style="padding-bottom: 50px; font-size: 16px;">'+
                                '<b>Help Desk Information:</b><br /><br /><br />'+
                                '<table>'+

                                    '<tr>'+
                                        '<td>'+
                                            'U.S. / Canada&nbsp;&nbsp;'+
                                        '</td>'+
                                        '<td>'+
                                            '+1 800 303-2495'+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>'+
                                            'Hong Kong&nbsp;&nbsp;'+
                                        '</td>'+
                                        '<td>'+
                                            '+852 2848-5999'+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>'+
                                            'Latin America&nbsp;&nbsp;'+
                                        '</td>'+
                                        '<td>'+
                                            '+718 754-5444'+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>'+
                                            'London&nbsp;&nbsp;'+
                                        '</td>'+
                                        '<td>'+
                                            '+44 20 7425-8169'+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>'+
                                            'Singapore&nbsp;&nbsp;'+
                                        '</td>'+
                                        '<td>'+
                                            '+65 834-6860'+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>'+
                                            'Sydney&nbsp;&nbsp;'+
                                        '</td>'+
                                        '<td>'+
                                            '+61 2 9770-1505'+
                                        '</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>'+
                                            'Tokyo&nbsp;&nbsp;'+
                                        '</td>'+
                                        '<td>'+
                                            '+81 3 5424-4349'+
                                        '</td>'+
                                    '</tr>'+
                                '</table>'+
                            '</div>'
                    },{
                        xtype: "button",
                        ui: "action",
                        text: "Show Legal Notice",
                        width: "60%",
                        cls: "login text",
                        listeners: {
                            tap: function (a) {
                                a.getParent().getParent().getParent().getParent().fireEvent("showLegalNotice")
                            }
                        }
                    }]
                }]
            }]
        }]
	}
});