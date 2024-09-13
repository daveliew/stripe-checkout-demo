import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Subscription {
  id: string;
  plan: string;
  status: string;
  currentPeriodEnd: string;
}

function SubscriptionManagement() {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      const response = await axios.get('/api/subscription');
      setSubscription(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch subscription details');
      setLoading(false);
    }
  };

  const handleCancelSubscription = async () => {
    try {
      await axios.post('/api/cancel-subscription');
      fetchSubscription(); // Refresh subscription data
    } catch (err) {
      setError('Failed to cancel subscription');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!subscription) return <div>No active subscription found.</div>;

  return (
    <div className="subscription-management">
      <h1>Manage Your Subscription</h1>
      <div className="subscription-details">
        <p>Plan: {subscription.plan}</p>
        <p>Status: {subscription.status}</p>
        <p>Next billing date: {new Date(subscription.currentPeriodEnd).toLocaleDateString()}</p>
      </div>
      <button onClick={handleCancelSubscription}>Cancel Subscription</button>
    </div>
  );
}

export default SubscriptionManagement;
