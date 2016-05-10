  var map;
    function init(){
  // initiate leaflet map
  map = new L.Map('map', { 
      center: [0,10],
      zoom: 3
  })


  L.tileLayer("http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
    attribution: '<a href="http://code4sa.org/" target="_blank">Code4SA</a>'
  }).addTo(map);

  var layerUrl = 'https://adi45.cartodb.com/api/v2/viz/1178935a-d175-11e5-bbae-0e31c9be1b51/viz.json';

  var sublayers = [];

  cartodb.createLayer(map, layerUrl)
  .addTo(map)
  .on('done', function(layer) {
    // change the query for the first layer
    var subLayerOptions = {
      sql: "SELECT * FROM african_university_presses",
      interactivity:"university_carto, university_press_carto, facebook_carto, twitter_carto, url_carto, repository_carto, open_access_carto, most_recent_carto",

    }

    var sublayer = layer.getSubLayer(0);
    sublayer.set(subLayerOptions);

sublayer.on('featureClick', function(e, latlng, pos, data, subLayerIndex) {
  console.log("clicked feature: " + data);
        university=data.university_carto;
        university_press=data.university_press_carto;
        most_recent=data.most_recent_carto;
        facebook=data.facebook_carto;
        open_access=data.open_access_carto;
        repository=data.repository_carto;
        twitter=data.twitter_carto;
        url=data.url_carto;

        var details = '<h2>'+university+'</h2><h3>'+university_press+'</h3><div class="details">';
        if (url) details +=url;
        details += '<p>'+facebook+' '+twitter+'</p><p>Open access: '+open_access+'</p>'+'<p>Latest publication as of 2015: '+most_recent+'<p>Institutional repository: '+repository+'</p></div>'

        info.innerHTML = details;

});

sublayer.on('mouseover', function() {
    $("#map").css('cursor', 'pointer');
});

sublayer.on('mouseout', function() {
    $("#map").css('cursor', 'auto');
});

sublayer.setInteraction(true);

    sublayers.push(sublayer);
  }).on('error', function() {
    //log the error
  })

  //we define the queries that will be performed when we click on the buttons, by modifying the SQL of our layer
  var LayerActions = {
    all: function(){
      sublayers[0].setSQL("SELECT * FROM african_university_presses");
      return true;
    },
    twitter: function(){
      sublayers[0].setSQL("SELECT * FROM african_university_presses WHERE twitter_carto != ''");
      return true;
    },
    facebook: function(){
      sublayers[0].setSQL("SELECT * FROM african_university_presses WHERE facebook_carto != ''");
      return true;
    },
    openaccess: function(){
      sublayers[0].setSQL("SELECT * FROM african_university_presses WHERE open_access_carto = 'yes'");
      return true;
    },
    url: function(){
      sublayers[0].setSQL("SELECT * FROM african_university_presses WHERE url_carto != ''");
      return true;
    },
    repository: function(){
      sublayers[0].setSQL("SELECT * FROM african_university_presses WHERE repository_carto != ''");
      return true;
    }
  }

  $('.button').click(function() {
    $('.button').removeClass('selected');
    $(this).addClass('selected');
    //this gets the id of the different buttons and calls to LayerActions which responds according to the selected id
    LayerActions[$(this).attr('id')]();
  });
}