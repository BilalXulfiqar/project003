import React from 'react';
import Dinner from './dinner.js';

function App() {
  return (
    <div>
        <h1>Welcome to Sasta Restraunt</h1>
        < Dinner dishName="Chicken Karahi" sweetDish="Kheer" />
        < Dinner dishName="Biryani" sweetDish="Gajar ka halwa" />
    </div>   
  );
}

export default App;
