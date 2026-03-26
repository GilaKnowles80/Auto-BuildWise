import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  planType: { type: String, enum: ["Monthly", "Quarterly", "Bi-Annual", "Annual"], required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  status: { type: String, enum: ["Active", "Expired", "Cancelled"], default: "Active" },
  paymentGateway: { type: String, enum: ["Stripe", "PayMongo", "Xendit"], required: true },
  transactionId: { type: String },
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;