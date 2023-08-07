//Import 
import Image from "next/image";
import data from "../../lib/data.js";
import styled from "styled-components";

//Styled-Components
const StyledContentlist = styled.ul`
  list-style-type: none;
  padding: 0px;
`;

const StyledH2 = styled.h2`
  color: white;
  padding-bottom: 30px;
`;

const StyledDIV = styled.div`
  text-align: center;
  max-width: 800px;
  margin: auto;
`;

const StyledContentBox = styled.li`
  background: linear-gradient(#D8D9DA, #61677A);
  border: 4px solid white; 
  padding: 50px 25px;
  margin-bottom: 35px;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 10px;
`;

const ContentImage = styled(Image)` 
  border-radius: 10px;
  max-width: 100%;
  height:auto;
  filter: grayscale(70%);
  border: 2px solid white;
  &:hover {
    filter: grayscale(0%);
  }
  `;

//Export function
export default function Contentlist() {
  return (
    <StyledDIV>
      <StyledH2>Finde die Web-Development Komponenten, die du brauchst!</StyledH2>
      <StyledContentlist>
        {data.map((item) => (
          <StyledContentBox key={item.id}>
            <h2>{item.title}</h2>
            <ContentImage src={item.image} alt={item.name} width={700} height={350} />
            <p>{item.previewtext}</p>
          </StyledContentBox>
        ))}
      </StyledContentlist>
    </StyledDIV>
  );
}
