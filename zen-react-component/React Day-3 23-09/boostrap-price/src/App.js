import React from 'react';
import './App.css';
import PriceCard from './PriceCard'

function App() {
  let priceList = [
    {
      type : 'Free',
      cpm : 0, // Cost Per Month
      users : "Single User", 
      storage : "5GB Storage",
      limit : 4
    },
    {
      type : 'Plus',
      cpm : 9, // Cost Per Month
      users : "5 User",
      storage : "50GB Storage",
      limit : 7
    },
    {
      type : 'Pro',
      cpm : 49, // Cost Per Month
      users : "Unlimited User", 
      storage : "150GB Storage" ,
      limit : 10
    }
  ]

  let allFeatures = ["Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"];
  
  return (
    <div className="container mt-2">
      <h3 className = "text-center mb-3 title">BOOSTRAP PRICE LIST</h3>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {priceList.map((priceData, index) => <PriceCard key = {index} data = {priceData} features = {allFeatures}/>)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
