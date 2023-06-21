import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Col, Row, Typography, Image } from "antd";

import { fetchProduct } from "../../store/slices/productItemSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import { IProductItemSliceArgs } from "../../types/productItemSliceTypes";
import { EProductSliceStatus } from "../../types/productSliceTypes.ts";

const { Title, Text } = Typography;

const ProductPage = () => {
  const params = useParams();

  const {
    product,
    status
  } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(
      fetchProduct(params as IProductItemSliceArgs)
    );
    window.scrollTo(0,0)
  }, [params.id])

  console.log(status, 'status')

  console.log(product, 'product')

  return (
    <Row style={{minHeight:"70vh", padding:"20px"}}>
      {status === EProductSliceStatus.Success ? (
        <Col>
          <Title level={3}>{product.title}</Title>
          <Image style={{display: "block", height: "200px", width: "auto"}} src={product.image} />
          <Text><Title level={4}>${product.price}</Title> {product.description}</Text>
        </Col>
      ) : <Col>Not Found</Col>}
    </Row>
  );
};

export default ProductPage;
