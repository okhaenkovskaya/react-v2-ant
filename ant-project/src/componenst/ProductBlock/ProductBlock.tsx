import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { DeleteOutlined, MinusCircleOutlined, PlusCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Col, Typography } from "antd";

import { ICartItem } from "../../types/cartSliceTypes";
import { useAppSelector } from "../../hooks";
import { addItemToCart, removeItemFromCart, minusCartItem } from "../../store/slices/cartSlice";

type ProductBlockProps = {
  id: string;
  title: string;
  price: number;
  image: string;
}


const ProductBlock = ({id, title, price, image}: ProductBlockProps) => {
  const dispatch = useDispatch();
  const cartItem = useAppSelector((state) => state.cart.items.find((item: ICartItem) => item.id === id))
  const { Text } = Typography;

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
  }

  const removeFromCart = () => {
    dispatch(
      removeItemFromCart(id)
    )
  }

  const minisFromCart = () => {
    dispatch(
      minusCartItem(id)
    )
  }

  const count = cartItem ? cartItem.count : 0;

  return (
    <Col span={4}>
      <Card
        style={{margin: '0 0 30px'}}
        cover={<img style={{height: "250px", objectFit: "contain"}} alt={title} src={image} />}
        actions={[
          <PlusCircleOutlined onClick={addToCart} key="plus" />,
          <MinusCircleOutlined onClick={minisFromCart} key="minus"  />,
          <DeleteOutlined onClick={removeFromCart} key="delete" />,
        ]}
      >
        <Card.Meta title={<Link style={{fontSize: "12px"}} to={`/product/${id}`}>{title}</Link>} />
        <Text style={{display: "flex", justifyContent: "space-between"}}>
          <span>${price}</span>
          <span><ShoppingCartOutlined />{count}</span>
        </Text>
      </Card>
    </Col>
  );
};

export default ProductBlock;
