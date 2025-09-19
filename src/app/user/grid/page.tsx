"use client";

import { deleteUser, getUsers } from "@/data/http.service";
import { Users } from "@/shared/models/User.model";
import { setUserData } from "@/shared/slicers/UserSlice";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";




export default function Grid(){
     const router = useRouter();
    const dispatch = useDispatch();
  

    const {data} =useQuery(
        {
            queryKey:['users'],
            queryFn:getUsers,
            retry:3,
            refetchInterval:600000,
            staleTime:600000
        }   
);


     const onViewClick = (user:Users)=>{
      dispatch(setUserData(user))
      router.push('/user/view');
     }

       const onDeleteClick = async (user:Users)=>{
        await deleteUser(user.id);
     }

       const onUpdateClick = (user:Users)=>{
        dispatch(setUserData(user))
          router.push('/user/createupdate');
       }
    return(
        <>
        <section className="min-h-screen flex flex-col justify-center items-start p-10 bg-purple-200">
            <Button variant = "outlined" onClick={()=>router.push('/create')} >Create User</Button>
         <TableContainer component={Paper} className="border border-blue-400 rounded-md p-5 m-5 w-[90%]">
            <Table>
                <TableHead>
                <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                       data && data.map((userData:Users,index:number) =>{
                        return(
                            <TableRow key={index}>
                                <TableCell align ="center">{userData.name}</TableCell>
                                <TableCell align ="center">{userData.email}</TableCell>
                                <TableCell align ="center">{userData.phone}</TableCell>
                                <TableCell align ="center">{userData.website}</TableCell>
                                 <TableCell className = "flex flex-row justify-items-center gap-5 ">
                    <Button variant="outlined" onClick={()=>onUpdateClick(userData)}>UPDATE</Button>
                    <Button variant="outlined" onClick={()=>onDeleteClick(userData)}>DELETE</Button>
                    <Button variant="outlined" onClick={()=>onViewClick(userData)}>VIEW</Button>
                </TableCell>
                </TableRow>)
})
}

                </TableBody>
            </Table>
         </TableContainer>
         </section>
        </>
    )

 }

