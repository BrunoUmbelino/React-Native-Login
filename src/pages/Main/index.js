import React from "react";
import { Container, Text, IconWrap } from "./style";
import { LogoutOutlined } from "@ant-design/icons";
import { Icon } from "react-native-elements";

function Main({ navigation }) {
  return (
    <>
      <Container>
        <IconWrap>
          <Icon
            name="logout"
            color="#fff"
            size={35}
            onPress={() => navigation.navigate("Login")}
          />
        </IconWrap>
        <Text>Access released</Text>
      </Container>
    </>
  );
}

export default Main;
