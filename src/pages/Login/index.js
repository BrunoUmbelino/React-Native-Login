import axios from "axios";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { URL_API } from "@env";

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
  console.log(URL_API);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setshowError] = useState("");

  function clearData() {
    setEmail("");
    setPassword("");
    setshowError("");
  }

  async function auth(email, password) {
    try {
      const response = await axios({
        method: "post",
        url: `${URL_API}`,
        data: {
          email: email,
          password: password,
        },
      });

      if (response.data.token !== null) {
        navigation.navigate("Main");
        clearData();
      }
    } catch (err) {
      setshowError("username or password is invalid");
      console.log(err);
    }
  }

  return (
    <>
      <KeyboradView>
        <Container>
          <StatusBar style="light" />
          <Title>Login</Title>
          <Error>{showError}</Error>
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
              auth(email, password);
            }}
          >
            <TextSubmit>Enter</TextSubmit>
          </ButtonSubmit>
        </Container>
      </KeyboradView>
    </>
  );
}

export default Login;
