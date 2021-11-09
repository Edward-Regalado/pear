import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Product from "../components/Product";
import { ErrorMessage } from "../components/Message";
import Loader from "../components/Loader";


function HomeScreen() {
  
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList
  
    useEffect(() => {
      dispatch(listProducts())
  
  }, [dispatch]);
  
  return (
    <div>

      <h1>Latest Products</h1>
      {loading ? <Loader />
          : error ? <ErrorMessage variant='danger'>{error}</ErrorMessage>
              :  
              <Row>
                {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
              ))}
          </Row>
      }
  
    </div>
  );
}

export default HomeScreen;