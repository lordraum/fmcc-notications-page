import '../css/style.css'
import 'normalize.css'

fetch('http://127.0.0.1:8090/api/collections/Notification/records')
  .then(res => res.json())
  .then(json => json.items)
  .then(items => items.map(item => console.log(item.isRead)))
