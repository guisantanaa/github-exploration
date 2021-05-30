import { Container } from './styles';
import githubImg from '../../assets/Octocat.png';
import React from 'react';

export default function Home() {
  return (
    <Container>
      <section>
        <span>Olá, seja bem vindo</span>
        <h1>Github exploration</h1>
        <p>Encontre repósitorios com mais facilidade</p>
      </section>

      <img src={githubImg} alt="logo do github" />

      <a href="/dashboard">Entrar</a>
    </Container>
  );
}
