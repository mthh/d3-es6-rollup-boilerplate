import debug from 'debug';
import D3Map from './modules/map';

const log = debug('app:log');

if (ENV !== 'production') {
  debug.enable('*');
  log('Logging is enabled');
} else {
  debug.disable();
}

const map = new D3Map('body');
map.drawBaseMap();
