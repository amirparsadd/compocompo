const DockerCompose = require("../lib/docker-compose")
const Image = require("../lib/sections/image")
const PortMapping = require("../lib/sections/port-mapping")
const Service = require("../lib/sections/service")
const Volume = require("../lib/sections/volume")
const VolumeMount = require("../lib/sections/volume-mount")

const MONGO_LOGS_VOLUME = "mongo_logs"
const MONGO_DATA_VOLUME = "mongo_data"

/**
 * @returns {DockerCompose}
 */
const generate = () => {
	return new DockerCompose()
		.addService(
			new Service("db",new Image("mongo"))
				.addEnv("MONGO_INITDB_ROOT_USERNAME", "root")
				.addEnv("MONGO_INITDB_ROOT_PASSWORD", "safepassword") // TODO Add environment variable support
				.addPort(new PortMapping(27027, 27017))
				.addVolume(new VolumeMount(MONGO_DATA_VOLUME, "/data/db"))
				.addVolume(new VolumeMount(MONGO_LOGS_VOLUME, "/data/log"))
		)
		.addVolume(new Volume(MONGO_DATA_VOLUME))
		.addVolume(new Volume(MONGO_LOGS_VOLUME))
}

module.exports = generate