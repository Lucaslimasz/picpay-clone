import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #000;
`;

export const Topo = styled.View`
  width: 100%;
  height: 60px;

  flex-direction: row;
  align-items: center;
  padding: 15px;

`;

export const ButtonBack = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Icon = styled.Image``;

export const TextBack = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 600;
`;

export const Body = styled.View`
  padding: 15px;
  margin-top: 100px;
`;

export const Input = styled.TextInput`
  background: #2F3134;
  color: #fff;
  font-size: 22px;
  padding: 20px 30px;
  margin: 10px 0;
  border-radius: 50px;
`;

export const ButtonLogar = styled.TouchableOpacity`
  padding: 20px;
  background: #13ce7d;
  padding: 17px 30px;
  margin: 30px 0;
  border-radius: 50px;
`;

export const TextLogar = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
`;

