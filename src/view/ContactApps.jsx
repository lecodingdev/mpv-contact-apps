import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getAllContact from "../redux/action/getAllContact";
import CardContact from "../components/CardContact";
import Loading from "../components/Loading";

function ContactApps() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loadingReducer.loading);
  const contacts = useSelector((state) => state.contactReducer.allContact);

  useEffect(() => {
    dispatch(getAllContact());
  }, [dispatch]);

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          {
            loading ?
            <Loading />
            :
            contacts.length === 0 ?
            <div className="text-center m-4 p-2">Data Not Found</div>
            :
            contacts.map((contact)=>{
              return(
                <div key={contact.id} className="col-md-3 p-1">
                  <CardContact contact={contact} />
                </div>

              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default ContactApps;
