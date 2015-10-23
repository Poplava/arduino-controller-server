import middleware from './middleware';
import serial from './serial';

export default function() {
  initialize(this, 'middleware', middleware);
  initialize(this, 'serial', serial);
};

function initialize(app, name, fn) {
  console.log(`Initializing: ${name}...`);
  fn.call(app);
  console.log(`Done.`);
}
