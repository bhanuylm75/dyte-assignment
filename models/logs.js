import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  level: String,
  message: String,
  resourceId: String,
  timestamp: { type: Date, default: Date.now },
  traceId: String,
  spanId: String,
  commit: String,
  metadata: {
    parentResourceId: String,
  },
});

export default mongoose.model("log",logSchema)