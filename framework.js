window.Framework = {
    config: {
        name: "jtuliodev",
        clientIds: {
		"usw2.pure.cloud": "7aaad88f-d7b3-45ad-9a77-44beea1910ef"
	},
        settings: { 
		dedicatedLoginWindow: true,
		embedWebRTCByDefault: true,
        hideWebRTCPopUpOption: false,
        enableCallLogs: true,
        hideCallLogSubject: false,
        hideCallLogContact: false,
        hideCallLogRelation: false,
        enableTransferContext: true,
        dedicatedLoginWindow: false,
        embeddedInteractionWindow: true,
        enableConfigurableCallerID: false,
        enableServerSideLogging: false,
        enableCallHistory: false,
        defaultOutboundSMSCountryCode: "+1",
        searchTargets: ["people", "queues", "frameworkContacts", "externalContacts"],
        callControls: ["pickup", "transfer", "mute", "disconnect"],
        theme: {
            primary: "#62367A",
            text: "#DAD5DD",
            notification: {
                success: {
                    primary: "#CCE5FF",
                    text: "#004085"
                },
                error: {
                    primary: "#f8D7DA",
                    text: "#721C24"
                }
            }
        },
        sso: {
            provider: "",
            orgName: ""
        },
        display: {
            interactionDetails: {
                call: [
                    "framework.DisplayAddress",
                    "call.Ani",
                    "call.ConversationId"
               ]
            }
        }
		},
	
	
        helpLinks: { 
		InteractionList: "https://help.mypurecloud.com/articles/about-interaction-list/",
        CallLog: "https://help.mypurecloud.com/articles/about-call-logs/",
        Settings: "https://help.mypurecloud.com/articles/about-settings/"},
        customInteractionAttributes: [],
        getUserLanguage: function (callback){
        callback("en-US");
					}

    },
    initialSetup: function (),
    screenPop: function (searchString, interaction),
    processCallLog: function (callLog, interaction, eventName, onSuccess, onFailure),
    openCallLog: function (callLog),
    contactSearch: function (searchValue, onSuccess, onFailure)
}

