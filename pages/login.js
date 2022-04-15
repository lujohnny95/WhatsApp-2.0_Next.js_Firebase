import styled from "styled-components"
import Head from "next/head"
import { Button } from "@mui/material"
import { auth, provider } from "../firebase"

const Login = () => {

  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
    
  }

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="WhatsApp-logo" />
        <LoginButton onClick={signIn}>Sign in with Google</LoginButton>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;

const LoginButton = styled(Button)`
  background-color: whitesmoke;
  padding: 10px;
  border: 1px solid lightgray;
`;