// OpenLayers_03_wms.js

///////////////////////////////////////////////////////////////////////////////
// define layer objects

var basemap_tiled = new ol.layer.Tile({
	source: new ol.source.TileWMS({
	url: 'https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?',
	  params: {
		LAYERS: 0,
		FORMAT: 'image/png',
		TRANSPARENT: true
	  },
	  attributions: [
	    new ol.Attribution({
		  html: 'Data provided by the <a href="http://basemap.nationalmap.gov">National Map</a>.'
		})
	  ]
	})
})

var tribes = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		attributions: new ol.Attribution({
			html: 'Tribal Boundaries - USGS Small Scale Framework Layers'
		}),
		params: {
		    'LAYERS':'global:indlanp010g', 
		    'FORMAT':'image/png8', 
		    'TRANSPARENT':'TRUE'},
		url: 'http://compute.karlbenedict.com:8081/geoserver/wms?',
		serverType: 'geoserver'
	})
})

var counties = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		attributions: new ol.Attribution({
			html: 'County Boundaries - USGS Small Scale Framework Layers'
		}),
		params: {
		    'LAYERS':'global:countyp010g', 
		    'FORMAT':'image/png8', 
		    'TRANSPARENT':'TRUE'},
		url: 'http://compute.karlbenedict.com:8081/geoserver/wms?',
		serverType: 'geoserver'
	})
})



///////////////////////////////////////////////////////////////////////////////
// create our base map objects 
var map = new ol.Map({
	target: 'map',
	layers: [basemap_tiled, counties, tribes], //[basemap_tiled,states_tiled]
	view: new ol.View({
		center: ol.proj.fromLonLat([-98.58,39.83]), // the approximate geographic center of the continental US
		zoom: 3,
		projection: 'EPSG:3857'
		})
	});
///////////////////////////////////////////////////////////////////////////////



