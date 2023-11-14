import '../css/style.css'
import 'normalize.css'
import renderNotifications from './render_notifications'
import changeNotificationStyles from './change_notification_styles'
import countNotifications from './count_notifications'
import markAllAsRead from './mark_all_as_read'

const gElm = (id) => document.getElementById(id)

const $notificationsElm = gElm('notifications')
const $notificationTemplate = gElm('notification-template')
const $countNotifications = gElm('count-notifications')
const $markAllAsRead = gElm('mark-all-as-read')

$notificationsElm.addEventListener('click', (e) => {
  changeNotificationStyles(e)
  countNotifications('.notification__box--no-read', $countNotifications)
})

$markAllAsRead.addEventListener('click', () => {
  console.log('click')
  markAllAsRead('.notification__box')
})

renderNotifications($notificationTemplate, $notificationsElm)
