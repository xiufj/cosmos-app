import styled from "styled-components";
import { MouseEventHandler } from "react";

export type ButtonProps = {
  type?: "default" | "primary" | "text";
  text?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
const BaseButton = styled.button`
  padding: 4px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: opacity 0.3s ease; /* 添加过渡效果 */
  &:hover {
    opacity: 0.8;
  }
`;

const PrimaryButton = styled(BaseButton)`
  width: 100%;
  background-color: #2c3137;
  color: #fff;
  padding: 18px 16px;
`;
const TextButton = styled(BaseButton)`
  width: 100%;
  background-color: transparent;
  color: #2c3137;
  padding: 18px 16px;
`;
const DefaultButton = styled(BaseButton)`
  background-color: #f5f7fb;
  color: #697584;
`;

export const Button = ({ type, text, ...props }: ButtonProps) => {
  if (type === "primary") {
    return <PrimaryButton {...props}>{text}</PrimaryButton>;
  } else if (type === "text") {
    return <TextButton {...props}>{text}</TextButton>;
  } else {
    return <DefaultButton {...props}>{text}</DefaultButton>;
  }
};
