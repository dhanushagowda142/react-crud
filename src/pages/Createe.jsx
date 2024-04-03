import React from 'react'

function Createe() {
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
                        <form autoComplete='off'>
                            <div className="form-group mt-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name' id='name' required className="form-control" />
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' id='email' required className="form-control" />
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="number" name='mobile' id='mobile' required className="form-control" />
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