mapboxgl.accessToken = 'pk.eyJ1Ijoia2VubmV0aGVsdW1iYSIsImEiOiJjbDgwYTJ6dzAwNDgyM29yejBnZmloeW1zIn0.GYoCqk09F5HzCvcX9VQFag'
// 
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v11', // style URL
	center: [13.404954, 52.520008], // starting position [lng, lat]
	zoom: 9, // starting zoom
	projection: 'globe' // display the map as a 3D globe
});

const nav = new mapboxgl.NavigationControl()
map.addControl(nav, 'top-left')

///////////// setting a pop up
// const popup = new mapboxgl.Popup({
// 	closesButton: true
// })
// popup.setLngLat([13.453281, 52.5329816])
// 	.setHTML('<h1>Hello World</h1>')
// 	.addTo(map)


// new mapboxgl.Marker({
// 	color: 'red',
// 	draggable: true
// }).setLngLat([13.453281, 52.5329816])
// 	.addTo(map)
// 	.on('dragend', event => console.log(event.target._lngLat))

//////////// this positions a marker on the map on click

function addMarker(event) {
	new mapboxgl.Marker({
		color: 'red',
	}).setLngLat(event.lngLat)
		.addTo(map)
}
map.on('click', addMarker)

////////// TODO: to Remove Marker
// const marker = new mapboxgl.Marker().addTo(map);
// marker.remove(); 



// const coords = [
// 	[13.405, 52.52],
// 	[13.6, 52.6]
// ]

// coords.forEach(coord => {
// 	new mapboxgl.Marker({
// 		color: 'green'
// 	}).setLngLat(coord)
// 		.addTo(map)
// })