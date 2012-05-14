Ext.define('Login.view.phone.Login', {
	extend : 'Ext.Panel',
	xtype : 'login',
	
	requires : [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.form.Password'
    ],
	
	config : {
        id: "mainloginview",
		cls : 'background',
		items : [{
			layout : 'vbox',
			cls : 'login',
			items : [{
				cls : 'text',
				width : '100%',
				html : '<div style="text-align: center; font-size: 24px;">Morgan Stanley <span style="color: #c8ffff">Mobile Apps</span></div>'
			},{
				cls : 'hrDiv',
				html : '<hr />'
			},{
				cls : 'text',
				html : '<span style="font-size: 14px;">Username</span>'
			},{
				cls : 'field',
                autoCapitalize : false,
                autoComplete : false,
                autoCorrect : false,
				xtype : 'textfield',
				placeHolder : 'Username'
			},{
				cls : 'text',
				html : '<span style="font-size: 14px;">Password</span>'
			},{
				cls : 'field',
                    autoCapitalize : false,
                    autoComplete : false,
                    autoCorrect : false,
				xtype : 'passwordfield',
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
                                a.getParent().getParent().fireEvent("submit")
                            }
                        }
                    }
			},{
                cls: "button",
                xtype: "button",
                ui: "confirm",
                text: (navigator.cookieEnabled) ? "Submit" : "Enable cookies to login",
                disabled: !navigator.cookieEnabled,
                listeners: {
                    tap: function (a) {
                        a.getParent().getParent().fireEvent("submit")
                    }
                }
			}]
		},{
            docked : 'bottom',
            cls : 'background-dark',
            items : [{
                cls : 'text login',
				html	:
					'<div  style="padding-top: 15px; padding-bottom: 5px; font-size: 14px;">'+
						'<table>'+
							'<tr>'+
								'<td>'+
									'<b>Help Desk Information:</b><br />'+
								'</td>'+
								'<td>'+
									''+
								'</td>'+
							'</tr>'+
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
                ui: "action small",
                text: "Show Legal Notice",
                width: "50%",
                cls: "login text",
                listeners: {
                    tap: function (a) {
                        a.getParent().getParent().fireEvent("showLegalNotice")
                    }
                }
            },{
                cls : 'text'
            },{
                cls : 'text'
            }]
        }]
		
	}
});