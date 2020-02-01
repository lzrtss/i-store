import React, { useState, useEffect, useCallback } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  loadingProducts: false
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [orderedProducts, setOrderedProducts] = useState({});

  const getTotalAmount = useCallback(
    (id) => {
      const curOrderedProducts = {...orderedProducts};
      const orderedProductsIds = Object.keys(curOrderedProducts).filter(key => curOrderedProducts[key] > 0);
      let totalAmount = 0;
      products.forEach(prod => {
        if (orderedProductsIds.includes(prod.id)) {
          totalAmount += prod.price * orderedProducts[prod.id];
        }
      });
      return totalAmount;
    }, [products, orderedProducts]
  );

  const addToCart = useCallback(
    (id) => {
      const curState = {...orderedProducts};
      curState[id] += 1;
      setOrderedProducts(curState);
    }, [orderedProducts]
  );

  const substractFromCart = useCallback(
    (id) => {
      const curState = {...orderedProducts};
      curState[id] -= 1;
      setOrderedProducts(curState);
    }, [orderedProducts]
  );

  const removeItemFromCart = useCallback(
    (id) => {
      const curState = {...orderedProducts};
      curState[id] = 0;
      setOrderedProducts(curState);
    }, [orderedProducts]
  );

  useEffect(() => {
    setLoadingProducts(true);
    
    fetch('https://yalantis-react-school.herokuapp.com/api/v1/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.items);
        setLoadingProducts(false);
        const productsInCart = {};
        data.items.forEach(prod => productsInCart[prod.id] = 0);
        setOrderedProducts(productsInCart);
      })
      .catch(error => console.log('Something went wrong...', error.message));
  }, []);

  return (
    <ProductsContext.Provider
      value = {{
        loadingProducts,
        products,
        orderedProducts,
        addToCart,
        substractFromCart,
        removeItemFromCart,
        getTotalAmount
      }}>
      { children }
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
