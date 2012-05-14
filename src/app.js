Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath('Ext', 'lib/touch2/src');

Ext.application({
    name		: 'Login',

    models      : [
       'User'
    ],

    controllers : [
       'Viewport'
    ],
    
    profiles : [
        'Tablet',
       'Phone'
    ],

    launch: function() {

    }
});
