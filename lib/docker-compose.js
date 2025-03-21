const Service = require("./sections/service");
const Volume = require("./sections/volume");

/**
 * The base of the Docker Compose file. Used in the generator.
 */
class DockerCompose {
  /**
   * @type {number | undefined}
   */
  version;

  /**
   * @type {Service[]}
   */
  services = [];

  /**
   * @type {Volume[]}
   */
  volumes = [];

  /**
   * @param {number | undefined} version 
   */
  constructor(version) {
    this.version = version;
  }

  /**
   * Add a service to the Docker Compose configuration.
   * 
   * @param {Service} service 
   * @returns {DockerCompose}
   */
  addService(service) {
    this.services.push(service);
    return this;
  }

  /**
   * Add a volume to the Docker Compose configuration.
   * 
   * @param {Volume} volume 
   * @returns {DockerCompose}
   */
  addVolume(volume) {
    this.volumes.push(volume);
    return this;
  }

  /**
   * Convert the Docker Compose object to a structure compatible with YAML.
   * 
   * @returns {Object} The Docker Compose-compatible object.
   */
  toObject() {
    const object = {
      version: this.version,
      services: this.services.map(service => service.toObject())
    };

    if (this.volumes.length > 0) {
      object.volumes = this.volumes.map(volume => volume.toObject());
    }

    return object;
  }
}

module.exports = DockerCompose;
