import { Users } from '@/shared/models/User.model';
import axios from 'axios';


export const getUsers = async()=>{
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    return users.data;
}

export const createUser = async(user:Users)=>{
    const body ={
        name:user.name,
        email:user.email,
        phone:user.phone,
        website:user.website
    }
    await axios.post(`https://jsonplaceholder.typicode.com/users/create`,body);
    
}
export const UpdateUser = async(user:Users)=>{
     const body ={
        name:user.name,
        email:user.email,
        phone:user.phone,
        website:user.website
    }
    await axios.put(`https://jsonplaceholder.typicode.com/users/update/${user.id}`,body);
    
}

export const deleteUser = async(userId:number)=>{
   return await axios.delete(`https://jsonplaceholder.typicode.com/users/delete/${userId}`);
    
}