import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:8000/api/order`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [success]);

  const handleUpdate = (_id) => {
    const url = `http://localhost:8000/api/order/delivery/${_id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ delivery: "completed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setSuccess(!success);
          toast.success("Delivery updated", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };

  const handleView = (_id) => {
    navigate(`/dashboard/order/${_id}`);
  };

  console.log(orders);
  let d = new Date().toISOString().slice(0,10);
  return (
    <div>
      <table class="table caption-top">
        <caption>List of orders</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">OrderId</th>
            <th scope="col">PaymentId</th>
            <th scope="col">Amount</th>
            <th scope="col">Delivery</th>
            <th scope="col">More</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr className={`${ d === order.createdAt?.slice(0,10) ? "bg-table":""}`}>
              <td>{index + 1}</td>
              <td>{order._id}</td>
              <td>{order.transactionId ? order.transactionId : "No payment"}</td>
              <td>{order.amount ? order.amount : "0"} tk</td>
              <td>
                {order.delivery === "pending" ? (
                  <button
                    onClick={() => handleUpdate(order._id)}
                    className="btn btn-warning"
                  >
                    Complete
                  </button>
                ) : (
                  <p className="text-primary">Completed</p>
                )}
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleView(order._id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
