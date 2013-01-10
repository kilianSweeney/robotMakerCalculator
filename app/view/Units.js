Ext.define('motioncalc.view.Units', {
    extend: 'Ext.form.FormPanel',
    xtype: 'unitscard',
    requires: [
        'Ext.form.FieldSet'
    ],

    config: {
        iconCls: 'sign_leftright',
        title: 'Units',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Unit Converter'
            },
            {
                xtype: 'fieldset',
                title: 'Details',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        label: 'Username'
                    }
                ],
            },{
                xtype:  'button',
                text:   'save',
                ui:     'confirm'
            }
        ]
    }
});
