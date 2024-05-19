import styled from "styled-components";

export type BoxProps = {
  width?: string;
  children?: React.ReactNode;
};

const Wrapper = styled.div<BoxProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 16px;
  background: #fff;
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Box = ({ width, children }: BoxProps) => {
  return <Wrapper width={width}>{children}</Wrapper>;
};
