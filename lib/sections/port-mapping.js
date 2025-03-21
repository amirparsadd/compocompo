/**
 * A port mapping defenition
 */
class PortMapping {
	/**
	 * @type {Number}
	 */
	host
	/** 
	 * @type {Number} 
	 */
	container

	/**
	 * 
	 * @param {Number} host 
	 * @param {Number} container 
	 */
	constructor(host, container) {
		this.host = host
		this.container = container
	}

	toString() {
		return `${this.host}:${this.container}`
	}

	toObject() {
		return { host: this.host, container: this.container }
	}
}

module.exports = PortMapping