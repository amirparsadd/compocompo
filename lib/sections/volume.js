/**
 * Represents a Docker volume in a Compose file.
 */
class Volume {
  /**
   * @type {String}
   */
  name

  /**
   * @type {"local" | "nfs" | "tmpfs" | "azure_file" | "gcs" | null} 
   */
  driver

  /**
   * @param {String} name - The volume name (required)
   * @param {"local" | "nfs" | "tmpfs" | "azure_file" | "gcs"} [driver] - The volume driver (optional)
   */
  constructor(name, driver = null) {
    this.name = name
    this.driver = driver
  }

  /**
   * Convert the volume to a Docker Compose compatible object.
   * @returns {Object}
   */
  toObject() {
    const object = {}
    if (this.driver) {
      object.driver = this.driver
    }
    return object
  }
}

module.exports = Volume
