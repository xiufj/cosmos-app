import React from "react";
import styled from "styled-components";

// Props interface for the Space component
interface SpaceProps {
  size?: number; // Size of the space (in pixels)
  direction?: "horizontal" | "vertical"; // Direction of the space (horizontal or vertical)
  children?: React.ReactNode;
}

// Styled component for Space wrapper
const SpaceWrapper = styled.div<SpaceProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};
  align-items: center;
`;

// Styled component for individual Space item
const SpaceItem = styled.div<SpaceProps>`
  margin-right: ${({ direction, size }) =>
    direction === "horizontal" ? `${size}px` : 0};
  margin-bottom: ${({ direction, size }) =>
    direction === "vertical" ? `${size}px` : 0};
`;

// Space component
export const Space: React.FC<SpaceProps> = ({
  size = 8,
  direction = "horizontal",
  children,
}) => {
  return (
    <SpaceWrapper direction={direction}>
      {React.Children.map(children, (child, index) => (
        <SpaceItem key={index} direction={direction} size={size}>
          {child}
        </SpaceItem>
      ))}
    </SpaceWrapper>
  );
};
