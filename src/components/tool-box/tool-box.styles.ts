import styled from 'styled-components';

export const InstrumentBoxContainer = styled.div`
  padding: 8px;
  margin: 8px;
  border: 1px #e1e8eb solid;
  border-radius: 5px;

  display: grid;
  grid-template-columns: repeat(7, 42px);
  gap: 5px;
`;

export const InstrumentButton = styled.button<{ active: boolean }>`
  display: block;
  color: ${(props) => (props.active ? '#8b5cf6' : '#6b7280')};
  background-color: #f3f4f6;
  height: 42px;
  width: 42px;
  border-radius: 5px;
  border: ${(props) => (props.active ? '1px #d1d5db solid' : '0px')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    ${(props) => !props.active && 'color: #4b5563;'}
    background-color: #e5e7eb;
  }

  & > svg {
    font-size: 20px;
  }
`;

export const ColorBoxContainer = styled.div`
  border: 1px #e1e8eb solid;
  margin: 8px;
  padding: 8px 8px 12px 8px;
  border-radius: 5px;

  & > div + div {
    margin-top: 20px;
  }
`;

export const SliderContainer = styled.div``;

export const RangeColorPickerContainer = styled.div`
  display: flex;

  & > div + div {
    margin-left: 8px;
  }
`;

export const SelectedColorContainer = styled.div`
  flex: 1;
  position: relative;
`;

export const ActiveForegroundColor = styled.div<{ color: string }>`
  width: 85%;
  border-radius: 4px;
  overflow: hidden;
  border: 1px #a7bbc7 solid;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  cursor: pointer;

  &::before {
    content: '';
    display: block;

    width: 100%;
    padding-top: 100%;

    background-color: ${(props) => props.color};
  }
`;
export const ActiveBackgroundColor = styled.div<{ color: string }>`
  width: 85%;
  border-radius: 4px;
  overflow: hidden;
  border: 1px #a7bbc7 solid;
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 1;
  cursor: pointer;

  &::before {
    content: '';
    display: block;

    width: 100%;
    padding-top: 100%;

    background-color: ${(props) => props.color};
  }
`;

export const SketchPickerContainer = styled.div`
  position: absolute;
  z-index: 3;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
