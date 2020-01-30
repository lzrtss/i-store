import { useState, useEffect } from 'react';

export const useProduct = productId => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(
      `https://yalantis-react-school.herokuapp.com/api/v1/products/${productId}`
    )
      .then(res => res.json())
      .then(product => setProduct(product));
  }, [productId]);

  return { product };
};
