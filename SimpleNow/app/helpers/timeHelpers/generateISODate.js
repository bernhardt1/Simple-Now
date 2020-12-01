const generateISODate = () => {
  const now = new Date();
  return now.toISOString();
};

export default generateISODate;
