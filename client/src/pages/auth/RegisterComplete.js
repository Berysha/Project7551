import React, {useState, useEffect} from "react";
import {auth} from "../../firebase";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {createOrUpdateUser, currentUser} from "../../functions/auth";




const RegisterComplete = ({history}) => {
        const [email,setEmail] = useState("")
        const [password, setPassword] = useState("")

       // const {user} = useSelector((state) => ({...state}));

        let dispatch = useDispatch()

useEffect(() => {
   setEmail(window.localStorage.getItem("emailForRegistration"))
   //console.log(window.location.href);
   //console.log(window.localStorage.getItem("emailForRegistration"));
}, [history])

const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email || !password){
        toast.error("Email and password is requied");
        return;
    }
    if (password.length < 6){
        toast.error("Pasword must be at least & characters long");
        return;
    }
    try{
            const result = await auth.signInWithEmailLink(email, window.location.href);
            
            
//console.log("RESULT", result);
if(result.user.emailVerified){
        window.localStorage.removeItem("emailForRegistration");
        let user = auth.currentUser
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult()
        console.log("user", user, "idTokenResučlt", idTokenResult);
      
        createOrUpdateUser(idTokenResult.token)
        .then(
          (res) => {
          dispatch({
            type: "LOGGED_IN_USER",
             payload: {
               name: res.data.name,
               email: res.data.email,
               token: idTokenResult.token,
               role: res.data.role,
               _id: res.data._id,
             }
           });
          })
        .catch()

        currentUser(idTokenResult.token)
        .then(
          (res) => {
          dispatch({
            type: "LOGGED_IN_USER",
             payload: {
               name: res.data.name,
               email: res.data.email,
               token: idTokenResult.token,
               role: res.data.role,
               _id: res.data._id,
             }
           });
          })
        .catch(err => console.log(err))
      
        history.push("/")

}
    } catch(error){
        console.log(error);
        toast.error(error.message);
    }

        };


const completeRegistrationForm = () => {
return (
     <form onSubmit={handleSubmit}>
        
            <input 
            type="email" 
            className="form-control"  value={email} disabled />

<input 
            type="password" 
            className="form-control"  value={password} onChange={e => setPassword(e.target.value)} 
            placeholder="Password"
        autoFocus/>
<br/>
<br/>
             <button type="submit" className="btn btn-raised" >
              COMPLETE REGISTRATION
             </button>
    </form>
)
    };
    return (
        <div className="container p-5">
          <div className="row">
             <div className="col-md-6 offset-md-3">
                <h4>Register Complete</h4>
            

                {completeRegistrationForm()}
             </div>
        
           </div>
        </div>
    );
    }
export default RegisterComplete;