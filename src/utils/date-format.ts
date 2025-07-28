const formatDate = (dateString: string) => {
  const monthAdjustment = 1;
  const digitFormatLength = 2;

  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(digitFormatLength, '0');
  const minutes = date.getMinutes().toString().padStart(digitFormatLength, '0');
  const day = date.getDate().toString().padStart(digitFormatLength, '0');
  const month = (date.getMonth() + monthAdjustment).toString().padStart(digitFormatLength, '0');
  const year = date.getFullYear();

  return `${hours}:${minutes} - ${day}-${month}-${year}`;
};

export default formatDate;
