'use strict';

let infos = {
 	"name" : "Saturn",
 	"year_discovered" : "1610",
 	"mass" : "5.683 × 10^26 kg",
 	"size" : "72,367.4 mi",
 	"distance_from_sun" : "888.2 million mi",
 	"atmosphere" : "Hyrodgen, Helium",
 	"satelites" : "62 Moons",
 	"explorers" : "Cassini"
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