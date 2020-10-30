import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background: #000;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
    height: 70px;
    padding: 0 16px;

    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    background: #0f0f0f;
`;

export const TitleHeader = styled.Text`
    color: #fff;
    font-weight: 600;
    font-size: 24px;
`;

export const ConfigurationHeader = styled.Text`
    color: #10c86e;
    font-weight: 600;
    font-size: 20px;
`;

export const Body = styled.View``;

export const Item = styled.View`
    background: #0A0A0A;
    padding: 16px;

    position: relative;

    border-bottom-width: 1px;
    border-bottom-color: #404040;
    border-style: solid;
`;

export const NotificationItem = styled.Text`
    color: #fff;
    font-size: 20px;
    margin-bottom: 17px;
`;

export const DateItem = styled.Text`
    color: #a6a6a6;
    padding: 16px 16px 0;
    position: absolute;
    bottom: 10px;
`;


