import React from 'react';

import BestBonuses from '../components/BestBonuses/BestBonuses';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';

import './index.scss';

const App = () => (
  <div className="App">
    <BestBonuses />
  </div>
);

export default App;
