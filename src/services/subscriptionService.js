// src/services/subscriptionService.js
import axios from "axios";

export async function getPlans() {
  const res = await axios.get("http://localhost:4000/api/subscriptions");
  return res.data;
}

export async function subscribe(userId, plan) {
  const res = await axios.post("http://localhost:4000/api/subscriptions/subscribe", {
    userId,
    plan,
  });
  return res.data;
}