import { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';

import { setLoadingProducts } from '../store/products/actions';

const useGetProductById = (productId) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    dispatch(setLoadingProducts(true));
    axios.get(`${process.env.REACT_APP_API_URL}/products/${productId}`)
    .then(response => {
      setProduct(response.data);
      dispatch(setLoadingProducts(false));
    })
    .catch(error => {
      console.log('Fetching product details failed...', error);
      dispatch(setLoadingProducts(false));
    });
  }, [dispatch, productId]);
  return useMemo(
    () => ({ product }), [product]
  );
};

export default useGetProductById;
