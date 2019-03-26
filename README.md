# rubiconproject-api-node

## Rubicon api node
Simple rubicon api module.

### Initialization
	npm install --save rubiconproject-api-node;

    let  rbc  =  new (require('rubiconproject-api-node'))(
	    { 
		    auth: {
			    endpoint:  'api.rubiconproject.com',
			    key:  'YOUR API KEY',
			    secret:  'YOUR API SECRET',
			    accountId:  YOUR ACCOUNT ID
			}
		}
	);
	
## Inventory

### Sites

##### List sites
    rbc.inventory.getSites((err, response) => {
    	console.dir(err);
    	console.dir(response);
    });

##### Get site details
    rbc.inventory.getSite(SITE_ID, (err, response) => {
    	console.dir(err);
    	console.dir(response);
    });

##### Update site
    rbc.inventory.updateSite(SITE, (err, response) => {
    	console.dir(err);
    	console.dir(response);
    });
    
##### Create site
    rbc.inventory.createSite(SITE, (err, response) => {
    	console.dir(err);
    	console.dir(response);
    });

### Zones

#### List zones
    rbc.inventory.getZones((err, response) => {
    	console.dir(err);
    	console.dir(response);
    });

##### Get zone details
    rbc.inventory.getZone(ZONE_ID, (err, response) => {
    	console.dir(err);
    	console.dir(response);
    });

##### Update zone
    rbc.inventory.updateZone(ZONE, (err, response) => {
    	console.dir(err);
    	console.dir(response);
    });

##### Create zone
    rbc.inventory.createZone(ZONE, (err, response) => {
    	console.dir(err);
    	console.dir(response);
    });

### Objects
#### Site

    { 
    	siteId: Number,
    	name: String,
    	displayName: String,
    	domain: String,
    	inventoryTypeId: Number,
    	contentCategoryIds: Array<String>,
    	sizeIds: Array<Number>,
    	groups: Array<String>
    }

#### Site Object

| Field | Required | Type | Details | Example |
| --- | --- | --- | --- | --- |
| siteId | Put, Get | Integer | The unique identifier of the site. | 1234 |
| name | Post, Put | String | The name of the site or inventory source | Fishing News |
| domain | Post, Put | String | the primary domain of the site or inventory source (or reverse domain for mobile applications) | http://www.fishingnews.com |
| displayName | Post, Put | String | The name of the inventory as it should be presented in UIs and 3rd parties | Fishing News |
| invetoryTypeId | No | Integer | The inventory type:\
108721 = Standard Web, 108723 = Mobile Optimized Web, 108725 = Mobile Application | 108721 |
| contentCategoryIds | No | Array of Strings | A list of the IAB content categories for the site (see: [IAB Content Categories](http://www.iab.com/guidelines/iab-quality-assurance-guidelines-qag-taxonomy/)) | ["IAB1"] |
| sizeIds | No | Array of Integers | A list of the IDs of the sizes that the inventory source will support ([Supported Ad Formats](https://resources.rubiconproject.com/resource/publisher-resources/platform-how-to/supported-ad-formats/)) | [2,9,12]|

#### Zone

    {
		zoneId: Number,
		name: String,
		siteId: Number,
		contentCategoryIds: Array<String>,
		sizeIds: Array<Number>,
		inheritSiteSizes: Boolean
    }

#### Zone Object

| Field | Required | Type | Details | Example |
| --- | --- | --- | --- | --- |
| zoneId | Put, Get | Integer | The unique identifier of the zone. | 4567 |
| siteId | Post, Put | Integer | The unique identifier of the site with which the zone is associated. | 1234 |
| name | Post, Put | String | The name of the zone | ATF |
| contentCategoryIds | No | Array of Strings | A list of the IAB content categories for the zone (see: [IAB Content Categories](http://www.iab.com/guidelines/iab-quality-assurance-guidelines-qag-taxonomy/)) | ["IAB3"] |
| inheritSiteSizes | No | Boolean | True or false value indicated whether or not to inherit the sizeIds configured on the site. | false |
| sizeIds | No | Array of Integers | A list of the IDs of the sizes that the zone will support ([Supported Ad Formats](https://resources.rubiconproject.com/resource/publisher-resources/platform-how-to/supported-ad-formats/)) | [2,9,15]|

#WIP...