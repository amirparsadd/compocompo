const Image = require("./image")
const PortMapping = require("./port-mapping")
const VolumeMount = require("./volume-mount")

/**
 * A service defenition in a docker compose file
 */
class Service {
	/**
	 * Service name
	 * @type {String}
	 */
	name

	/**
	 * The docker image of the service
	 * @type {Image}
	 */
	image

	/**
	 * Environment variables
	 * @type {Record<String, any>}
	 */
	env = {}

	/**
	 * Port mappings for the service
	 * @type {PortMapping[]}
	 */
	ports = []

	/**
	 * Volume mounts
	 * @type {VolumeMount[]}
	 */
	volumes = []

	/**
	 * Depended Services
	 * @type {String[]}
	 */
	dependsOn = []

	/**
	 * 
	 * @param {String} name 
	 * @param {Image} image 
	 */
	constructor(name, image) {
		this.name = name
		this.image = image
	}

	/**
	 * Add an environment variable
	 * 
	 * @param {String} key 
	 * @param {any} value 
	 * @returns {Service}
	 */
	addEnv(key, value) {
		this.env[key] = value
		return this
	}

	/**
	 * Add a port mapping
	 * 
	 * @param {PortMapping} port 
	 * @returns {Service}
	 */
	addPort(port) {
		this.ports.push(port)
		return this
	}
	
	/**
	 * Add a volume mount
	 * 
	 * @param {VolumeMount} volume 
	 * @returns {Service}
	 */
	addVolume(volume) {
		this.volumes.push(volume)
		return this
	}

	/**
	 * 
	 * @param  {...String} services 
	 * @returns {Service}
	 */
	addServiceDependencies(...services) {
		this.dependsOn.push(...services)
		return this
	}

	/**
	 * Convert the service to a Docker Compose compatible object.
	 * 
	 * @returns A Docker Compose compatible object.
	 */
	toObject() {
		const object = {
			image: this.image.toString(),
		}

		if (Object.keys(this.env).length > 0) {
			object.environment = this.env
		}

		if (this.ports.length > 0) {
			object.ports = this.ports.map(port => port.toString())
		}

		if (this.volumes.length > 0) {
			object.volumes = this.volumes.map(volume => volume.toString())
		}

		if(this.dependsOn.length > 0) {
			object.depends_on = this.dependsOn
		}

		return object
	}
}

module.exports = Service