// import { useEffect, useState } from "react";
// import {
//     Box,
//     Button,
//     TextField,
//     useMediaQuery,
//     Typography,
//     useTheme
// } from "@mui/material";

// import { Navigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Formik } from "formik";

const ProfileUpdate = () => {
    // const [user, setUser] = useState(null);
    // const [pageType, setPageType] = useState("login");
    // const { userId } = useParams();
    // const isLogin = pageType === "login";
    // const token = useSelector((state) => state.token);
    // const [redirect, setRedirect] = useState(false);
    // const isNonMobileScreens = useMediaQuery("(min-width:600px)"); 

    // const getUser = async () => {
    //     const response = await fetch(`http://localhost:5000/users/${userId}`,{
    //         method: "PATCH",
    //         headers: { Authorization: `Bearer ${token}`}
    //     });
    //     // const data = await response.json();
    //     // setUser(data.user);
    //     if(response.ok){
    //         setRedirect(true);
    //     }

    // }
    // if(redirect){
    //     return <Navigate to={`/users/${userId}`} />
    // }


    // if(!user) return null;
     return(
        <Formik>
            <h1>hello</h1>
        </Formik>
        
     );
}

export default ProfileUpdate;

