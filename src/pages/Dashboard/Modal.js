import React from "react";

const Modal = (props) => {
  const { order } = props;
  const { userId, amount, paid, transactionId, products, delivery } = order;

  console.log("Modal",order);

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Order Details
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="shadow-sm p-3 mb-5 bg-body rounded">
                <p>UserId: {userId}</p>
                <p>Amount: {amount} tk</p>
                <p>Paid: {paid ? "Completed" : "Not paid"}</p>
                <p>TransactionId: {transactionId}</p>
                <p>Delivery: {delivery}</p>
              </div>
              <table class="table caption-top">
                <caption>List of products</caption>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{product._id}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
