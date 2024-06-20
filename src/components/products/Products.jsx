import React from "react";
import { useGetProductsQuery } from "../../context/api/prductApi";
import DontHaveImg from "../../assets/lololololol.jpg"; 
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Rating,
  Button,
  Box,
} from "@mui/material";

const Products = () => {
  const { data: products } = useGetProductsQuery({ limit: 50 });

  const handleImageError = (event) => {
    event.target.src = DontHaveImg; 
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={3}>
        {products?.data?.products?.map((el) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={el.id}>
            <Card
              sx={{
                maxWidth: 345,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={el.urls[0] || DontHaveImg} 
                alt={el.title}
                onError={handleImageError} 
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.title}
                  </Typography>
                  <Rating name="read-only" value={5} readOnly />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                    sx={{ mt: 1, mb: 2 }}
                  >
                    {el.description}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6" color="textPrimary">
                    ${el.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ textDecoration: "line-through" }}
                  >
                    ${el.oldPrice}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/products/${el.id}`}
                  >
                    View details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
