import React from "react";

import { Container, Wrapper, Logo, Text, SignUp, SignIn } from "./styles";

import Logomarca from "../../../images/logo-branca.png";

function Main({navigation}) {
  return (
    <Container>
      <Wrapper>
        <Logo source={Logomarca} />
        <Text>Faça recargas de celular</Text>
        <SignUp>
          <SignIn primary>Criar minha carteira PicPay</SignIn>
        </SignUp>
        <SignIn onPress={() => {navigation.navigate('Logon')}}>Já sou cadastrado</SignIn>
      </Wrapper>
    </Container>
  );
}

export default Main;
