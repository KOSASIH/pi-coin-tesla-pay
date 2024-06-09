import TeslaApi from './TeslaApi';
import PiCoinApi from './PiCoinApi';

const teslaApi = new TeslaApi('https://api.tesla.com', 'YOUR_TESLA_ACCESS_TOKEN');
const piCoinApi = new PiCoinApi('https://api.pi-coin.com', 'YOUR_PI_COIN_ACCESS_TOKEN');

export { teslaApi, piCoinApi };
