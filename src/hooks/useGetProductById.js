import { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";

import { setLoadingProducts } from '../store/products/actions';

const useGetProductById = (productId) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    dispatch(setLoadingProducts(true));
    fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
    .then(res => res.json())
    .then(product => {
      setProduct(product);
      dispatch(setLoadingProducts(false));
    })
    .catch(error => {
      console.log('Fetching product details failed...', error);
    });
  }, [dispatch, productId]);
  return useMemo(
    () => ({ product }), [product]
  );
};

export default useGetProductById;
