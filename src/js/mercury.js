'use strict';

let infos = {
 	"name" : "Mercury",
 	"year_discovered" : "14th century BC",
 	"mass" : "3.30 x 10^23 kg",
 	"size" : "4,879 km",
 	"distance_from_sun" : "35.98 million mi",
 	"atmosphere" : "Gas",
 	"satelites" : "None",
 	"explorers" : "MPO MMO"
 };

function outputTo(domElement) {
	let content = `
		<p>Planet Name: ${infos.name}</p>
		<p>Year Discovered: ${infos.year_discovered}</p>
		<p>Mass: ${infos.mass}</p>
		<p>Diameter: ${infos.size}</p>
		<p>Distance From the Sun: ${infos.distance_from_sun}</p>
		<p>Atmosphere: ${infos.atmosphere}</p>
		<p>Satelites: ${infos.satelites}</p>
		<p>Explorers: ${infos.explorers}</p>
	`;
	domElement.append(content);
}

module.exports = {outputTo};