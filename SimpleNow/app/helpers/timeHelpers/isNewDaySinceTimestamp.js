const isNewDaySinceTimestamp = (timestamp) => {
  let now = new Date().setHours(0, 0, 0, 0);
  let then = new Date(timestamp).setHours(0, 0, 0, 0);

  return now !== then;
};

export default isNewDaySinceTimestamp;
