import { Request, Response } from "express";
import {
  UpdateProductBodyType,
  UpdateProductQueryType,
} from "../schemas/product.schema";
import {
  CreateProductType,
  UpdateProductParamsType,
} from "../schemas/product.schema";
export const createProduct = (
  req: Request<unknown, unknown, CreateProductType>,
  res: Response
) => {
  const { name, price } = req.body;
  res.send("creating product");
};
export const updateProduct = (
  req: Request<
    UpdateProductParamsType,
    unknown,
    UpdateProductBodyType,
    UpdateProductQueryType
  >,
  res: Response
) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const { title } = req.query;
  console.log(id,name,price,title)
  res.send("update product");
};
