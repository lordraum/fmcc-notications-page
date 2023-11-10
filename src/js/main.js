import '../css/style.css'
import 'normalize.css'
import renderNotifications from './render_notifications'

const gElm = (id) => document.getElementById(id)

const $notificationTemplate = gElm('notification-template')
const $notificationsElm = gElm('notifications')

renderNotifications($notificationTemplate, $notificationsElm)