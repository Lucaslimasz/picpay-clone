import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #000;
`;

export const Scroll = styled.ScrollView``;

export const Header = styled.View`
  height: 100px;
  background: #0f0f0f;
  padding: 15px 15px 8px;
  justify-content: space-between;
  flex-direction: column;
`;

export const HeaderSearch = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderOption = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 97%;
  margin: 0 auto;
`;

export const Search = styled.TextInput`
  height: 32px;
  background: #fff;
  font-size: 18px;
  width: 85%;
  border-radius: 20px;
  padding: 0 20px;
`;

export const Options = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const TextOption = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-left: 5px;
`;

// Gambiarra
export const TextOptionSelect = styled.Text`
  color: #10c86e;
  font-size: 20px;
  font-weight: bold;
`;

export const Services = styled.View`
  padding: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const Image = styled.Image``;

export const InformationService = styled.View`
  margin-left: 15px;
  width: 70%;
`;

export const TitleService = styled.Text`
  color: #fff;
  font-size: 19px;
  margin-bottom: 3px;
`;

export const DescriptionService = styled.Text`
  color: #fff;
  opacity: .8;
  font-size: 15px;
`;
