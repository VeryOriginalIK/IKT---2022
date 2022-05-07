
    $(document).ready(function() {

        if (typeof navigator.geolocation == "undefined") {
          $("#error").text("Your browser doesn't support the Geolocation API");
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
    
    /*adatok lekérése Googletől*/
   var link = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${cim}&origins=${etterem}&units=metric&key=AIzaSyDSwENCRBGSM1dSAY5Ts_0t-0Ne1hlI8wo`;
  
   function getjson() {
    fetch (link);
     
   }
  