import '../css/style.css'
import 'normalize.css'
import renderNotifications from './render_notifications'
import changeNotificationStyles from './change_notification_styles'
import countNotifications from './count_notifications'

const gElm = (id) => document.getElementById(id)

const $notificationsElm = gElm('notifications')
const $notificationTemplate = gElm('notification-template')
const $countNotifications = gElm('count-notifications')

$notificationsElm.addEventListener('click', (e) => {
    changeNotificationStyles(e)
    countNotifications('.notification__box--no-read', $countNotifications)
})

renderNotifications($notificationTemplate, $notificationsElm)
