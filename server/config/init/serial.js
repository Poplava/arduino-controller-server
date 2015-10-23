import { SERIAL_PORT, SERIAL_TTY } from '../config';
import { SerialPort } from 'serialport';

const serialPort = new SerialPort(SERIAL_TTY, {
  baudrate: SERIAL_PORT
});

serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    console.log('data received: ' + data);
  });
  //setInterval(() => {
  //  serialPort.write("1", function(err, results) {
  //    console.log('err ' + err);
  //    console.log('results ' + results);
  //  });
  //}, 1000);
});

export default function() {
  this.get('/send', (req, res) => {
    serialPort.write("1", (err, result) => {
      console.log('sent ' + result);
    });
    res.send(1);
  });
};
