import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  cursor: pointer;
`;
export const PreviewCon = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-top: 1.5rem;
`;
