const responseFormatter = (data, message = 'Success') => {
    return {
      status: 'success',
      message,
      data
    };
  };
  
  module.exports = responseFormatter;
  