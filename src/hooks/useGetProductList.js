import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectAllProducts } from '../store/selectors';
import { 
  setProducts, 
  setLoadingProducts, 
  setOrderedProducts
} from '../store/products/actions';

const useGetProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    if (!products.length) {
      dispatch(setLoadingProducts(true));
      fetch(`${process.env.REACT_APP_API_URL}/products`)
        .then(res => res.json())
        .then(data => {
          dispatch(setProducts(data.items));
          dispatch(setLoadingProducts(false));
          const productsInCart = {};
          data.items.forEach(prod => productsInCart[prod.id] = 0);
          dispatch(setOrderedProducts(productsInCart));
      })
      .catch(error => {
        console.log('Fetching products failed...', error);
      });
    }
  }, [dispatch, products]);
  return useMemo(
    () => ({ products }), [products]
  );
};

export default useGetProductList;
