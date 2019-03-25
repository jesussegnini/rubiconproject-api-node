module.exports = {
  parseJson: function (obj) {
    if (typeof obj === 'object') {
      return obj;
    } else {
      try {
        return JSON.parse(obj);
      } catch (e) {
        return ({ error: 'Unexpected error', responseBody: obj });
      }
    }
  }
}