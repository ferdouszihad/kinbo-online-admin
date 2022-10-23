import React,{useState,useEffect} from "react";

const Users = () => {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    const url = `http://localhost:8000/api/user`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])

  return (
    <div>
        {console.log(users.length)}
    <table class="table caption-top">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user,index) => 
                <tr>
                  <td>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr> )
          }
        
        </tbody>
      </table>
    </div>
  );
};

export default Users;
