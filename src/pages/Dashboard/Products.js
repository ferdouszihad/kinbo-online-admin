import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    const url = `http://localhost:8000/api/product`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [success]);

  const handleDelete = _id =>{
    const url = `http://localhost:8000/api/product/${_id}`;
    fetch(url,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=> {
       if(data.status){
          setSuccess(!success);
          toast.success("product deleted!", {
          position: toast.POSITION.TOP_CENTER
        });
       }
    })

  }
  return (
    <div className="shadow-sm p-3 mb-5 bg-body rounded">
      <table class="table caption-top">
        <caption>List of products</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>
                <img width="100px" src={product.img} alt="" />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <FaTrash
                onClick={()=>handleDelete(product._id)} 
                style={{cursor:"pointer"}} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
