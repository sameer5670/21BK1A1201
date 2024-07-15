import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const productsData = [
  {
    productName: "Laptop 1",
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: "yes"
  },
  {
    productName: "Laptop 13",
    price: 1244,
    rating: 4.5,
    discount: 45,
    availability: "out-of-stock"
  },
  {
    productName: "Laptop 3",
    price: 9102,
    rating: 4.44,
    discount: 98,
    availability: "out-of-stock"
  },
  {
    productName: "Laptop 11",
    price: 2652,
    rating: 4.12,
    discount: 70,
    availability: "yes"
  },
  {
    productName: "Laptop 4",
    price: 1258,
    rating: 3.8,
    discount: 33,
    availability: "yes"
  },
  {
    productName: "Laptop 13",
    price: 8686,
    rating: 3.22,
    discount: 24,
    availability: "out-of-stock"
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = () => {
    const product = productsData.find(p => `${p.productName}-${id.split('-').pop()}` === id);
    setProduct(product);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.productName}</Typography>
        <Typography>${product.price}</Typography>
        <Typography>Rating: {product.rating}</Typography>
        <Typography>Discount: {product.discount}%</Typography>
        <Typography>Availability: {product.availability}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
