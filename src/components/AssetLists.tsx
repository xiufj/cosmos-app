import { useState } from "react";
import styled from "styled-components";
import { Asset } from "@chain-registry/types";
import { Modal, Button, Deposit } from "./index";

const Wrapper = styled.div<{
  width?: string;
  gap?: string;
  direction?: "column" | "row";
}>`
  padding: 0 12px;
  display: flex;
  align-items: end;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  width: ${(props) => (props.width ? props.width : "auto")};
  gap: ${(props) => (props.gap ? props.gap : "20px")};
`;
const Item = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Text = styled.span<{ size?: string; color?: string }>`
  font-size: ${(props) => (props.size ? props.size : "14px")};
  color: ${(props) => (props.color ? props.color : "#2c3137")};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
`;

export interface AssetListProps {
  list: Array<Asset>;
}

export const AssetLists = ({ list }: AssetListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <Item>
          <div style={{ width: "40px" }} />
          <Wrapper width="100px" gap="4px">
            <Text color="#697584">Asset</Text>
          </Wrapper>
          <Wrapper width="200px" gap="4px">
            <Text color="#697584">Balance</Text>
          </Wrapper>
          <div style={{ width: "234px" }} />
        </Item>
        {list.map((v, i) => {
          return (
            <Item key={i}>
              <img src={v.logo_URIs?.png} height="40" width="40" alt="" />
              <Wrapper width="100px" gap="4px">
                <Text>{v.name}</Text>
                <Text color="#697584">{v.display}</Text>
              </Wrapper>
              <Wrapper width="200px" gap="4px">
                <Text>89.66</Text>
                <Text color="#697584">10</Text>
              </Wrapper>
              <Wrapper direction="row">
                <Button text="Deposit" onClick={() => setIsOpen(true)} />
                <Button text="Withdraw" />
              </Wrapper>
            </Item>
          );
        })}
      </Wrapper>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p className="modal-title">Deposit</p>
        <Deposit />
      </Modal>
    </>
  );
};
