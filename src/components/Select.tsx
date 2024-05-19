import React, { useState } from "react";
import styled from "styled-components";

// Select 的容器样式
const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// 下拉框样式
const SelectDropdown = styled.div`
  padding: 4px 24px 4px 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  width: 200px;
  outline: none;
`;

// 下拉箭头图标样式
const ArrowIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
`;

// 下拉列表样式
const OptionList = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  padding: 8px 0;
  margin: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

// 下拉选项样式
const OptionItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// Select 组件 Props 接口
interface SelectProps {
  options: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

// Select 组件
export const Select: React.FC<SelectProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectContainer>
      <SelectDropdown onClick={toggleDropdown}>
        {selectedValue || "Select..."}
        <ArrowIcon>▼</ArrowIcon>
      </SelectDropdown>
      {isOpen && (
        <OptionList>
          {options.map((option) => (
            <OptionItem
              key={option.value}
              onClick={() => handleSelectChange(option.value)}
            >
              {option.label}
            </OptionItem>
          ))}
        </OptionList>
      )}
    </SelectContainer>
  );
};
