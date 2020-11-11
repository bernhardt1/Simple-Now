const getMillisecondsBetweenMoments = (moment1, moment2) => {
  const result = moment1().subtract(moment2.subtract()).format('ssss');
  return result;
};

export default getMillisecondsBetweenMoments;
