let Request = require('request');
let utils = require('../utils');
class Inventory {
  constructor(config) {
    this._config = config;
    this._defaults = {
      baseUrl: 'http://' + this._config.auth.key + ':' + this._config.auth.secret + '@' + this._config.auth.endpoint,
      followAllRedirects: true
    };
    this._request = Request.defaults(this._defaults);
  }

  // API: SITES
  getSites(cb) {
    this._request.get(`/sellers/api/inventory/v1/account/${this._config.auth.accountId}/sites`, ((err, response, body) => {
      if (err)
        return cb(new Error({ error: err.error, code: err.code }));
      if (response.statusCode === 401)
        return cb(new Error({ error: 'Unauthorized', code: 401 }));
      return cb(null, utils.parseJson(body));
    }));
  }

  getSite(siteId, cb) {
    if (!siteId)
      return cb(new Error({ error: 'siteId is mandatory', code: 400 }))
    this._request.get(`/sellers/api/inventory/v1/account/${this._config.auth.accountId}/sites/${siteId}`, ((err, response, body) => {
      if (err)
        return cb(new Error({ error: err.error, code: err.code }));
      if (response.statusCode === 401)
        return cb(new Error({ error: 'Unauthorized', code: 401 }));
      return cb(null, utils.parseJson(body));
    }));
  }

  updateSite(site, cb) {
    if (!site)
      return cb(new Error({ error: 'site is mandatory', code: 400 }))
    this._request.put({ url: `/sellers/api/inventory/v1/account/${this._config.auth.accountId}/sites/${site.siteId}`, json: site }, ((err, response, body) => {
      if (err)
        return cb(new Error({ error: err.error, code: err.code }));
      if (response.statusCode === 401)
        return cb(new Error({ error: 'Unauthorized', code: 401 }));
      return cb(null, utils.parseJson(body));
    }));
  }

  createSite(site, cb) {
    if (!site)
      return cb(new Error({ error: 'site is mandatory', code: 400 }))
    this._request.post({ url: `/sellers/api/inventory/v1/account/${this._config.auth.accountId}/sites/`, json: site }, ((err, response, body) => {
      if (err)
        return cb(new Error({ error: err.error, code: err.code }));
      if (response.statusCode === 401)
        return cb(new Error({ error: 'Unauthorized', code: 401 }));
      return cb(null, utils.parseJson(body));
    }));
  }

  // API: ZONES
  getZones(siteId, cb) {
    if (!siteId)
      return cb(new Error({ error: 'siteId is mandatory', code: 400 }))
    this._request.get(`/sellers/api/inventory/v1/account/${this._config.auth.accountId}/zones?siteId=${siteId}`, ((err, response, body) => {
      if (err)
        return cb(new Error({ error: err.error, code: err.code }));
      if (response.statusCode === 401)
        return cb(new Error({ error: 'Unauthorized', code: 401 }));
      return cb(null, utils.parseJson(body));
    }));
  }

  getZone(zoneId, cb) {
    if (!zoneId)
      return cb(new Error({ error: 'zoneId is mandatory', code: 400 }))
    this._request.get(`/sellers/api/inventory/v1/account/${this._config.auth.accountId}/zones/${zoneId}`, ((err, response, body) => {
      if (err)
        return cb(new Error({ error: err.error, code: err.code }));
      if (response.statusCode === 401)
        return cb(new Error({ error: 'Unauthorized', code: 401 }));
      return cb(null, utils.parseJson(body));
    }));
  }

  updateZone(zone, cb) {
    if (!zone)
      return cb(new Error({ error: 'zone is mandatory', code: 400 }))
    this._request.put({ url: `/sellers/api/inventory/v1/account/${this._config.auth.accountId}/zones/${zone.zoneId}`, json: zone }, ((err, response, body) => {
      if (err)
        return cb(new Error({ error: err.error, code: err.code }));
      if (response.statusCode === 401)
        return cb(new Error({ error: 'Unauthorized', code: 401 }));
      return cb(null, utils.parseJson(body));
    }));
  }

  createZone(zone, cb) {
    if (!zone)
      return cb(new Error({ error: 'zone is mandatory', code: 400 }))
    this._request.post({ url: `/sellers/api/inventory/v1/account/${this._config.auth.accountId}/zones/`, json: zone }, ((err, response, body) => {
      if (err)
        return cb(new Error({ error: err.error, code: err.code }));
      if (response.statusCode === 401)
        return cb(new Error({ error: 'Unauthorized', code: 401 }));
      return cb(null, utils.parseJson(body));
    }));
  }

}

module.exports = Inventory;