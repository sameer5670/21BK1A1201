import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Slider
} from '@mui/material';

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

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [priceRange, setPriceRange] = useState([1, 10000]);

  useEffect(() => {
    fetchProducts();
  }, [company, category, priceRange]);

  const fetchProducts = async () => {
    try {
      const productsWithIds = productsData.map(product => ({
        ...product,
        id: `${product.productName}-${Math.random().toString(36).substr(2, 9)}`
      }));
      setProducts(productsWithIds);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCompanyChange = (event) => setCompany(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handlePriceRangeChange = (event, newValue) => setPriceRange(newValue);

  return (
    <div>
      <h1>All Products</h1>
      <FormControl>
        <InputLabel>Company</InputLabel>
        <Select value={company} onChange={handleCompanyChange}>
          <MenuItem value="AMZ">Amazon</MenuItem>
          <MenuItem value="FLP">Flipkart</MenuItem>
          <MenuItem value="SNP">Snapdeal</MenuItem>
          <MenuItem value="MYN">Myntra</MenuItem>
          <MenuItem value="AZO">Azoo</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={handleCategoryChange}>
          <MenuItem value="Laptop">Laptop</MenuItem>
          <MenuItem value="Phone">Phone</MenuItem>
          <MenuItem value="TV">TV</MenuItem>
          {/* Add other categories as needed */}
        </Select>
      </FormControl>
      <Slider
        value={priceRange}
        onChange={handlePriceRangeChange}
        valueLabelDisplay="auto"
        min={1}
        max={10000}
      />
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{product.productName}</Typography>
                <Typography>{company}</Typography>
                <Typography>{category}</Typography>
                <Typography>${product.price}</Typography>
                <Typography>Rating: {product.rating}</Typography>
                <Typography>Discount: {product.discount}%</Typography>
                <Typography>Availability: {product.availability}</Typography>
                <Link to={`/product/${product.id}`}>View Details</Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllProducts;
