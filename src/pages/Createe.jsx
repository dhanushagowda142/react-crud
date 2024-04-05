import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import UserApi from '../API/UserApi'

function Createe() {
    const [user,setUser] = useState({
        name:"",
        email:"",
        mobile:""
    })

    const navigate=useNavigate()

    const readInput=(e)=>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }

    const submitHandler = async(e) =>{
        e.preventDefault()
        try{
            console.log(`new user=`,user)
            await UserApi.createUser(user)
            .then(res =>{
                toast.success(res.data.msg)
                navigate('/')
            }).catch(err =>{
                toast.error(err.response.data.msg)
            })
        }catch(err){
            toast.error(err.massage)
        }
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-dark">Create user</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete='off' onSubmit={submitHandler}>
                            <div className="form-group mt-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name' id='name' value={user.name} onChange={readInput} required className="form-control" />
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' id='email' value={user.email} onChange={readInput} required className="form-control" />
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="number" name='mobile' id='mobile' value={user.mobile} onChange={readInput} required className="form-control" />
                            </div>

                            <div className="form-group mt-2">
                                <input type="submit" value="Create User" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Createe