import Ember from 'ember'
import LeafletMapComponent from 'ember-leaflet/components/leaflet-map';

export default LeafletMapComponent.extend({

    osm_lang(url_lang) {
        var text = '';
	    var app = url_lang.toString();
        if (app.indexOf("it")!=-1)
		{
		    text = '<a href="http://osm.org/copyright">OpenStreetMap</a>';
        } else
		if(app.indexOf("es")!=-1)
		{
			text = '<a href="http://osm.org/copyright">OpenStreetMap</a>';
		} else
		if(app.indexOf("en")!=-1)
		{
			text = '<a href="http://osm.org/copyright">OpenStreetMap</a>';
		} else
		if(app.indexOf("zh")!=-1)
		{
			text = '<a href="http://osm.org/copyright">开放街图</a>';
		} else
		if(app.indexOf("ar")!=-1)
		{
			text = '<a href="http://osm.org/copyright"> أوبن ستريت مابس</a>';
		} else
		if(app.indexOf("ru")!=-1)
		{
			text = '<a href="http://osm.org/copyright">OpenStreetMap</a>';
		}  else
		if(app.indexOf("jp")!=-1)
		{
			text = '<a href="http://osm.org/copyright">オープンストリートマップ</a>';
		}
        else {
            text = "OpenStreetMap";
		}
            

         return text;
    },
		
    doSomething: function() {
        this.set('arab', !this.get('arab'));
	    var cli = this.get('arab');
        console.log(cli);
        console.log('components.cl-leaflet-map.doSomething:' + cli);
    },
		

    didCreateLayer(){
        this._super(...arguments);

        var thisComponent = this;

        var L = thisComponent.get('L');

        L.control.zoom({
         zoomInText: '+',
         zoomOutText: '-'
        }).addTo(thisComponent._layer);
 
        new L.Control.Fullscreen({
	    position: 'topleft',
        title: {
            'false': 'View Fullscreen',
            'true': 'Exit Fullscreen'
            }
        }).addTo(thisComponent._layer);

        //Posizione search
  //Aggiungo controllo ricerca strade
  new L.Control.Search({position: 'bottomright'}).addTo(thisComponent._layer);
   /*new L.Control.Search({
    url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}', //CAMBIARE con il proprio geocoder
    jsonpParam: 'json_callback',
    propertyName: 'display_name',
    markerLocation: true,
    propertyLoc: ['lat','lon'],
    marker: false,
    zoom:16,
    zoomControl: false,
    autoCollapse:false,
  autoCollapseTime:0,
    autoType: false,
    minLength: 3,
    position: 'bottomright',
    autoResize: false,
    tooltipLimit:8,
    collapsed: true,
    delayType: 500,
    //initial: init_mob,
    textErr:''
}).on('search:locationfound', function (e) {
 
  
        var coord = e.latlng.toString().split(',');
        var lat = coord[0].split('(');
        var lng = coord[1].split(')');
        console.log("Latitude: " + lat[1] + " and Longitude:" + lng[0]);
    
}).addTo(thisComponent._layer); */

//Posizione controlli zoom
  //map.zoomControl.setPosition(pos_zoom);
/*thisComponent._layer.removeControl(thisComponent._layer.zoomControl);
  var zoomOptions = { zoomInText: '', zoomOutText: '', zoomInTitle:'', zoomOutTitle:'', position:'topleft' };
  var zoom = L.control.zoom(zoomOptions);
  zoom.addTo(thisComponent._layer); */

 L.control.fullscreen({ title: '', titleCancel: '', position: 'topright' }).addTo(thisComponent._layer);
  

        var credits = L.control.attribution({ position: 'bottomright', prefix: '' }).addTo(thisComponent._layer);
        credits.addAttribution('ciao');

        L.Control.Tes = L.Control.extend({

            onAdd: function (map) {

                var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
                L.DomEvent.disableClickPropagation(container);
                container.style.backgroundColor = 'rgba(71, 81, 80, 0.8)';
                container.style.backgroundImage = 'url(/assets/images/Posizione_utente_CL_w.png)';
                container.style.backgroundSize = '85%';
                container.style.backgroundPosition = 'center center';
                container.style.width = '34px';
                container.style.height = '34px';


                container.onmouseover = function () {
                    container.style.backgroundImage = 'url(/assets/images/Posizione_utente_CL.png)';
                };

                container.onmouseout = function () {
                    container.style.backgroundImage = 'url(/assets/images/Posizione_utente_CL_w.png)';
                };

                container.onclick = function () {
                    console.log("Dove è la mia posizione?");
                    // ?? Ember.Controller.set();
                    thisComponent.sendAction('componentaction');
                };
                return container;
            },

            onRemove: function (map) {
                // Nothing to do here
            }

        });

        L.control.tes = function (opts) {
            return new L.Control.Tes(opts);
        }

        L.control.tes({ position: 'topleft' }).addTo(this._layer);
        }
});
