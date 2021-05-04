import styled from "styled-components/native";

export const KeyboradView = styled.KeyboardAvoidingView`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #181818;
  flex: 1;
`;

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  border: 2px solid #fff;
  margin-bottom: 20px;
  padding: 15px 20px;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  width: 80%;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  align-items: center;
  font-weight: bold;
  background-color: #643cdb;
  border-radius: 8px;
  width: 80%;
  padding: 15px 20px;
`;

export const TextSubmit = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Error = styled.Text`
  color: #e62b2b;
  font-size: 20px;
  margin-bottom: 10px;
  display: none;
`;
