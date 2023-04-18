import { Card, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ProductContext from "../../context/product/ProductContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const { getProducts, products } = useContext(ProductContext);

    useEffect(() => {
        const fetchProducts = async () => {
            await getProducts();
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Nuestros Productos</h1>
            <Col xs={1} md={3} className='g-4 tarjeta'>
                {products.map((product) => (
                    <Link to={`/product/${_id}`}>
                        <Card key={product._id}>
                            <Card.Img variant="top" src={product.image} alt={product.name} style={{ width: '250px' }} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{price}</Card.Text>
                                {stock === 0 ? <h5 className="text-red-900">Sin Stock</h5> :  <Button >comprar</Button>}
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </Col>
        </div>
    );
};

export default Products;
