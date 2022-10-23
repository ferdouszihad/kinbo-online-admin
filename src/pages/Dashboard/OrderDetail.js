import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetail = () => {
  const { id } = useParams();
  const [orderDetail, setOrderDetail] = useState("");

  useEffect(() => {
    const url = `http://localhost:8000/api/order/order-detail/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrderDetail(data);
      });
  }, [id]);
 

  return (
    <div>
      <h2 className="mb-3">Order Detail</h2>
      <div className="shadow-sm p-3 mb-5 bg-body rounded">
        <p>OrderId: {orderDetail._id}</p>
        <p>Amount: {orderDetail.amount}</p>
        <p>TrasactionId: {orderDetail.transactionId}</p>
        <p>Delivery: {orderDetail.delivery}</p>
        <p>Paid: {orderDetail.paid ? "Completed" : "Not completed"}</p>
      </div>
      <div className="shadow-sm p-3 mb-5 bg-body rounded">
        <table class="table caption-top">
          <caption>List of products</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ProductId</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {
            orderDetail.products?.map((product,index) => (
              <tr>
                <td>{index+1}</td>
                <td>{product._id}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;