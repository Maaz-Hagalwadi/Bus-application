const getCurrentDateTime = () => {
    return new Date().toISOString();
  };
  
  const getDateFromDateTIme = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    return dateObj.toISOString().split('T')[0];
  };
  
  
  const getDayFromDate = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dateObj.getDay()];
  };
  
  
  const getDateTimeFromDate = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    return dateObj.toISOString();
  };
  
  module.exports = {
    getCurrentDateTime,
    getDateFromDateTIme,
    getDayFromDate,
    getDateTimeFromDate,
  };
  