var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Flora_1 = new ol.format.GeoJSON();
var features_Flora_1 = format_Flora_1.readFeatures(json_Flora_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flora_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flora_1.addFeatures(features_Flora_1);
var lyr_Flora_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flora_1, 
                style: style_Flora_1,
                popuplayertitle: 'Flora',
                interactive: true,
                title: '<img src="styles/legend/Flora_1.png" /> Flora'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Flora_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Flora_1];
lyr_Flora_1.set('fieldAliases', {'Id': 'Id', 'Gambar': 'Gambar', 'Keterangan': 'Keterangan', 'WEB': 'WEB', });
lyr_Flora_1.set('fieldImages', {'Id': 'Range', 'Gambar': 'ExternalResource', 'Keterangan': 'TextEdit', 'WEB': 'TextEdit', });
lyr_Flora_1.set('fieldLabels', {'Id': 'no label', 'Gambar': 'no label', 'Keterangan': 'no label', 'WEB': 'no label', });
lyr_Flora_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});