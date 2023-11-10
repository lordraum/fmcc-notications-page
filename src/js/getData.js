const url = 'https://notifications-api.pockethost.io/api/collections/notification/records'

const getData = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return response.json()
}

export default getData