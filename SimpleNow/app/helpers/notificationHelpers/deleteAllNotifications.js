const deleteAllNotifications = async () => {
  global.Notifications.cancelAll();
};

export default deleteAllNotifications;
