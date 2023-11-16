const timer = (setNotificationMessage) => {
    setTimeout(() => {
        setNotificationMessage(null)
    }, 3000)
}

const Notification = ({ notificationMessage, setNotificationMessage }) => {
    if (notificationMessage === null) {
        return null
    }
    // This will show the message for 3 seconds
    timer(setNotificationMessage)
    return <div className="notification">{notificationMessage}</div>
}

export default Notification
