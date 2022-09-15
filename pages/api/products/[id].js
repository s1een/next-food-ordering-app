import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;
  dbConnect();
  const token = cookies.token;

  if (method === "GET") {
    try {
      // find all
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        // return new
        new: true,
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      const product = await Product.findByIdAndDelete(id);
      res.status(200).json(`The Product with id: ${id} has been deleted.`);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
