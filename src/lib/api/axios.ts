import axios from "axios";

const Crud_Api = axios.create({
    baseURL: "https://crudcrud.com/api/eb2b9fa1dbdd436cbc7903c20012d83c"
});

export default Crud_Api;