let Inventory = require('./classes/inventory');
class RubiconApi {

  constructor(config) {
    if (this._valitateConfig(config)) {
      this.inventory = new Inventory(config);
    } else {
      throw new Error('Invalid configuration object');
    }
    return this;
  }

  _valitateConfig(config) {
    if (!config || !config.auth || !config.auth.key || !config.auth.secret
      || !config.auth.endpoint || !config.auth.accountId) {
      return false;
    }
    return true;
  }
}

module.exports = RubiconApi;