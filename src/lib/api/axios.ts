import axios from "axios";

const Crud_Api = axios.create({
    baseURL: "https://crudcrud.com/api/c479066c2d854f47a49f17392a0f1a6d"
});

export default Crud_Api;