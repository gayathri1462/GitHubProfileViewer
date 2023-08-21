import { styled } from "../index";

interface ButtonProps {
  inputValue: string;
}

export const Button = styled.button`
  background-color: ${(props: ButtonProps) =>
    props.inputValue ? "#0079FF " : "#fff"};
  font-family: "Lora", serif;
  font-size: 1.25em;
  color: ${(props: ButtonProps) => (props.inputValue ? "#fff " : "#61677A")};
  padding: 0.75em;
  height: 50px;
  border: none;
  outline: none;
  cursor: ${(props: ButtonProps) =>
    props.inputValue ? "pointer" : "not-allowed"};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25em;
`;
