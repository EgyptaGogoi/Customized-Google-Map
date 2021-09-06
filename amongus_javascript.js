function initMap() {
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 34.66811554303898,
			lng: 135.43070188733108,
		},
		zoom: 17,
		mapId: '463c8b2a4f17d9be',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});
	// Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
	const markers = [
		[
			"Woof! Woof!",
			34.673996560911455, 135.42772999993667,
			'C:/Users/admin/Desktop/woof.png',
			55,
			55,
		],
		[
			'Do not eat me!',
			34.66954943809902, 135.43760052846667,
			'C:/Users/admin/Desktop/watermelon.png',
			38, 
			42.5

		],
		[
			'You\'re Here!',
			34.667857446802316, 135.43049808353584,
			'C:/Users/admin/Desktop/marker.png',
			30,
			47.8
		],
		[
			'Don\'t Peek!',
			34.66812658060558, 135.42951103068285,
			'C:/Users/admin/Desktop/toilet.png',
			37,
			48
		],
		[
			'HEH HEH HEH', 
			34.66711842735412, 135.4298114380729, 
			'/Users/admin/Desktop/witch.png', 
			38, 
			42.5
		],
		[
			'BUZZzz', 
			34.668821471218465, 135.42592759967306, 
			'/Users/admin/Desktop/ant.png', 
			54, 
			59,
		],
		[
			'Did you scream for Ice cream?',
			34.66883911915813, 135.43160315357778,
			'C:/Users/admin/Desktop/icy.png',
			38, 
			42.5
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}