import React from "react";
import { Container, Text, IconWrap } from "./style";
import { LogoutOutlined } from "@ant-design/icons";
import { Icon } from "react-native-elements";
import { Image } from "react-native";

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
        <Text>Access Released</Text>
        <Image
          source={require("../../../assets/unlock.png")}
          style={{ width: 200, height: 200 }}
        />
      </Container>
    </>
  );
}

export default Main;
