// ex-import Ember from 'ember';
import Controller from '@ember/controller';
// import Controller from '@ember/controller';

export default Controller.extend({
    lat:41.8902,
    lng:12.4923,
    zoom:10,
    start:null,
    arab: false,
    init: function () {
        this._super(...arguments);
        this.set('start', [41.8902, 12.4923]);
    },
    actions: {
        controlleraction: function () {
            console.log('controllers.map.controlleraction will set here some lat, long, zoom, address variables bound to component');
        },

        doSomething: function() {
            this.set('arab', !this.get('arab'));
            var cli = this.get('arab');
            console.log('controllers.map.doSomething:' + cli);
        },

        funcA: function() {
            this.set('zoom','9');
            this.set('lat', 0.0);
            this.set('lng', 0.0);
        },

        searchGeo(term){

            let  url = 'https://webdev.datafluidity.com:8998/search?q='+term+'&format=jsonv2';

            //qui il proprio server nominatim
            //let url = 'http://192.168.1.21/nominatim/search?q='+term+'&format=jsonv2';
            //let url = 'https://nominatim.openstreetmap.org/search?q=' + term + '&format=jsonv2';



            return fetch(url).then(
                (resp)=> resp.json()
            ).then((json)=>json);

        },
        // funzione di reverse geocoding
        reverseGeo(r,e){
        //qui il proprio server nominatim 
        //let url = 'http://192.168.1.21/nominatim/reverse?lat='+e.latlng.lat+'&lon='+e.latlng.lng+'&format=jsonv2&zoom=18';
        //let url = 'https://nominatim.openstreetmap.org/reverse?lat=' + e.latlng.lat + '&lon=' + e.latlng.lng + '&format=jsonv2&zoom=18';
            let url = 'https://webdev.datafluidity.com:8998/reverse?lat=' + e.latlng.lat + '&lon=' + e.latlng.lng + '&format=jsonv2&zoom=18';

            return fetch(url).then(response=> 
                response.json().then(data => ({
                    data:data,
                    status:response.status
                    })
                ).then(res => {
                    //set nuovi parametri
                    this.set('way',res.data);
                    this.set('zoom','18');
                    this.set('lat', res.data.lat);
                    this.set('lng', res.data.lon);
                    this.set('start',[res.data.lat,res.data.lon]);
                }));

        },
        // funzione di zoom su centro
        updateCenter(value) {
            this.set('selec',value);
            this.set('lat',value.lat);
            this.set('lng',value.lon);
            this.set('zoom','16');
        }
    }
});

