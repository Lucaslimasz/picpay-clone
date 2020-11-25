import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #5CC37A;
`;

export const Wrapper = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image``;

export const Text = styled.Text`
  margin: 30px 0;
  font-size: 19px;
`;

export const SignUp = styled.TouchableOpacity`
  border: 2px solid #fff;
  border-radius: 50px;
  margin-bottom: 30px;
  background: #fff;
`;

export const SignIn = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.primary ? '#000' : '#fff'};
  padding: ${props => props.primary ? '20px 30px' : '0px'};
`;
