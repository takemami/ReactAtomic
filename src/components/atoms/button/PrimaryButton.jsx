import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//既存のスタイルを上書きしたい場合は「.」でなく「（）」で囲む
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
