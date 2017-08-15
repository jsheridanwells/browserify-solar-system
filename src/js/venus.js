'use strict';

let infos = {
 	"name" : "Venus",
 	"year_discovered" : "1761",
 	"mass" : "4.867 × 10^24 kg",
 	"size" : "12,104 km",
 	"distance_from_sun" : "67.24 million mi",
 	"atmosphere" : "Carbon Dioxide",
 	"satelites" : "None",
 	"explorers" : "Mariner 10, Galileo"
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