import React from "react";

import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  Topo,
  ButtonBack,
  TextBack,
  TextTopo,
  Body,
  Input,
  ButtonLogar,
  TextLogar,
} from "./styles";

function Logon({navigation}) {
  return (
    <Container>
      <Topo>
        <ButtonBack>
          <MaterialIcons name="arrow-back" size={25} color="#fff" />
          <TextBack onPress={() => {navigation.navigate('Main')}}>Voltar</TextBack>
        </ButtonBack>
      </Topo>

      <Body>
        <Input placeholder="Email, nome de usuário ou telefone" placeholderTextColor="#585A5C"/>
        <Input placeholder="Senha" placeholderTextColor="#585A5C"/>
        <ButtonLogar onPress={() => {navigation.navigate('Logged')}}>
          <TextLogar>Entrar</TextLogar>
        </ButtonLogar>
      </Body>
    </Container>
  );
}

export default Logon;
