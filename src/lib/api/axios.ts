import axios from "axios";

const Crud_Api = axios.create({
    baseURL: "https://crudcrud.com/api/4413c43537024356b08a107087d926d2"
});

export default Crud_Api;