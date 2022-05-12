

import React, { useState, useEffect } from "react";
import './Users.css';

// Components
import Header from "./Header";
import Loading from "./Loading";
import Template from "./Template";

const Users = () => {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
  }, [])

  return (
    <Template title='Users'>
      <Loading visible={ isLoading } />
      {
        users.map(user => {
          return (
            <div className="users">
              <b>Id: </b> { user.id }<br />
              <b>Name: </b> { user.name }<br />
              <b>E-mail: </b> { user.email }<br />
              <b>Phone: </b> { user.phone }<br />
              <b>Username: </b> { user.username }<br />
              <b>Address: </b> 
                { user.address['suite'] },
                { user.address['street'] } - 
                { user.address['city']} -
                { user.address['zipcode'] }
              <br />
            </div>
          )
        })
      }
    </Template>
  )
}

export default Users;