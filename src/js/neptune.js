'use strict';

let infos = {
 	"name" : "Neptune",
 	"year_discovered" : "1846",
 	"mass" : "1.024 × 10^26 kg",
 	"size" : "30,599 mi",
 	"distance_from_sun" : "2.795 billion mi",
 	"atmosphere" : "Hydrogen, Helium",
 	"satelites" : "14 Moons",
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