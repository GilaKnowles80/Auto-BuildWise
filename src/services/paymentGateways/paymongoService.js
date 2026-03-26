// Placeholder for PayMongo API service
export const PaymongoService = {
  createPaymentIntent: (data) => {
    console.log("PayMongo createPaymentIntent called", data);
    return Promise.resolve({ id: "dummy-intent-id" });
  },
};