import { styled } from "../index";

export const ToggleTab = styled.button`
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive ? " #0079FF" : " #fff"};
  font-family: "Calistoga", cursive;
  letter-spacing: 0.04em;
  font-size: 1em;
  color: ${(props: { isActive: boolean }) =>
    props.isActive ? " #fff" : " #000"};
  padding: 0.75em;
  height: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25em;
`;
