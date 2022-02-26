import React from 'react';
import styled from "styled-components";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase';
function Header() {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar onClick={() => auth.signOut()} alt={user?.displayName} src={user?.photoURL} />
        <h5>-Logout</h5>
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;

const HeaderSearch = styled.div`
flex:0.4;
opacity: 1;
border-radius:6px;
background-color: #2c2f33;
text-align: center;
display:flex;
padding:0 50px;
color: gray;
border: 1px gray solid;
> input{
  background-color: transparent;
  border: none;
  text-align: center;
  min-width: 30vw;
  outline: 0;
  color: white;
}
`;
const HeaderContainer = styled.div`
display:flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: #23272a;
color: white;
`;
const HeaderRight = styled.div`
flex: 0.3;
display: flex;
align-items: flex-end;
> .MuiSvgIcon-root{
  margin-left: auto;
  margin-right: 20px;
}
`;
const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left: 20px;
>h5{
  color: gray;
  margin-left: 10px;
}
> .MuiSvgIcon-root{
  margin-left: auto;
  margin-right: 30px;
}
`;

const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover{
opacity: 0.8;
}
`;