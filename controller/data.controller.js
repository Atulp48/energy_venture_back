import chillerModel from "../model/data.model.js";

export const datasave = async (req, res) => {
 
  const data=req.body;
  await chillerModel.create(data);
  return res.status(201).json({
    success: true,
    message: "data saved successfully",
  });
};

export const finddata = async (req, res) => {
  const data=await chillerModel.find()
  return res.status(200).json({
    success: true,
    message: "data found successfully",
    data: data,
  });
};
