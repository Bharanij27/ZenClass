import React, { Component } from 'react';
import Offer from './Offer'

class PriceCard extends Component {
    render(){
        
        let {data, features} = {...this.props};
        let allFeatures = [data.users, data.storage, ...features,];
        let availClasses = ['fas fa-check'];
        let unavailClasses = ['fas fa-times', 'text-muted'];
  
        if(data.type == 'Pro') allFeatures[6] = 'Unlimited Free Subdomain'; 
        return ( 
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{data.type}</h5>
                    <h6 className="card-price text-center">${data.cpm}<span className="period">/month</span></h6>
                    <hr/>
                    <ul className = "fa-ul">
                        {allFeatures.map((offer, index) => 
                        <Offer class = {data.limit > index ? availClasses : unavailClasses} key = {index} value = {offer}/>)}
                    </ul>

                    <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                </div>
            </div>
        </div>
        );
    }
}
 
export default PriceCard;