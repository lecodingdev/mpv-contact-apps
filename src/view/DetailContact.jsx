import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CardContact from "../components/CardContact";
import detailContact from "../redux/action/getDetailContact";

function DetailContact() {
  const dispatch = useDispatch();
  const params = useParams();

  const contact = useSelector((state) => state.contactReducer.detailContact);

  useEffect(() => {
    dispatch(detailContact(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="container">
      <div className="row">
        <CardContact contact={contact} fromDetail={true} />
      </div>
    </div>
  );
}

export default DetailContact;
