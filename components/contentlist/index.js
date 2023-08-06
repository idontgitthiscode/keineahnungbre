import Image from "next/image";
import data from "../../lib/data.js";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
`;

export default function Contentlist() {
  return (
    <div>
      <StyledH1>Contentliste</StyledH1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.previewtext}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
