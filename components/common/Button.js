import styled from "styled-components";

export const Button = styled.button`
  border: none;
  font: inherit;
  color: #f9f9f9;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;

  &.primary {
    padding: 8px 40px;
    border-radius: 50px;
    background: ${(p) => p.theme.btnPrimary};
  }

  &.secondary {
    width: 100%;
    padding: 8px 0;
    font-weight: 700;
    background: #9beaf1;
    border-radius: 50px;
    font-size: 16px;
    color: #121116;

    :hover {
      border: 1px solid #9beaf1;
      color: ${(p) => p.theme.white};
      background: ${(p) => p.theme.backgroundPrimary};
    }
  }

  &.tertiary {
    color: #14131a;
    padding: 6px 30px;
    border-radius: 50px;
    background: ${(p) => p.theme.white};

    :hover {
      font-weight: 900;
      background: ${(p) => p.theme.white};
      border: none;
    }
  }

  :hover {
    background: inherit;
    border: 1px solid ${(p) => p.theme.accent};
  }
`;
