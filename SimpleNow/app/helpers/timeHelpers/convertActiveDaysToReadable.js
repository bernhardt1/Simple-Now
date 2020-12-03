// ONLY ACCEPTS FORMAT HH:MM:SS
const convertActiveDaysToReadable = (reminder) => {
  const { isMo, isTu, isWe, isTh, isFr, isSa, isSu } = reminder;

  if (isMo && isTu && isWe && isTh && isFr && isSa && isSu) return 'Every day';

  if (isMo && isTu && isWe && isTh && isFr && !isSa && !isSu)
    return 'Week days';

  if (!isMo && !isTu && !isWe && !isTh && !isFr && isSa && isSu)
    return 'Weekends';

  if (isMo && !isTu && !isWe && !isTh && !isFr && !isSa && !isSu)
    return 'Mondays';
  if (!isMo && isTu && !isWe && !isTh && !isFr && !isSa && !isSu)
    return 'Tuesdays';
  if (!isMo && !isTu && isWe && !isTh && !isFr && !isSa && !isSu)
    return 'Wednesdays';
  if (!isMo && !isTu && !isWe && isTh && !isFr && !isSa && !isSu)
    return 'Thursdays';
  if (!isMo && !isTu && !isWe && !isTh && isFr && !isSa && !isSu)
    return 'Fridays';
  if (!isMo && !isTu && !isWe && !isTh && !isFr && isSa && !isSu)
    return 'Saturdays';
  if (!isMo && !isTu && !isWe && !isTh && !isFr && !isSa && isSu)
    return 'Sundays';

  let res = '';
  if (isMo) res = res.concat('Mo');
  if (isTu) res = res.length > 0 ? res.concat('/Tu') : res.concat('Tu');
  if (isWe) res = res.length > 0 ? res.concat('/We') : res.concat('We');
  if (isTh) res = res.length > 0 ? res.concat('/Th') : res.concat('Th');
  if (isFr) res = res.length > 0 ? res.concat('/Fr') : res.concat('Fr');
  if (isSa) res = res.length > 0 ? res.concat('/Sa') : res.concat('Sa');
  if (isSu) res = res.length > 0 ? res.concat('/Su') : res.concat('Su');

  return res;
};

export default convertActiveDaysToReadable;
