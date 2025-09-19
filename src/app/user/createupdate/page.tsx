
"use client"
import { createUser, UpdateUser } from "@/data/http.service";
import { Users } from "@/shared/models/User.model";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";


export default function CreateUpdate(){
    
    const{register,handleSubmit,reset,formState :{errors} }= useForm<Users>();
     const pathname = usePathname();
    const router = useRouter();
    const userData:Users = useSelector((state:any)=>state.User);

    useEffect(()=>{
          if(pathname === '/user/createupdate'){
            reset(userData);
          }
    },[])
    

    const onSubmit =async (userData:Users) => {
      if(pathname === '/user/update'){
          await UpdateUser(userData) ;
          }else if (pathname === '/user/create'){
        await createUser(userData) ;
          }
    }
    return(
        <>
       <section className="min-h-screen flex justify-center items-center bg-purple-200">
                <form onSubmit={handleSubmit(onSubmit)} className="border border-blue-400 rounded-md p-5 m-5 w-[50%]">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">
                                        <TextField {...register('name', {
                                            required: 'Name is required',
                                            minLength: {
                                                value: 5,
                                                message: 'Name should be minimum of 5 characters'
                                            },
                                            maxLength: {
                                                value: 50,
                                                message: 'Name should not exceed 50 characters'
                                            }
                                        })} className="w-full" label="Name" variant="outlined" />
                                        <span className="text-red-500 italic">{errors.name && errors.name.message}</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Email</TableCell>
                                    <TableCell align="right">
                                        <TextField {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: 'Email is invalid'
                                            }
                                        })} className="w-full" label="Email" variant="outlined" />
                                        <span className="text-red-500 italic">{errors.email && errors.email.message}</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Phone</TableCell>
                                    <TableCell align="right">
                                        <TextField {...register('phone', { required: 'Phone is required' })} className="w-full" label="Phone" variant="outlined" />
                                        <span className="text-red-500 italic">{errors.phone && errors.phone.message}</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Website</TableCell>
                                    <TableCell align="right">
                                        <TextField {...register('website')} className="w-full" label="Website" variant="outlined" />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} align="right">
                                        <Button className="mr-5" type="button" variant="outlined" onClick={() => { reset() }}>Reset Form</Button>
                                        <Button type="submit" variant="outlined">{pathname === '/user/createupdate' ? 'Update' : 'Create'} User</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </form>
            </section >
        </>
    )
}



   



