import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const buttons = [
  {
    title: "Primary",
    btnKind: "rounded",
    variant: "primary",
    size: "md",
    iconName: "check",
  },
  {
    title: "Secondary",
    btnKind: "outlined",
    variant: "secondary",
    size: "lg",
    iconName: "star",
  },
  {
    title: "Danger",
    btnKind: "default",
    variant: "danger",
    size: "sm",
    iconName: "exclamation",
  },
  {
    title: "Success",
    btnKind: "default",
    variant: "success",
    size: "md",
    iconName: "thumbs-up",
  },
  {
    title: "Warning",
    btnKind: "default",
    variant: "warning",
    size: "md",
    iconName: "warning",
  },
  {
    title: "Info",
    btnKind: "default",
    variant: "info",
    size: "md",
    iconName: "info-circle",
  },
  {
    title: "Login with Facebook",
    btnKind: "default",
    variant: "facebook",
    size: "md",
    iconName: "facebook",
  },
];

const Button = () => {
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <CustomButton
          key={index}
          title={button.title}
          btnKind={button.btnKind}
          variant={button.variant}
          size={button.size}
          iconName={button.iconName}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default Button;
