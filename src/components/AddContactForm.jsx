import React from "react";

export default function AddContact() {
  return (
    <>
      <button
        className="btn btn-dark"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#formAddContact"
      >
        Add Contact
      </button>
      <div
        className="modal fade"
        id="formAddContact"
        tabIndex="-1"
        aria-labelledby="formAddContactLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Form Add Contact</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control mt-1" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control mt-1" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="Number" className="form-control mt-1" />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select name="category" className="form-control mt-1">
                    <option value="family">Family</option>
                    <option value="friend">Friend</option>
                    <option value="work">Work</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-danger">Cancel</button>
                <button className="btn btn-secondary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
