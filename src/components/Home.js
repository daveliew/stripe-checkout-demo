import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const subscriptionPlans = [
  { id: 'basic', name: 'Basic Plan', price: 19.99, features: ['Weekly newsletter', 'Basic content access', 'Email support'] },
  { id: 'pro', name: 'Pro Plan', price: 39.99, features: ['Daily newsletter', 'Full content access', 'Priority email support', 'Exclusive webinars'] },
  { id: 'enterprise', name: 'Enterprise Plan', price: 89.99, features: ['Custom newsletter', 'Full content access', '24/7 phone support', 'Exclusive webinars', 'API access'] },
];

function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Choose Your Subscription Plan</h1>
      <div className={styles.subscriptionPlans}>
        {subscriptionPlans.map((plan) => (
          <div key={plan.id} className={styles.plan}>
            <div className={styles.planContent}>
              <h2 className={styles.planName}>{plan.name}</h2>
              <p className={styles.planPrice}>${plan.price}/month</p>
              <ul className={styles.featureList}>
                {plan.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>{feature}</li>
                ))}
              </ul>
            </div>
            <Link to={`/checkout?plan=${plan.id}`} className={styles.subscribeButton}>
              Subscribe Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
