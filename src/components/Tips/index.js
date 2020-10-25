import React from "react";

import { Container, Option, Title, Image } from "./styles";

import img8 from "../../images/08.png";
import img9 from "../../images/09.png";
import img10 from "../../images/10.png";
import img11 from "../../images/11.png";
import img12 from "../../images/12.png";

const Items = [
  {
    key: String(Math.random()),
    img: img8,
    label: "Pague suas contas sem sair de casa",
    bgColor: "#172c4a",
  },
  {
    key: String(Math.random()),
    img: img9,
    label: "Pague suas contas sem sair de casa",
    bgColor: "#6a0159",
  },
  {
    key: String(Math.random()),
    img: img10,
    label: "Pague suas contas sem sair de casa",
    bgColor: "#4139c8",
  },
  {
    key: String(Math.random()),
    img: img11,
    label: "Pague suas contas sem sair de casa",
    bgColor: "#00ab4b",
  },
  {
    key: String(Math.random()),
    img: img12,
    label: "Pague suas contas sem sair de casa",
    bgColor: "#ba2f76",
  },
];

export default function Tips() {
  return (
    <Container>
      {Items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.label}</Title>
          <Image source={item.img} />
        </Option>
      ))}
    </Container>
  );
}
