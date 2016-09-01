
const utapiServer = require('utapi').UtapiServer;
const _config = require('./Config').default;

// start utapi server
export default function main() {
    if (_config.utapi) {
        let fullConfig = Object.assign({}, _config.utapi);
        if (_config.vaultd) {
            fullConfig = Object.assign(fullConfig, _config.vaultd);
        }
        if (_config.https) {
            fullConfig = Object.assign(fullConfig, _config.https);
        }
        utapiServer(fullConfig);
    }
}
