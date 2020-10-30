import React from "react";

import {
  Container,
  Header,
  TitleHeader,
  ConfigurationHeader,
  Wrapper,
  Body,
  Item,
  NotificationItem,
  DateItem,
} from "./styles";

const ItemNotifications = [
  {
    id: String(Math.random()),
    title:
      "LEMBRETE: No próximo pagamento de boleto hoje com PicPay você ganha 10% de volta!",
    date: "Ontem às 19:05",
  },
  {
    id: String(Math.random()),
    title:
      "Agora você vai ganhar 10% de volta pagando amigos no saldo e cartão. Aproveita.",
    date: "29 de ou às 20:02",
  },
  {
    id: String(Math.random()),
    title:
      "Não deixe seu amigo na mão! Ganhe 10% de volta fazendo seu próximo pagamento à um amigo com PicPay. Toque para saber mais.",
    date: "25 de ou às 11:02",
  },
  {
    id: String(Math.random()),
    title:
      "Sabe tudo sobre o PicPay? Então preparamos uma mensagem para te contar. Toque para saber mais",
    date: "22 de ou às 11:02",
  },
  {
    id: String(Math.random()),
    title:
      "Não deixe seu amigo na mão! Ganhe 10% de volta fazendo seu próximo pagamento à um amigo com PicPay. Toque para saber mais.",
    date: "25 de ou às 11:02",
  },
  {
    id: String(Math.random()),
    title:
      "Sabe tudo sobre o PicPay? Então preparamos uma mensagem para te contar. Toque para saber mais",
    date: "22 de ou às 11:02",
  },
];

export default function Notifications() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <TitleHeader>Notificações</TitleHeader>
          <ConfigurationHeader>Configurar</ConfigurationHeader>
        </Header>

        <Body>
          {ItemNotifications.map((item) => (
            <Item key={item.id}>
              <NotificationItem>{item.title}</NotificationItem>
              <DateItem>{item.date}</DateItem>
            </Item>
          ))}
        </Body>
      </Container>
    </Wrapper>
  );
}
