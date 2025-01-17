const ShopModel = require("../model/model");
const getAllData = async (req, res) => {
  try {
    const data = await ShopModel.find({});
    console.log("aaa");
    res.status(200).json({ data: data, message: "success!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedData = await ShopModel.findByIdAndDelete(id);
    if (!deletedData) {
      return res
        .status(404)
        .json({ message: "failed to delete! | data not found!" });
    }
    res.status(200).json({
      deletedData: deletedData,
      message: "deleted successfully!",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await ShopModel.findById(id);

    if (!data) {
      return res.status(404).json({ message: "data not found!" });
    }

    res.status(200).json({ data: data, message: "success!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const postData = async (req, res) => {
  const { title, oldprice,price, imageUrl} = req.body;

  if (!title|| !oldprice|| !price || !imageUrl) {
    return res
      .status(400)
      .json({ message: "Bad Request! All fileds should be add!" });
  }
  try {
    const newData = ShopModel({ ...req.body });
    await newData.save();
    res.status(201).json({
      message: "data added successfully!",
      data: newData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editData = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedData = await ShopModel.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    if (!updatedData) {
      return res.status(404).json({
        message: "data not found!",
      });
    }

    res.status(200).json({
      message: "updated successfully!",
      updatedProduct: updatedData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchByPrice = async (req, res) => {
  const { price } = req.query;

  try {
    const data = await ShopModel.find({
      price: { $regex: price, $options: "i" },
    });
    res.status(200).json({ data: data, message: "success!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllData,
  deleteData,
  getDataById,
  postData,
  editData,
  searchByPrice,
};
