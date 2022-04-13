import { Chat, MoreVert, Search } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { Container, Header, IconsContainer, SearchContainer, UserAvatar } from "./Sidebar.styles"

const Sidebar = () => {
  return (
    <Container>
        <Header>
            <UserAvatar />
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

        {/* chat section*/}
    </Container>
  )
}

export default Sidebar