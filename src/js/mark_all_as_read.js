const markAllAsRead = (className, countNotificationsElm) => {
  const $notificationsArr = Array.from(document.querySelectorAll(className))
  $notificationsArr.forEach(elm => {
    elm.click()
  })
}

export default markAllAsRead
