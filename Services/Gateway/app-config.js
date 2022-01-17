const PORT =  process.env.PORT || 5000;
const ServiceURL = process.env.SERVICE_URL || "localhost"
const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbServiceURLs: [
            { name: 'serviceA', url: `http://${ServiceURL}:5001` },
            { name: 'serviceB', url: `http://${ServiceURL}:5002` },
        ],
    },
    debug: {
        serverURL: `http://localhost:${PORT}/`,
        dbServiceURLs: [
            { name: 'serviceA', url: `http://${ServiceURL}-service-a:5001`} ,
            { name: 'serviceB', url: `http://${ServiceURL}-service-b:5002` },
        ],
    },
    production: {
        serverURL: `http://localhost:${PORT}/`,
        dbServiceURLs: [
            { name: 'serviceA', url: `http://${ServiceURL}-service-a:5001`} ,
            { name: 'serviceB', url: `http://${ServiceURL}-service-b:5002` },
        ],
    }
}

module.exports = { PORT, environment }
