import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 830px;
  background-color: #e5e5e5;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 10rem 10rem 10rem 10rem;
  gap: 100px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  padding-top: 7rem;
`;

export { Section, Div };
