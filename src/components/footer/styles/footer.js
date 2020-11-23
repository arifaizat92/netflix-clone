import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(autofill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
`;

export const Title = styled.p`
  color: #757575;
  margin-bottom: 40px;
  font-size: 18px;
`;

export const Text = styled.p`
  color: #757575;
  margin-bottom: 40px;
  font-size: 13px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
