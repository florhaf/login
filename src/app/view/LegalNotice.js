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
            html: '<div style="width : 100%; height: 100%; padding: 10px;"><h1>Morgan Stanley Systems and Assets Login Notification</h1><br /><p>Use Morgan Stanley&quot;s systems and assets (such as telephones, computer networks, Internet access facilities, Firm-approved messaging systems and 
other communication facilities) only for Morgan Stanley business and 
reasonable personal use. Use only Firm-approved messaging systems to 
conduct Morgan Stanley business. Do not access systems or locations that 
are not reasonably related to your job responsibilities, and your Morgan 
Stanley e-mail address should not be provided to external sites unless 
related to Morgan Stanley business. All information transmitted using our 
electronic communications systems is the property of Morgan Stanley. By 
accessing or using Morgan Stanley systems, you consent to access to and 
monitoring of your files or data, including Internet usage records and 
e-mail, by Morgan Stanley. Morgan Stanley may monitor and review all 
written and electronic communications that you send or receive at work or 
while using our systems, including e-mail, instant messages, voicemail, 
third-party systems, envelopes, packages or messages marked "Personal and 
Confidential." Morgan Stanley retains electronic communications, 
regardless of whether they have been deleted from your computer or 
wireless device, and may disclose them in regulatory and litigation 
proceedings and internal investigations. By tapping on "accept legal 
notice and Log In&quot;, you agree to be bound by all Firm policies whenever 
you use Firm Systems. Failure to comply with these policies will result in 
disciplinary action, up to and including termination and any other 
applicable legal (civil or criminal) or regulatory action. If you do not 
agree with these policies, you must not access or use Firm Systems.&quot;
</p></div>'
        }]
    }
});