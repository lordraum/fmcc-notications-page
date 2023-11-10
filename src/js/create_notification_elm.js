const url = 'https://notifications-api.pockethost.io/api/files'
const collectionID = 'ejdwmidmo2wlcl7'

const getImageUrl = (url, colID, id, img) => `${url}/${colID}/${id}/${img}`

const qSel = (s, e) => e.querySelector(s)

const createNotificationElm = (template, data) => {
  const clone = template.content.cloneNode(true)
  const {id, notificationType, user, action, group, isRead, commentedPicture, post, timestamp, type, userAvatar, message} = data

  const $avatar = qSel('.avatar__img', clone)
  const $user = qSel('.user', clone)
  const $action = qSel('.action', clone)
  const $timestamp = qSel('.timestamp', clone)
  const $spans = qSel('.notifications__spans', clone)
  const $box = qSel('.notification__box', clone)
  const $row = qSel('.content__row-01', clone)

  $avatar.src = getImageUrl(url, collectionID, id, userAvatar)  
  $user.textContent = user
  $action.textContent = action
  $timestamp.textContent = timestamp  

  if (notificationType === 'reactions' || notificationType === 'groupActivities') {
    const $complement = document.createElement('SPAN')
    $complement.textContent = `${group}${post}`
    $spans.append($complement)
    
  } 
  if (notificationType === 'messages') {
    const $message =  document.createElement('P')
    $message.textContent = message  
    $box.append($message)
  } 
  if (notificationType === 'comments') {
    const $commentedPicture =  document.createElement('IMG')
    $commentedPicture.src = getImageUrl(url, collectionID, id, commentedPicture)
    $row.append($commentedPicture)
  }

  return clone
}

export default createNotificationElm