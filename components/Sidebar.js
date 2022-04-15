import { Chat, MoreVert, Search } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import * as EmailValidator from "email-validator"
import { Container, Header, IconsContainer, SearchContainer, UserAvatar, SidebarButton } from "./Sidebar.styles"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { auth, db } from "../firebase"
import Chat from "./Chat"

const Sidebar = () => {
    const [user] = useAuthState(auth);
    const userChatRef = db.collection("chats").where("users", "array-contains", user.email);
    const [chatSnapshot] = useCollection(userChatRef);

    const createChat = () => {
        const input = prompt("Please enter an email address for the user you wish to chat with");

        if (!input) return null;

        if (EmailValidator.validate(input) && !chatAlreadyExists(input) && input !== user.email) {
            db.collection("chats").add({
                users: [user.email, input]
            });
        }
    };

    const chatAlreadyExists = (recipientEmail) => {
        chatsSnapshot?.docs.find(chat => 
            chat.data().users.find((user) => user === recipientEmail)?.length > 0);
    };

    return (
        <Container>
            <Header>
                <UserAvatar onClick={() => auth.signOut()} />
                <IconsContainer>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </IconsContainer>
            </Header>

            <SearchContainer>
                <Search />
            </SearchContainer>

            <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>
            
            {/*user list*/}
            {chatsSnapshot?.docs.map((chat) => {
                <Chat key={chat.id} id={chat.id} user={chat.data().users} />
            })}

        </Container>
    )
}

export default Sidebar