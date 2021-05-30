import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    max-width: 600px;

    span {
      font-size: 1.5rem;
      font-weight: bold;
    }

    h1 {
      font-size: 4rem;
      line-height: 4.5rem;
      font-weight: 900;
      margin-top: 2.5rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2.25rem;
      margin-top: 1.5rem;
    }
  }

  img {
    padding-left: 10rem;
    width: 80%;
    height: 50%;
  }

  a {
    background: #61dafb;
    color: black;
    text-decoration: none;
    padding: 1.3rem;
    padding-left: 9rem;
    padding-right: 9rem;
    border-radius: 1.8rem;
    margin-top: 30rem;
    font-size: 1.25rem;
    font-weight: bold;
    display: flex;
    text-align: center;
    position: absolute;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 900px) {
    section {
      display: inline;
      text-align: center;
      margin: 0;
    }

    img {
      display: none;
    }

    a {
      padding-left: 40%;
      padding-right: 40%;
      margin-left: -1.5rem;
    }
  }
`;
