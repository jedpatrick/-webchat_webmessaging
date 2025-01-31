config: {
    ...
    settings: {
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
    ...
}
