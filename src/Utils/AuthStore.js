import { create } from "zustand";
import FirebaseAuth from "./auth";

const {signIn,signOut,getCurrentUser}=FirebaseAuth
const useAuth = create((set,get)=>({
    currentUser:null,
    logIn: () =>{
        signIn().then((user)=>{
            set(() => ({
                currentUser:user
              }))
              console.log('the userrr')
        })
   },
    logOut:() =>
        signOut().then(()=>
            set(() => ({
                currentUser:null
              }))
        )
   ,
   getUser:()=> {
    getCurrentUser().then((user)=>{
        set(() => ({
            currentUser:user
          }))
    })
   }
}))

export default useAuth;