'use strict';

let infos = {
 	"name" : "Jupiter",
 	"year_discovered" : "1610",
 	"mass" : "1.898 × 10^27 kg",
 	"size" : "86,881.4 mi",
 	"distance_from_sun" : "483.8 million mi",
 	"atmosphere" : "Hydrogen and Helium",
 	"satelites" : "69 Moons",
 	"explorers" : "Voyager"
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