import ContentList from "../components/contentlist/index.js";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: #BF4F74;
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <StyledH1>Willkommen bei keineAhnungBre</StyledH1>
      <div>
        <ContentList />
      </div>
    </>
  );
}
// hi