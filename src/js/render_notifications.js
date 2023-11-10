import getData from "./getData"
import createNotificationElm from "./create_notification_elm";

const renderNotifications = async (template, parent) => {
  try {
    const {items} = await getData();
    items.forEach(item => parent.append(createNotificationElm(template, item))      
    )
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default renderNotifications;