import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getAllContact from "../redux/action/getAllContact";
import CardContact from "../components/CardContact";
import Loading from "../components/Loading";

function CategoryContact() {
  const dispatch = useDispatch();
  const params = useParams();

  const loading = useSelector(state => state.loadingReducer.loading);
  const contacts = useSelector(state => state.contactReducer.allContact);
  const categoryContact = useSelector(state => state.contactReducer.categoryContact);

  useEffect(() => {
    dispatch(getAllContact());
  }, [dispatch]);

  useEffect(() => {
    const regex = new RegExp(params.category, "i");
    const myContact = contacts.filter(contact=>{
      return regex.test(contact.category)
    });
    dispatch({type:'CATEGORY_CONTACT', payload:myContact});
  }, [contacts, dispatch, params.category])

  return (
    <div className="container mt-3">
        {
          loading ? 
            <Loading />
          : 
          categoryContact.length === 0 ?
          <div className="text-center m-4 p-2 border border-white rounded">
          <span className="text-white">Data Not Found</span></div>
          :
            categoryContact.map((contact) => {
              return(
                <div key={contact.id} className="col-md-3 p-1">
                  <CardContact contact={contact}/>
                </div>
              )
            })
        }
      </div>
  );
}

export default CategoryContact;
