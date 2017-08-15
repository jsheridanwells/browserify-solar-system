'use strict';

let infos = {
 	"name" : "Mars",
 	"year_discovered" : "1659",
 	"mass" : "6.39 × 10^23 kg",
 	"size" : "4,212 mi",
 	"distance_from_sun" : "141.6 million mi",
 	"atmosphere" : "Carbon Dioxide",
 	"satelites" : "Phobos, Deimos",
 	"explorers" : "Spirit, Opportunity"
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