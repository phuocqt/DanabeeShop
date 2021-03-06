import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/common';
import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function Product({ product }) {
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(location.pathname + '/' + product.id);
  };
  return (
    <Box padding={1} display="flex" flexDirection="column" justifyContent="flex-start" onClick={handleClick}>
      <Box padding={1} minHeight="215px">
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontWeight="bold" fontSize="16px" mr={1}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}

export default Product;
