var assert = require('assert');
var nock = require('nock');
let RubiconApi = require('../index');
let mockConfig = {
  auth: {
    endpoint: 'fakeapi.rubiconproject.com',
    key: 'thisIsAMock',
    secret: 'dontExpectRealData',
    accountId: 556677
  }
};

const rubiconApiMock = new RubiconApi(mockConfig);

describe('Sites', () => {
  nock(rubiconApiMock.inventory._defaults.baseUrl)
    .get(`/sellers/api/inventory/v1/account/${mockConfig.auth.accountId}/sites`)
    .reply(200, {
      sites:
        [{
          siteId: 777,
          name: 'TEST',
          displayName: 'ES_TEST',
          domain: 'http://www.xample.com/',
          inventoryTypeId: 108721,
          contentCategoryIds: ['IAB13']
        },
        {
          siteId: 778,
          name: 'TEST2',
          displayName: 'ES_TEST2',
          domain: 'http://www.xample.com/',
          inventoryTypeId: 108721,
          contentCategoryIds: ['IAB13']
        }]
    });
  describe('#getSites()', () => {
    it('shoud be an array', (done) => {
      rubiconApiMock.inventory.getSites((err, response) => {
        if (err) {
          assert.fail();
          done();
        }
        assert.equal(Array.isArray(response.sites), true);
        done();
      });
    });
  })

  describe('#getSite()', () => {
    nock(rubiconApiMock.inventory._defaults.baseUrl)
      .get(`/sellers/api/inventory/v1/account/${mockConfig.auth.accountId}/sites/777`)
      .reply(200, {
        siteId: 777,
        name: 'TEST',
        displayName: 'ES_TEST',
        domain: 'http://www.xample.com/',
        inventoryTypeId: 108721,
        contentCategoryIds: ['IAB13'],
        sizeIds: [2, 10, 15, 57, 146]
      });
    it('shoud be an object', (done) => {
      rubiconApiMock.inventory.getSite(777, (err, response) => {
        if (err) {
          assert.fail();
          done();
        }
        assert.equal(typeof response, 'object');
        done();
      });
    });
  });

  describe('#updateSite()', () => {
    nock(rubiconApiMock.inventory._defaults.baseUrl)
      .put(`/sellers/api/inventory/v1/account/${mockConfig.auth.accountId}/sites/777`)
      .reply(200, {
        siteId: 777,
        name: 'TEST2',
        displayName: 'ES_TEST',
        domain: 'http://www.xample.com/',
        inventoryTypeId: 108721,
        contentCategoryIds: ['IAB13'],
        sizeIds: [2, 10, 15, 57, 146]
      });
    it('shoud be an object', (done) => {
      rubiconApiMock.inventory.updateSite({
        siteId: 777,
        name: 'TEST2',
        displayName: 'ES_TEST',
        domain: 'http://www.xample.com/',
        inventoryTypeId: 108721,
        contentCategoryIds: ['IAB13'],
        sizeIds: [2, 10, 15, 57, 146]
      }, (err, response) => {
        if (err) {
          assert.fail();
          done();
        }
        assert.equal(typeof response, 'object');
        done();
      });
    });
  });

  describe('#createSite()', () => {
    nock(rubiconApiMock.inventory._defaults.baseUrl)
      .post(`/sellers/api/inventory/v1/account/${mockConfig.auth.accountId}/sites/`)
      .reply(200, {
        siteId: 250724,
        name: 'ES_TEST3',
        displayName: 'ES_TEST3',
        domain: 'http://www.example.com',
        inventoryTypeId: 108721,
        contentCategoryIds: ['IAB13'],
        sizeIds: [2, 10]
      });
    it('shoud be an object', (done) => {
      rubiconApiMock.inventory.createSite({
        name: 'ES_TEST3',
        displayName: 'ES_TEST3',
        domain: 'http://www.example.com',
        inventoryTypeId: 108721,
        contentCategoryIds: ['IAB13'],
        sizeIds: [2, 10]
      }, (err, response) => {
        if (err) {
          assert.fail();
          done();
        }
        assert.equal(typeof response, 'object');
        done();
      });
    });
  });
});

