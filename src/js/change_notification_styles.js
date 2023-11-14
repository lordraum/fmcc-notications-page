const changeNotificationStyles = (e) => {
  const elm = e.target
  const className = '.notification__box--no-read'
  if (elm.closest(className)) {
    const $notification = elm.closest(className)
    const $point = $notification.querySelector('.notifications__spans').lastElementChild
    $point.classList.remove('point')
    $notification.classList.remove('notification__box--no-read')
    $notification.dataset.isread = '1'
  }
}

export default changeNotificationStyles
