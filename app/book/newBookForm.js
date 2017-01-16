import React from 'react';

export default function({ handleChange, handleSubmit, title, author, price, description, stockCount, imageUrl, genre}) {

    return (
         <form className="form-horizontal" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Add a New Book</legend>

              <div className="form-group">
                <label className="col-xs-2 control-label">Title</label>
                <div className="col-xs-10">
                  <input className="form-control" name="title" type="text" onChange={handleChange}/></div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Author</label>
                <div className="col-xs-10">
                  <input className="form-control" name="author"  type="text" onChange={handleChange}/></div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Description</label>
                <div className="col-xs-10">
                  <input className="form-control" name="description"  type="text" onChange={handleChange}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Image URL</label>
                <div className="col-xs-10">
                  <input className="form-control" name="imageUrl"  type="text" onChange={handleChange}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Genres (comma delimited, such as 'fantasy, mystery')</label>
                <div className="col-xs-10">
                  <input className="form-control" name="genres"  type="text" onChange={handleChange}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Price</label>
                <div className="col-xs-10">
                  <input className="form-control" name="price" type="number" onChange={handleChange}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Stock Count</label>
                <div className="col-xs-10">
                  <input className="form-control" name="stockCount"  type="number" onChange={handleChange}/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                  <button type="submit" className="btn btn-success">Add Book</button>
                </div>
              </div>

            </fieldset>
          </form>
          );
}
