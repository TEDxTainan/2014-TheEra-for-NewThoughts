function initialize() {
	var latlng = new google.maps.LatLng(22.994205,120.205953);
        var mapOptions = {
          center: latlng	,//設定經緯度
          zoom: 18,	//地圖顯示比例
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
	//加入標示點(Marker)
	var image = new google.maps.MarkerImage(
            "assets/img/map_marker.png", //url
            new google.maps.Size(160, 55) //size
    );
        var marker = new google.maps.Marker({
                position: latlng, //經緯度
                title: "吳園", //顯示文字
                map: map ,//指定要放置的地圖對象
		icon: image
	});
      }
