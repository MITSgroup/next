export const trackEvent = ({event, formName, url}) => {
    if(typeof window !== 'undefined') {
        dataLayer.push({
            event: 'sendForm',
            formName: 'main',
            url: window.location.href,
        });
    }
    console.log('tracked')
}
