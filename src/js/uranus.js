'use strict';

let infos = {
 	"name" : "Uranus",
 	"year_discovered" : "1781",
 	"mass" : "8.681 × 10^25 kg",
 	"size" : "31,518 mi",
 	"distance_from_sun" : "1.784 billion mi",
 	"atmosphere" : "Hydrogen, Helium",
 	"satelites" : "27 Moons",
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