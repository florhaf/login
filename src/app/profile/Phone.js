Ext.define('Login.profile.Phone', {
	extend : 'Ext.app.Profile',
	
	config : {
		name : 'Phone',
		views: ['Login']
	},
	
	isActive : function() {

        return Ext.os.is.Phone;
	},
	
	launch : function() {

        Ext.Viewport.add({
            xtype : 'login'
        });
	}
});