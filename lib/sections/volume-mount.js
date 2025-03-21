/**
 * A Volume Mount Defenition for a service
 */
class VolumeMount {
	/**
	 * @type {String}
	 */
	source

	/**
	 * @type {String}
	 */
	target

	/**
	 * 
	 * @param {String} source 
	 * @param {String} target 
	 */
	constructor(source, target) {
		this.source = source
		this.target = target
	}

	toString() {
		return `${this.source}:${this.target}`
	}
}

module.exports = VolumeMount