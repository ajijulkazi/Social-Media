import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import { Formik } from "formik";
import * as yup from "yup";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Dropzone from "react-dropzone";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const Form = () => {
    const [user, setUser] = useState({});
    const { userId } = useParams();
    const token = useSelector((state) => state.token);
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
    const { palette } = useTheme();
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const updateInfo = async(e) => {
        e.preventDefault();
        console.log(user);
      
        const savedUpdateResponse = await fetch(`http://localhost:5000/users/${userId}`,{
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(user),
            
        });
        const savedUpdateInfo = await savedUpdateResponse.json();
            console.log(savedUpdateInfo);
            if(savedUpdateInfo){
                navigate(`/profile/${userId}`);
            }
       
    }


    const handleFormSubmit = e => {
        const value= e.target.value;
        const field= e.target.name;
        const newUser = {...user};
        newUser[field]=value;
        setUser(newUser);

    };
    
     return(
       
                <form onSubmit={updateInfo}>

                <TextField label="New firstName" onBlur={handleFormSubmit}  name="firstName"/> <br/>
                                       
                                        
                {/* <input onBlur={handleFormSubmit} type="text" name="firstName" placeholder="new firstName" required/> <br/> */}
                <TextField label="New lastName" onBlur={handleFormSubmit}  name="lastName" /> <br/>
                <TextField label="New location" onBlur={handleFormSubmit}  name="location" /> <br/>
                <TextField label="New occupation" onBlur={handleFormSubmit}  name="occupation" /> <br/>
                <button type="submit" >save</button>
                           
            </form>
          
     );
}

export default Form;
