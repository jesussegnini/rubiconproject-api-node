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

#### Zone

    {
		zoneId: Number,
		name: String,
		siteId: Number,
		contentCategoryIds: Array<String>,
		sizeIds: Array<Number>,
		inheritSiteSizes: Boolean
    }
