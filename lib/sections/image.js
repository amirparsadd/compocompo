/**
 * Defines a Docker image name
 */
class Image {
	/**
	 * @type {String}
	 */
	image

	/**
	 * @type {String}
	 */
	tag

	/**
	 * 
	 * @param {String} image 
	 * @param {String} tag 
	 */
	constructor(image, tag = "latest") {
		this.image = image,
		this.tag = tag
	}

	/**
	 * Get image in string form
	 * @returns {String}
	 */
	toString(){
		return `${this.image}:${this.tag}`
	}
}

module.exports = Image