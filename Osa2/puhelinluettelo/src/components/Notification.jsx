const Notification = ({
    notificationMessage,
    setNotificationMessage,
    errorNotificationMessage,
    setErrorNotificationMessage,
}) => {
    // Green notification
    if (notificationMessage !== null) {
        // timer will show the message for 3 seconds
        setTimeout(() => {
            setNotificationMessage(null)
        }, 3000)
        return <div className="notification">{notificationMessage}</div>
    }
    // Red notification
    else if (errorNotificationMessage !== null) {
        // timer will show the message for 3 seconds
        setTimeout(() => {
            setErrorNotificationMessage(null)
        }, 6000)
        return (
            <div className="errorNotification">{errorNotificationMessage}</div>
        )
    }

    return null
}

export default Notification
