Ext.define('Login.controller.Viewport', {
	extend : 'Ext.app.Controller',

    requires: ["Login.view.tablet.LegalNotice", "Login.view.phone.LegalNotice"],

    config: {
        refs: {
            view: "panel",
            userid: "textfield",
            pwd: "passwordfield"
        },
        control: {
            view: {
                submit: "submit",
                showLegalNotice: "showLegalNotice"
            }
        }
    },
    showLegalNotice: function () {
        var b = (this.getApplication().getCurrentProfile().getName() == "Phone") ? "Login.view.phone.LegalNotice" : "Login.view.tablet.LegalNotice";
        var a = Ext.create(b);
        Ext.Viewport.add(a);
        a.show()
    },
	
	submit : function() {

		var model = Ext.create("Login.model.User");
        model.data[loginNameField] = this.getUserid().getValue();
        model.data[passwordField] = this.getPwd().getValue();
		var errors = model.validate();
		var message = '';
		
		var config	= {
			method	: 'POST',
			url 	: 'login',
			params	: model.data,
			scope	: this,
			success	: this._onSubmitSuccess,
			failure : this._onSubmitFailure
		};
		
		if (errors.isValid()) {
			
            Ext.getCmp("mainloginview").setMasked({
                xtype: "loadmask",
                message: "Loading..."
            });
			
			Ext.Ajax.request(config);
		} else {
			
			Ext.each(errors.items, function(record, index){
				
                message += record.getMessage() + '<br>';
            });
            
            Ext.Msg.alert('Error', message, Ext.emptyFn);
		}
	},
	
	_onSubmitSuccess : function(response, opts) {
				
        Ext.getCmp("mainloginview").setMasked(false);
		
		var queryString = this._readQueryString();
		
		window.location = queryString['uri'];
	},
	_onSubmitFailure : function(response, opts) {
		
        Ext.getCmp("mainloginview").setMasked(false);
		
        Ext.Msg.alert("Security Failure", "Wrong userID and/or password.", Ext.emptyFn);
	},
	_readQueryString : function() {
		
		var result 	= [];
		
		var query	= window.location.search.substring(1);
		var params 	= query.split('&');
		
		for (var i = 0; i < params.length; i++) {
			
			var pos = params[i].indexOf('=');
			
			if (pos > 0) {
				
				var key = params[i].substring(0, pos);
				var val = params[i].substring(pos + 1);
				
				result[key] = val;
			}
		}
		
		return result;
	}
});
