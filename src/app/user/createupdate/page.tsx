import { createUser, UpdateUser } from "@/data/http.service";
import { Users } from "@/shared/models/User.model";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";


export default function CreateUpdate(){
    const CreateUpdate = () =>{
    const{register,handleSubmit,reset,formState :{errors} }= useForm<Users>();

    const router = useRouter();
    const userData:Users = useSelector((state:any)=>state.User);

    useEffect(()=>{
          if(router.pathname === '/update'){
            reset(userData);
          }
    },[])
    

    const onSubmit =async (userData:Users) => {
      if(router.pathname === '/update'){
          await UpdateUser(userData) ;
          }else{
        await createUser(userData) ;
          }
    }
    return(
        <>
        <span>CreateUpdate</span>
        </>
    )
}
}


   



