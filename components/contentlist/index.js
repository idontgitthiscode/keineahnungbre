import Image from "next/image";
import data from "../../lib/data.js";
import styled from "styled-components";

const StyledContentlist = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledH2 = styled.h2`
  color: white;
  padding-bottom: 30px;
`;

const StyledDIV = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: auto;
`;

const defaultGradient = "linear-gradient(#D8D9DA, #61677A)";
const hoverGradient = "linear-gradient(#61677A, #D8D9DA)";

const StyledContentBox = styled.li`
  background: ${defaultGradient};
  border: 4px solid white;
  padding: 50px 25px;
  margin: 20px;
  border-radius: 10px;
  transition: filter 0.3s ease, transform 0.3s ease;
  flex: 1 0 300px;
  min-width: 500px;
  &:hover {
    transform: scale(1.02);
    background: ${hoverGradient};
  }

  /* Ad media query for smaller screen sizes (e.g., mobile devices) */
  @media (max-width: 768px) {
    margin: 15px; /* Adjust the margin for mobile view */
    min-width: auto; /* Allow the content boxes to take the full width in mobile view */
  }
`;

const ContentImage = styled(Image)`
  border-radius: 10px;
  max-width: 100%;
  max-height: 350px;
  border: 2px solid white;
`;
 
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
