import React, { useEffect, useState } from 'react'
import "./useEffect.css"

const UseEffectapi = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async ()=>{
      const response = await fetch('https://api.github.com/users');
      setUsers(await response.json());
  }


  useEffect(()=> {
      getUsers();
  }, []);


  return (
    <>
        <h1>List of github Users </h1>
        <div className="container-fluid mt-5">
          <div className="row text-center">

          {


            users.map((curElement)=> {
              return(
                <div className="col-10 col-md-4 mt-5">
                 <div className="card p-2">
                 <div className="d-flex align-items-center">
                  <div className="image">  <img src={curElement.avatar_url} alt="" /> </div>
                  <div className="ml-3 w-100">
                    <h4 className='mb-0 mt-0 textleft'>{curElement.login}</h4> <span className='textLeft'>{curElement.id}</span>
                    <div className="p-2 mt-2 bg-secondary d-flex justify-content-between rounded text-white stats">
                      <div className="d-flex flex-column"> <span className='articles'> Articles </span> <span className='number1'>38</span>    </div>
                      <div className="d-flex flex-column"> <span className='followers'> Followers </span> <span className='number2'>980</span> </div>
                      <div className="d-flex flex-column"> <span className='ratings'> Ratings </span> <span className='number3'>8.9</span>     </div>
                    </div>
                  </div>
                  </div>
                 </div>
                </div>
              )
            })
          }


          </div>
        </div>
    </>
  )
}

export default UseEffectapi