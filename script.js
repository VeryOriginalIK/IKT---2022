
    $(document).ready(function() {

        if (typeof navigator.geolocation == "undefined") {
          $("#error").text("A böngésző nem támogatja a helymeghatározást");
          return;
        }
        $("#cim-link").click(function(event) {
          event.preventDefault();
          var addressId = this.id.substring(0, this.id.indexOf("-"));
  
          navigator.geolocation.getCurrentPosition(function(position) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              "location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            },
            function(results, status) {
              if (status == google.maps.GeocoderStatus.OK)
                $("#" + addressId).val(results[0].formatted_address);
              else
                $("#error").append("Nem sikerült megtalálni Önt<br />");
            });
          },
          function(positionError){
            $("#error").append("Error: " + positionError.message + "<br />");
          },
          {
            enableHighAccuracy: true,
            timeout: 10 * 1000
          });
        });
      });
  
  /* hely autocomplete*/
      var searchInput = 'cim';
        
            $(document).ready(function () {
                var autocomplete;
                autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
                    types: ['geocode']
                   
                });
            
                google.maps.event.addListener(autocomplete, 'place_changed', function () {
                    var near_place = autocomplete.getPlace();
                });
            });
  
  /* kezdőpont lekérése*/

            function etterem() {
    var etterem = document.getElementById("from").value;}
  
  /* végpont lekérése*/
            function cel() {
    var cim = document.getElementById("cim").value;}
  
  /*json lekérése*/
   function getjson() {
    var origin1 = $('#from')[0].value;
    var destinationA = $('#cim')[0].value;
    
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
      origins: [origin1],
      destinations: [destinationA],
      travelMode: 'DRIVING',
      }, callback);
  
    function callback(response, status) {
      console.log(response) /*response az a google válasza */
      
      jsonRespRouteDistance = new JSONObject(httpResponse)
                                        .getJSONArray("rows")
                                        .getJSONObject(0)
                                        .getJSONArray ("elements")
                                        .getJSONObject(0)
                                        .getJSONObject("duration");
                                        

var duration = jsonRespRouteDuration.get("text").toString();
     }
    }
  