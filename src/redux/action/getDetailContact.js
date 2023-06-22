import axios from "axios";
import Swal from "sweetalert2";

const detailContact = (id) => {
    return function(dispatch) {
        axios ({
            url: `http://localhost:3000/contacts/${id}`,
            method: "Get"
        })
        .then(({data}) => {
            dispatch({type: "DETAIL_CONTACT", payload:data})
        }).catch((err) => {
            Swal.fire ({
                position: 'top-end',
                icon: 'error',
                showConfirmButton: false,
                timer: 2000,
                title: `${err.message} - ${err.status}`
            })
        });
    }
}

export default detailContact;