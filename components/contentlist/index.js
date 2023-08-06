import Image from "next/image";
import data from "../../lib/data.js";
import styled from "styled-components";


const StyledContentlist = styled.ul`
list-style-type: none;
border: 2px solid lightgrey; 
`;

const StyledH1 = styled.h1`
  color: #BF4F74;
`;

const StyledDIV = styled.div`
  text-align: center;
`;


export default function Contentlist() {
  return (
    <StyledDIV>
      <StyledH1>Contentliste</StyledH1>
      <StyledContentlist>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.previewtext}</p>
          </li>
        ))}
      </StyledContentlist>
    </StyledDIV>
  );
}
