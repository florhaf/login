Ext.define('Login.profile.Tablet', {
	extend : 'Ext.app.Profile',
	
	config : {
		name : 'Tablet',
		views: ['Login']
	},
	
	isActive : function() {

        return false;
        //return !Ext.os.is.Phone;
	},
	
	launch : function() {

        Ext.Viewport.add({
            xtype : 'tablet-login'
        });
	}
});