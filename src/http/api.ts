import useTokenStore from "@/store/store";
import axios from "axios";

console.log("url",import.meta.env.VITE_BASE_URL);

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,  // Accessing the environment variable
    headers:{
        'Content-Type':'application/json'
    }
})

api.interceptors.request.use((config) => {
    const token = useTokenStore.getState().token;
    console.log("mytoken",token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export const login = async(data:{email:string;password:string}) => {
    return api.post('/api/users/login',data);
}

export const register = async(data:{name:string,email:string,password:string})=>{
    return api.post('/api/users/register',data);
}


export const getBooks = async()=>{
    return api.get('/api/books');
}

export const createBook = async (data: FormData) => {
    try {
        return await api.post('/api/books', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    } catch (error) {
        console.error("Error in createBook:", error);
        throw error; // Rethrow the error to propagate it up if needed
    }
};
