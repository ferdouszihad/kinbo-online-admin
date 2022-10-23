import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <ul class="list-group">
      <li class="list-group-item active">Dashboard</li>
      <li class="list-group-item">
        <Link to="/dashboard/products">products</Link>
      </li>
      <li class="list-group-item">
        <Link to="/dashboard/add-product">Add product</Link>
      </li>
      <li class="list-group-item">
        <Link to="/dashboard/users">Users</Link>
      </li>
      <li class="list-group-item">
        <Link to="/dashboard/orders">Orders</Link>
      </li>
    </ul>
  );
};

export default List;
