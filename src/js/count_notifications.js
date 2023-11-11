const countNotifications = (className, countElm) => {
  const $notificationsArr = Array.from(document.querySelectorAll(className))
  
  countElm.textContent = $notificationsArr.length
}

export default countNotifications