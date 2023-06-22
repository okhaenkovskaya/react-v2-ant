import { useAppSelector} from "../../hooks";
import { Row, Layout, Typography } from "antd";

import { IProductBlock } from "../../types/productSliceTypes.ts";
import type { ICartSlice} from "../../types/cartSliceTypes"
import ProductBlock from "../../componenst/ProductBlock/ProductBlock.tsx";

const CartPage = () => {
  const { Text } = Typography;
  const {totalCount, totalPrice, items }: ICartSlice = useAppSelector((state) => state.cart);

  return (
    <Layout style={{ padding: "20px" }}>

      <Row style={{display: "flex", justifyContent: "space-between", margin: "0 0 40px"}}>
        <Text>Count: {totalCount}</Text>
        <Text>TotalPrice: {totalPrice.toFixed(2)}</Text>
      </Row>
      <Row gutter={[24, 24]}>
        {items.length > 0 ?
          items.map((item: IProductBlock) => <ProductBlock key={item.id} {...item}/>)
          : <Text style={{textAlign: "center", display: "block", width: "100%"}}>No products</Text>
        }
      </Row>
    </Layout>
  );
};

export default CartPage;
