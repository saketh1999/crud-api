import { Product } from "../Models/product.model.js";

export const getAllProducts = async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};


export const getProductById = async (req,res)=>{
    try {
        //    const productId = req.params.id; same as the below code
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

export const postProduct = async (req,res)=>{
try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

export const deleteProductById = async (req,res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
          res.status(404).json({ message: "Product Not Found" });
        }
        res.status(200).json({message:"Deleted Successfully"});
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

export const updateProductById = async (req,res)=>{
    try {
        //    const productId = req.params.id; ===
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
          res.status(404).json({ message: "Product Not Found" });
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}