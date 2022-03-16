import React, {useEffect, useState, useContext} from 'react';
import Api from '../helpers/Api';
import CartContext from '../CartContext';

function Products(props) {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  let { addToCartCB } = useContext(CartContext);
  
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
      let response = await Api.getContent('/products');
      if (response.ok) {
        setProducts(response.data);
        console.log(products);
      }
      else {
        setErrorMsg("Uh oh! Something went wrong.")
      }
    };

  const handleAdd = (id) => {
    addToCartCB(id);
  }

  return (
    <div className="container">
        <h2>List of products</h2>
        <ul>
          {products.map(p => (
            <li key={p.productid}>
            <span className="me-2">{p.name}</span> 
            <button className="btn btn-primary" onClick={e => handleAdd(p.productid)}>Add to cart</button>
            </li>
          ))}
          
        </ul>
    </div>
  );
}

export default Products;