import React, { useContext, useState } from "react";
import { StatusBar } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

import {
  ButtonSubmit,
  Container,
  Input,
  KeyboradView,
  Title,
  TextSubmit,
  Error,
} from "./style";

function Login({ navigation }) {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <KeyboradView>
        <Container>
          <StatusBar style="light" />
          <Title>Login</Title>
          <Error>Erro</Error>
          <Input
            placeholderTextColor="#fff"
            placeholder="E-mail"
            keyboardType={"email-address"}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholderTextColor="#fff"
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <ButtonSubmit
            onPress={() => {
              login();
            }}
          >
            <TextSubmit>Entrar</TextSubmit>
          </ButtonSubmit>
        </Container>
      </KeyboradView>
    </>
  );
}

export default Login;
