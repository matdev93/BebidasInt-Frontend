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
            <h1 style={{ textAlign:'center', margin:'10px' }}>Nuestros Productos</h1>
            <Row xs={1} md={4} className='g-4 tarjeta' style={{margin:'10px'}}>
                {products && products.map((product) => (
                    <Card key={product._id} style={{ textAlign:'center', margin:'10px' }}>
                        <Link to={`/product/${product._id}`}>
                            <Card.Img variant="top" src={product.image} alt={product.name} style={{ width: '150px', margin:'5px' }} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.price}</Card.Text>
                                {product.stock === 0 ? <h5 className="text-red-900">Sin Stock</h5> :  <Button variant='dark'>Ver detalle</Button>}
                            </Card.Body>
                        </Link>
                    </Card>
                ))}
            </Row>
        </div>
    );
};

export default Products;
