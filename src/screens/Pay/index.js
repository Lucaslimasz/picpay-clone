import React, { useState } from "react";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import {
  Container,
  Header,
  HeaderSearch,
  HeaderOption,
  Search,
  Options,
  TextOption,
  TextOptionSelect,
  Item,
  Services,
  Image,
  Title,
  InformationService,
  TitleService,
  DescriptionService,
  Scroll,
} from "./styles";

// import People from '../../images/people.png';
import People from "../../images/people.png";
import Maquineta from "../../images/maquineta.png";
import Barras from "../../images/06.png";
import Recarga from "../../images/01.png";
import Money from "../../images/money.png";

const items = [
  {
    key: String(Math.random()),
    image: People,
    title: "Pagar Pessoas",
    description: "Pague todos os seus amigos que também estão no PicPay.",
  },
  {
    key: String(Math.random()),
    image: Maquineta,
    title: "Pagar nas Maquininhas",
    description: "Pague em Máquinas Cielo, Getnet e Rede. Escaneando o QR code da máquina",
  },
  {
    key: String(Math.random()),
    image: Barras,
    title: "Pagar Conta",
    description: "Pague sua conta de luz, água, boletos bancários etc.",
  },
  {
    key: String(Math.random()),
    image: Money,
    title: "Cobrar",
    description: "Cobrar um amigo.",
  },
  {
    key: String(Math.random()),
    image: Recarga,
    title: "Recarga de Celular",
    description: "Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios",
  },
];

export default function Pay() {
  return (
    <Container>
      <Scroll>
      <Header>
        <HeaderSearch>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={32}
            color="#10c86e"
          />

          <Search placeholder="A quem você deseja pagar ?" />
        </HeaderSearch>
        <HeaderOption>
          <Options>
            <TextOptionSelect>Principais</TextOptionSelect>
          </Options>

          <Options>
            <Entypo name="location-pin" size={27} color="#fff" />
            <TextOption>Locais</TextOption>
          </Options>

          <Options>
            <MaterialCommunityIcons name="store" size={27} color="#fff" />
            <TextOption>Store</TextOption>
          </Options>
        </HeaderOption>
      </Header>

      <Services>
        <Title>Serviços</Title>
        {items.map((item) => (
          <Item key={item.key}>
            <Image source={item.image} />
            <InformationService>
              <TitleService>{item.title}</TitleService>
              <DescriptionService>{item.description}</DescriptionService>
            </InformationService>
            <MaterialCommunityIcons
              name="dots-vertical"
              color="#fff"
              size={30}
            />
          </Item>
        ))}
      </Services>
      </Scroll>
    </Container>
  );
}
