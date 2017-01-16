import React from 'react';


export default function ( { handleChange, handleSubmit, firstName, lastName, email, password }) {
  return (
         <form className="form-horizontal" onSubmit={handleSubmit}>
            <fieldset>
              <legend>New User</legend>
              <div className="form-group">
                <label className="col-xs-2 control-label">First Name</label>
                <div className="col-xs-10">
                  <input className="form-control" name="firstName" type="text" onChange={handleChange} value={firstName}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Last Name</label>
                <div className="col-xs-10">
                  <input className="form-control" name="lastName" type="text" onChange={handleChange} value={lastName}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Email</label>
                <div className="col-xs-10">
                  <input className="form-control" name="email"type="text" onChange={handleChange} value={email}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Password</label>
                <div className="col-xs-10">
                  <input className="form-control" name="password" type="text" onChange={handleChange} value={password}/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                  <button type="submit" className="btn btn-success">Add User</button>
                </div>
              </div>

            </fieldset>
          </form>
          );
}

