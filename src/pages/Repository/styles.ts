import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    color: #f5f5f5;
    font-size: 1.2rem;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 35px;
        color: #f0fff1;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
  }

  li {
    & + li {
      margin-left: 80px;
    }
    strong {
      display: block;
      font-size: 36px;
      color: #9aadbf;
    }
    span {
      display: block;
      margin-top: 4px;
      color: #f0fff1;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #61dafb;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 1.2rem;
        color: #000;
      }

      p {
        font-size: 18px;
        color: #000;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #000;
    }
  }
`;
