//Import 
import Image from "next/image";
import data from "../../lib/data.js";
import styled from "styled-components";
import ContentImage from "next/image";

//Styled-Components
const StyledContentlist = styled.ul`
list-style-type: none;
padding: 0px;
`;

const StyledH1 = styled.h1`
  color: black;
`;

const StyledDIV = styled.div`
  text-align: center;
  max-width: 800px;
  margin: auto;
`;

const StyledContentBox = styled.li`
background: linear-gradient(#868F96 , #596164);
border: 4px solid white; 
padding: 50px 25px;
margin-bottom: 35px;
margin-left: 25px;
margin-right: 25px;
border-radius: 10px;
`;

//Export function
export default function Contentlist() {
  return (
    <StyledDIV>
      <StyledH1>Contentliste</StyledH1>
      <StyledContentlist>
        {data.map((item) => (
          <StyledContentBox key={item.id}>
            <h2>{item.title}</h2>
            <ContentImage src={item.image} alt={item.name} width={375} height={375} />
            <p>{item.previewtext}</p>
          </StyledContentBox>
        ))}
      </StyledContentlist>
    </StyledDIV>
  );
}
