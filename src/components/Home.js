import React from 'react';
import { Link } from 'react-router-dom';

const subscriptionPlans = [
  { id: 'basic', name: 'Basic Plan', price: 9.99, features: ['Weekly newsletter', 'Basic content access'] },
  { id: 'pro', name: 'Pro Plan', price: 19.99, features: ['Daily newsletter', 'Full content access', 'Exclusive webinars'] },
];

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our Premium Service</h1>
      <div className="subscription-plans">
        {subscriptionPlans.map((plan) => (
          <div key={plan.id} className="plan">
            <h2>{plan.name}</h2>
            <p>${plan.price}/month</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Link to={`/checkout?plan=${plan.id}`}>
              <button>Subscribe Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
