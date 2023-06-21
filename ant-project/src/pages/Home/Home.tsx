import {useEffect} from "react";
import {fetchProducts} from "../../store/slices/productSlice";
import { Col, Row, Spin } from "antd";

import {EProductSliceStatus, IProductBlock} from "../../types/productSliceTypes";
import {useAppDispatch, useAppSelector} from "../../hooks";


import TabsSection from "../../componenst/Tabs/Tabs.tsx"
import ProductBlock from "../../componenst/ProductBlock/ProductBlock";

const HomePage = () => {
  const {
    productList,
    status
  } = useAppSelector((state) => state.products);

  const {
    categoryID,
    searchValue
  } = useAppSelector((state) => state.filter);

  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(
      fetchProducts({
        categoryID,
        searchValue
      })
    );
    window.scrollTo(0,0)
  }, [categoryID, searchValue, dispatch])

  if (status === EProductSliceStatus.Error) {
    return <div>{status}</div>
  }

  if (status === EProductSliceStatus.Loading) {
    return <Spin tip="Loading" size="large">
      <div className="content" />
    </Spin>
  }

  let products;

  if(productList.length) {
    products = productList.map((productItem:IProductBlock) => productItem)
  } else {
    products = []
  }


  return (
    <Row style={{minHeight:"70vh", padding:"20px"}}>
        <Col span={18} push={6}>
          <Row gutter={[24, 24]}>
            {products.length > 0 ?
              products.map((item: IProductBlock) => <ProductBlock key={item.id} {...item}/>)
              : "there isn't products"
            }
          </Row>
        </Col>
        <Col span={6} pull={18}>
            <TabsSection />
        </Col>
    </Row>
  );
};

export default HomePage;
