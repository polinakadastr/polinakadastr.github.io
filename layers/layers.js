var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Toner',
    'type': 'base',
        source: new ol.source.Stamen({
        layer: 'toner'
        })
})
]
});
var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__0.addFeatures(features__0);var lyr__0 = new ol.layer.Vector({
                source:jsonSource__0, 
                style: style__0,
    title: 'Пересечение границы<br />\
    <img src="styles/legend/_0_0.png" /> Для многоквартирной застройки<br />\
    <img src="styles/legend/_0_1.png" /> Для природно-заповедных целей<br />\
    <img src="styles/legend/_0_2.png" /> для размещения административно-управленческих и общественных объектов<br />\
    <img src="styles/legend/_0_3.png" /> Для размещения административно-управленческих и общественных объектов<br />\
    <img src="styles/legend/_0_4.png" /> Для размещения административных зданий<br />\
    <img src="styles/legend/_0_5.png" /> Для размещения гостиниц<br />\
    <img src="styles/legend/_0_6.png" /> для размещения жилого дома (жилых домов)<br />\
    <img src="styles/legend/_0_7.png" /> Для размещения жилого дома(жилых домов)<br />\
    <img src="styles/legend/_0_8.png" /> Для размещения коммунальных, складских объектов<br />\
    <img src="styles/legend/_0_9.png" /> Для размещения культовых зданий<br />\
    <img src="styles/legend/_0_10.png" /> для размещения многоквартирного жилого дома (жилых домов)<br />\
    <img src="styles/legend/_0_11.png" /> Для размещения многоквартирного жилого дома (жилых домов)<br />\
    <img src="styles/legend/_0_12.png" /> Для размещения многоэтажных и подземных гаражей<br />\
    <img src="styles/legend/_0_13.png" /> Для размещения наземных сооружений канализационных сетей (павильонов шахт, скважин и т.д.)<br />\
    <img src="styles/legend/_0_14.png" /> для размещения объектов дошкольного, начального и среднего общего образования<br />\
    <img src="styles/legend/_0_15.png" /> Для размещения объектов жилищно-коммунального  хозяйства<br />\
    <img src="styles/legend/_0_16.png" /> Для размещения объектов здравоохранения и социального обеспечения<br />\
    <img src="styles/legend/_0_17.png" /> для размещения объектов коммунального хозяйства<br />\
    <img src="styles/legend/_0_18.png" /> Для размещения объектов коммунального хозяйства<br />\
    <img src="styles/legend/_0_19.png" /> для размещения объектов культуры и искусства<br />\
    <img src="styles/legend/_0_20.png" /> для размещения объектов культуры и искусства, не связанных с проживанием населения, кроме специальных парков (зоопарков, ботанических садов)<br />\
    <img src="styles/legend/_0_21.png" /> для размещения объектов науки<br />\
    <img src="styles/legend/_0_22.png" /> Для размещения объектов науки<br />\
    <img src="styles/legend/_0_23.png" /> для размещения объектов образования<br />\
    <img src="styles/legend/_0_24.png" /> для размещения объектов общественного питания<br />\
    <img src="styles/legend/_0_25.png" /> Для размещения объектов общественного питания<br />\
    <img src="styles/legend/_0_26.png" /> для размещения объектов розничной торговли<br />\
    <img src="styles/legend/_0_27.png" /> Для размещения объектов розничной торговли<br />\
    <img src="styles/legend/_0_28.png" /> Для размещения объектов специального назначения<br />\
    <img src="styles/legend/_0_29.png" /> Для размещения объектов среднего и высшего профессионального образования<br />\
    <img src="styles/legend/_0_30.png" /> Для размещения объектов торговли<br />\
    <img src="styles/legend/_0_31.png" /> для размещения объектов транспорта (автозаправочные и газонаполнительные станции)<br />\
    <img src="styles/legend/_0_32.png" /> Для размещения объектов транспорта (автозаправочные и газонаполнительные станции)<br />\
    <img src="styles/legend/_0_33.png" /> для размещения объектов транспорта (за исключением автозаправочных и газонаполнительных станций, предприятий автосервиса, гаражей и автостоянок)<br />\
    <img src="styles/legend/_0_34.png" /> Для размещения объектов транспорта (под гаражи и автостоянки)<br />\
    <img src="styles/legend/_0_35.png" /> для размещения объектов транспорта (под предприятия автосервиса)<br />\
    <img src="styles/legend/_0_36.png" /> для размещения объектов физической культуры и спорта<br />\
    <img src="styles/legend/_0_37.png" /> для размещения промышленных объектов<br />\
    <img src="styles/legend/_0_38.png" /> Для размещения распределительных пунктов и подстанций, трансформаторных подстанций, блок-модульных котельных, насосных станций перекачки, центральных и индивидуальных тепловых пунктов<br />\
    <img src="styles/legend/_0_39.png" /> для размещения религиозных объектов<br />\
    <img src="styles/legend/_0_40.png" /> для размещения садов, скверов, бульваров<br />\
    <img src="styles/legend/_0_41.png" /> Для размещения садов, скверов, бульваров<br />\
    <img src="styles/legend/_0_42.png" /> Для размещения складских объектов<br />\
    <img src="styles/legend/_0_43.png" /> Для размещения электроподстанций закрытого типа (в том числе тяговых электротранспорта), котельных тепловой мощностью до 200 Гкал/час<br />\
    <img src="styles/legend/_0_44.png" /> для садоводства<br />\
    <img src="styles/legend/_0_45.png" /> <br />'
        });

lyr__0.setVisible(true);
var layersList = [baseLayer,lyr__0];
lyr__0.set('fieldAliases', {'CAD_N': 'CAD_N', 'STATUS': 'STATUS', 'C_COST': 'C_COST', 'AREA': 'AREA', 'UTL_ID': 'UTL_ID', 'UTL_DOC': 'UTL_DOC', 'id': 'id', });
lyr__0.set('fieldImages', {'CAD_N': 'TextEdit', 'STATUS': 'TextEdit', 'C_COST': 'TextEdit', 'AREA': 'TextEdit', 'UTL_ID': 'TextEdit', 'UTL_DOC': 'TextEdit', 'id': 'TextEdit', });
lyr__0.set('fieldLabels', {'CAD_N': 'no label', 'STATUS': 'no label', 'C_COST': 'no label', 'AREA': 'no label', 'UTL_ID': 'no label', 'UTL_DOC': 'no label', 'id': 'no label', });
lyr__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr__0.on("postcompose", update);

    var listenerKey = lyr__0.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });