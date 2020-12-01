const generateOneDayAgoISO = () => {
  const now = new Date();
  const classDate = new Date(now.getTime() - 1000 * 60 * 60 * 24);
  const yesterday = classDate.toISOString();

  return yesterday;
};

export default generateOneDayAgoISO;
