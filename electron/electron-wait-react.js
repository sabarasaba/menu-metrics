const net = require('net');

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => client.connect({port: 5000}, () => {
        client.end();
        if(!startedElectron) {
            console.log('starting electron');
            startedElectron = true;
            const exec = require('child_process').exec;
            exec('yarn electron');
        }
    }
);

tryConnection();

client.on('error', (error) => {
    setTimeout(tryConnection, 1000);
});
