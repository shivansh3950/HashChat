import React from 'react';
import styled from "styled-components";
import { Button } from '@mui/material';
import { auth,provider } from './firebase';
function Login() {
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    }
    return <LogContainer>
        <InnerContainer>
            <img src="https://icon-library.com/images/chat-app-icon/chat-app-icon-0.jpg" alt="" />
            <h1>Sign in to HashChat</h1>
            <Button  onClick={signIn}>
                Sign in with Google
            </Button>
        </InnerContainer>

    </LogContainer>
}

export default Login;

const LogContainer = styled.div`
background-color:#2c2f33;
height:100vh;
display: grid;
place-items: center;
`;
const InnerContainer = styled.div`
padding: 80px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
>img{
    object-fit: contain;
    height: 150px;
    margin-bottom: 40px;
}

>button{
    margin-top: 20px;
    text-transform:inherit !important;
    background-color: #0a8d48 !important;
    color: white;
}`;
