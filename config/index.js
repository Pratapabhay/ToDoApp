var configValues = require('./config.json')

module.exports = {
    getDBConnectionString: () => {
        return 'mongodb+srv://pratap:abhay981@cluster0-2adly.mongodb.net/test?retryWrites=true&w=majority';
    }
}