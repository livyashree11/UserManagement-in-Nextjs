"use client";
import { Users } from "@/shared/models/User.model";
import { useSelector } from "react-redux";

export default function View(){
    const View = () => {

    const userData:Users = useSelector((state:any)=>state.User);
    console.log(userData);
    return(
        <>
        <section className="flex flex-row justify-items-center">
        <div className="w -[50%]  flex flex-col border border-blue-400 p-5 m-5">
        <span>Name:{userData.name}</span>
        <span>Email:{userData.email}</span>
        <span>Phone:{userData.phone}</span>
        <span>Website:{userData.website}</span>
        </div>
        </section>  
        </>
    )
  }
}