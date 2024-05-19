import styled from "styled-components";

export type BoxProps = {
  width?: string;
  children?: React.ReactNode;
};

const Wrapper = styled.div<BoxProps>`
  width: 100%;
  padding: 16px;
  background: #fff;
  display: flex;
`;

export const Card = ({ width, children }: BoxProps) => {
  return <Wrapper width={width}>{children}</Wrapper>;
};
