import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Col, Row, Typography, Image, Spin, Button } from "antd";

import { fetchProduct } from "../../store/slices/productItemSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import { IProductItemSliceArgs } from "../../types/productItemSliceTypes";
import { EProductSliceStatus } from "../../types/productSliceTypes.ts";
import { addItemToCart } from "../../store/slices/cartSlice.ts";

const { Title, Text } = Typography;

const ProductPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const {
    product,
    status
  } = useAppSelector((state) => state.product);

  const {id, price, title, image, description} = product;
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(
      addItemToCart({
        id,
        price,
        title,
        count: 1,
        image
      })
    )
    navigate('/cart')
  }


  useEffect(() => {
    dispatch(
      fetchProduct(params as IProductItemSliceArgs)
    );
    window.scrollTo(0,0)
  }, [params.id, dispatch])

  if(status === EProductSliceStatus.Error) {
    navigate('/')
  }

  if (status === EProductSliceStatus.Loading) {
    return <Spin tip="Loading" size="large">
      <div className="content" />
    </Spin>
  }


  return (
    <Row style={{minHeight:"70vh", padding:"20px"}}>
      {status === EProductSliceStatus.Success ? (
        <Col>
          <Title level={3}>{title}</Title>
          <Image style={{display: "block", height: "200px", width: "auto"}} src={image} />
          <Text><Title level={4}>${price}</Title> {description}</Text><br/>
          <Button onClick={addToCart}>Add to Cart</Button>
        </Col>
      ) : <Col>Not Found</Col>}
    </Row>
  );
};

export default ProductPage;
