const Service = require("./sections/service")

/**
 * The base of the docker compose file. used in the generator.
 */
class DockerCompose {
	/**
	 * @type {Number}
	 */
	version

	/**
	 * @type {Service[]}
	 */
	services = []


	/**
	 * @param {Number | undefined} version 
	 */
	constructor(version) {
		this.version = version
	}
}

module.exports = DockerCompose