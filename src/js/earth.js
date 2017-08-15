'use strict';

let infos = {
 	"name" : "Earth",
 	"year_discovered" : "n/a",
 	"mass" : "5.972 × 10^24 kg",
 	"size" : "7,917.5 mi",
 	"distance_from_sun" : "92.96 million mi",
 	"atmosphere" : "nitrogen and oxygen",
 	"satelites" : "various",
 	"explorers" : "various"
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