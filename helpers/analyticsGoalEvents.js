export function trackGoalCompletionGoogle(event, eventCategory, eventAction, eventLabel, eventValue, containerId) {
    window.dataLayer.push({
        event: event,
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel,
        eventValue: eventValue,
        containerId: containerId
    });

    console.log('pushed')
}


