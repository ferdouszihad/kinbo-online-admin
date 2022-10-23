import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {Link} from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const product = {
        ...data,
        price:parseInt(data.price),
        quantity:parseInt(data.quantity)
    }

    const url = `http://localhost:8000/api/product`;
    fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(data=> {
        if(data.status){
            toast.success(<Link className="text-danger" to="/dashboard/products">View product</Link>, {
                position: toast.POSITION.TOP_CENTER
              });
        }
    })
  }

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input 
          {...register("name",{required:"Name is required"})}
          type="text" class="form-control" />
        </div>
        {
          errors.name && <p className="text-danger">{errors.name?.message}</p>
        }

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            class="form-control"
            {...register("description",{required:"Description is required"})}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        {
          errors.description && <p className="text-danger">{errors.description?.message}</p>
        }

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
           Category name
          </label>
          <input 
           {...register("category",{required:"Category name is required"})}
          type="text" class="form-control" />
        </div>

        {
          errors.category && <p className="text-danger">{errors.category?.message}</p>
        }

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
           Image url
          </label>
          <input 
           {...register("img",{required:"Image url is required"})}
          type="text" class="form-control" />
        </div>
        {
          errors.img && <p className="text-danger">{errors.img?.message}</p>
        }
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
           Price
          </label>
          <input 
           {...register("price",{required:"Price is required"})}
          type="number" class="form-control" />
        </div>

        {
          errors.price && <p className="text-danger">{errors.price?.message}</p>
        }

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
           Quantity
          </label>
          <input 
           {...register("quantity",{required:"Quantity is required"})}
          type="number" class="form-control" />
        </div>

        {
          errors.quantity && <p className="text-danger">{errors.quantity?.message}</p>
        }

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
