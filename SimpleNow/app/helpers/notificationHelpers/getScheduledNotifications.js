const getScheduledNotifications = async () => {
  return new Promise(global.Notifications.getScheduledLocalNotifications)
    .then((notifs) => {
      return notifs;
    })
    .catch((e) => {
      // assume there are no notifications to return.
      return [];
    });
};

export default getScheduledNotifications;