describe('Testing', () => {
  after(function () {
    nock.cleanAll();
  });

  describe('Zones', () => {
    describe('#getZones()', () => {
      nock(rubiconApiMock.inventory._defaults.baseUrl)
        .get(`/sellers/api/inventory/v1/account/${mockConfig.auth.accountId}/zones?siteId=777`)
        .reply(200, {
          zones: [{
            zoneId: 123,
            name: 'EXAMPLE.LDB1_test',
            siteId: 777,
            contentCategoryIds: [1, 2, 3],
            sizeIds: [1, 2, 3],
            inheritSiteSizes: true
          },
          {
            zoneId: 124,
            name: 'EXAMPLE.MPU3',
            siteId: 777,
            sizeIds: [1, 2, 3],
            inheritSiteSizes: false
          },
          {
            zoneId: 125,
            name: 'EXAMPLE.MPU1',
            siteId: 777,
            sizeIds: [1, 2, 3],
            inheritSiteSizes: false
          },
          {
            zoneId: 126,
            name: 'EXAMPLE.LDB2',
            siteId: 777,
            sizeIds: [1, 2, 3],
            inheritSiteSizes: false
          },
          {
            zoneId: 127,
            name: 'EXAMPLE.MPU2',
            siteId: 777,
            sizeIds: [1, 2, 3],
            inheritSiteSizes: false
          }]
        });
      it('zones shoud be an array', (done) => {
        rubiconApiMock.inventory.getZones('777', (err, response) => {
          if (err) {
            assert.fail();
            done();
          }
          assert.equal(Array.isArray(response.zones), true);
          done();
        });
      });
    })

    describe('#getZone()', () => {
      it('shoud be an object', (done) => {
        nock(rubiconApiMock.inventory._defaults.baseUrl)
          .get(`/sellers/api/inventory/v1/account/${mockConfig.auth.accountId}/zones/123`)
          .reply(200, {
            zoneId: 123,
            name: 'EXAMPLE.LDB1_test',
            siteId: 778,
            contentCategoryIds: ['IAB13'],
            sizeIds: [2, 10, 15, 57, 146],
            inheritSiteSizes: true
          });
        rubiconApiMock.inventory.getZone(123, (err, response) => {
          if (err) {
            assert.fail();
            done();
          }
          assert.equal(typeof response, 'object');
          done();
        });
      });
    })

    describe('#updateZone()', () => {
      nock(rubiconApiMock.inventory._defaults.baseUrl)
        .put(`/sellers/api/inventory/v1/account/${mockConfig.auth.accountId}/zones/123`)
        .reply(200, {
          zoneId: 123,
          name: 'EXAMPLE.LDB1_test',
          siteId: 778,
          contentCategoryIds: ['IAB13'],
          sizeIds: [2, 10, 15, 57, 146],
          inheritSiteSizes: true
        });
      it('shoud be an object', (done) => {
        rubiconApiMock.inventory.updateZone({
          zoneId: 123,
          name: 'ES_BOLSACAVA.LDB1_test',
          siteId: 778,
          inheritSiteSizes: true
        }, (err, response) => {
          if (err) {
            assert.fail();
            done();
          }
          assert.equal(typeof response, 'object');
          done();
        });
      });
    });

    describe('#createZone()', () => {
      nock(rubiconApiMock.inventory._defaults.baseUrl)
        .post(`/sellers/api/inventory/v1/account/${mockConfig.auth.accountId}/zones/`)
        .reply(200, {
          zoneId: 123,
          name: 'EXAMPLE.LDB1_test',
          siteId: 778,
          contentCategoryIds: ['IAB13'],
          sizeIds: [2, 10, 15, 57, 146],
          inheritSiteSizes: true
        });
      it('shoud be an object', (done) => {
        rubiconApiMock.inventory.createZone({
          name: 'EXAMPLE.LDB1_test',
          siteId: 778,
          contentCategoryIds: ['IAB13'],
          inheritSiteSizes: true
        }, (err, response) => {
          if (err) {
            assert.fail();
            done();
          }
          assert.equal(typeof response, 'object');
          done();
        });
      });
    });

  })
});

