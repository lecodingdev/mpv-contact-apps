import axios from "axios";
import Swal from "sweetalert2";
import getAllContact from "./getAllContact";

const updateContact = ({user}, id) => {
    return function(dispatch) {
        axios ({
            url: `http://localhost:3000/contacts/${id}`,
            method: "Put",
            data: {
                name : user.name,
                email : user.email,
                phonenumber : user.phone,
                category : user.category
            }
        })
        .then((data) => {
            Swal.fire ({
                position: "top-end",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
                title: `Success Update Contact ${data.name}`
            })
            dispatch(getAllContact())
        }).catch((err) => {
            Swal.fire ({
                position: "top-end",
                icon: "err",
                showConfirmButton: false,
                timer: 2000,
                title: `${err.message} - ${err.status}`
            })
        });
    }
}

export default updateContact