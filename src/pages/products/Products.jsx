import { Card, Row, Button } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import ProductContext from "../../context/product/ProductContext";
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
            <Row xs={1} md={3} className='g-4 tarjeta'>
                {products && products.map((product) => (
                    <Card key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <Card.Img variant="top" src={product.image} alt={product.name} style={{ width: '250px' }} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.price}</Card.Text>
                                {product.stock === 0 ? <h5 className="text-red-900">Sin Stock</h5> :  <Button >comprar</Button>}
                            </Card.Body>
                        </Link>
                    </Card>
                ))}
            </Row>
        </div>
    );
};

export default Products;
