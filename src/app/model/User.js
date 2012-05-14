/**
 * @author florhaf
 */

Ext.define('Login.model.User', {
	extend : 'Ext.data.Model',
	
	config : {
		fields : [{
			name	: loginNameField,
			type	: 'string'
		},{
			name	: passwordField,
			type	: 'string'
		}],
		
		validations : [{
			name	: loginNameField,
			type	: 'presence',
			message	: 'Enter a username'
		},{
			name	: passwordField,
			type	: 'presence',
			message	: 'Enter a password'
		}]
	}
});