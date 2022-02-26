import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from 'react-redux';
import { selectRoomId } from './features/appSlice';
import ChatInput from './ChatInput';
import { db } from './firebase';
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import Message from './Message';

function Chat() {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);//call room id from store(redux)
    const [roomContent] = useDocument(roomId && db.collection("rooms").doc(roomId));
    const [roomMessages, loading] = useCollection(roomId && db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc"));
 
    return (
        <Chatcontainer>
            {roomContent && roomMessages &&(
                <>
                <Header>
                    <HeaderLeft>
                        <h4>
                            <strong>#{roomContent?.data().name}</strong>
                        </h4>
                        <StarBorderOutlinedIcon />
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoOutlinedIcon />INFO
                        </p>
                    </HeaderRight>
                </Header>
                <ChatMessages>
                    {roomMessages?.docs.map((doc) => {
                        const { message, timestamp, user, userImage } = doc.data();
                        return (
                            <Message
                                key={doc.id}
                                message={message}
                                timestamp={timestamp}
                                user={user}
                                userImage={userImage}
                            />
                        );
                    })}
                    <ChatBottom ref={chatRef} />
                </ChatMessages>
                <ChatInput chatRef={chatRef} channelName={roomContent?.data().name} channelId={roomId} />
            </>
            )}
        </Chatcontainer>
    )
}

export default Chat;
const ChatBottom = styled.div`
padding-bottom:200px;
`;
const Chatcontainer = styled.div`
background-color:#2c2f33;
flex:0.7;
flex-grow: 1;
overflow-y: scroll;
margin-top: 60px;
color: #ffffff;
`;
const Header = styled.div`
display:flex;
justify-content:space-between;
padding:20px;
border-bottom: 1px solid lightgray
`;
const HeaderLeft = styled.div`
display:flex ;  
align-items:center;

>h4{
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
    color:white;
}
>h4>.MuiSvgIcon-root{
    margin-left:10px;
    font-size:18px;
    color:white;
}`;
const HeaderRight = styled.div`
>p{
    display: flex;
    align-items: center;
     font-size:14px;
     color:white;
}
>p >.MuiSvgIcon-root{
    margin-right:5px !important;
    font-size:16px;
    color:white;
}`;

const ChatMessages = styled.div``;