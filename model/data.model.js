import mongoose from "mongoose";

const dataschema = new mongoose.Schema({
  evaporator: {
    suction: { type: Number, required: true },
    set: { type: Number, required: true },
    approach: { type: Number, required: true },
    capacity: { type: Number, required: true },
  },
  condenser: {
    discharge: { type: Number, required: true },
    SCT: { type: Number, required: true },
    approach: { type: Number, required: true },
    capacity: { type: Number, required: true },
  },
  systemPerformance: {
    compRatio: { type: Number, required: true },
    COP: { type: Number, required: true },
    power: { type: Number, required: true },
    capacity: { type: Number, required: true },
  },
  energyPerformance: {
    averageV: { type: Number, required: true },
    averageA: { type: Number, required: true },
    power: { type: Number, required: true },
    energyToday: { type: Number, required: true },
  },
  chilledWater: {
    enteringTemp: { type: Number, required: true },
    leavingTemp: { type: Number, required: true },
    setPoint: { type: Number, required: true },
    splitDT: { type: Number, required: true },
    flowRate: { type: Number, required: true },
  },
  condenserWater: {
    enteringTemp: { type: Number, required: true },
    leavingTemp: { type: Number, required: true },
    setPoint: { type: Number, required: true },
    splitDT: { type: Number, required: true },
    flowRate: { type: Number, required: true },
  },
  inputStatus: {
    chillerEnable: {
      type: String,
      enum: ["ENABLED", "DISABLED"],
      required: true,
    },
    BMSEnable: { type: String, enum: ["ENABLED", "DISABLED"], required: true },
    chilledWaterFlowStatus: {
      type: String,
      enum: ["FLOW", "NO_FLOW"],
      required: true,
    },
    condenserWaterFlowStatus: {
      type: String,
      enum: ["FLOW", "NO_FLOW"],
      required: true,
    },
    faultStatus: { type: String, enum: ["NORMAL", "FAULT"], required: true },
  },
  compressorStatus: {
    compressor: { type: String, enum: ["ON", "OFF"], required: true },
    chilledWaterFlowStatus: {
      type: String,
      enum: ["FLOW", "NO_FLOW"],
      required: true,
    },
    operation: { type: String, enum: ["NORMAL", "FAULT"], required: true },
  },
  performanceAnalytics: [
    {
      time: { type: Date, required: true },
      value: { type: Number, required: true },
    },
  ],
  status: {
    chiller: { type: String, enum: ["RUNNING", "STOPPED"], required: true },
    compressor: { type: Number, enum: [1, 2], required: true },
  },
  weatherInfo: {
    temperature: { type: Number, required: true },
    wetBulb: { type: Number, required: true },
    humidity: { type: Number, required: true },
  },
});

const chillerModel = mongoose.model("Datamodel", dataschema);

export default chillerModel;
