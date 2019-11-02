import React from "react";
import styled from "styled-components";

const MainImage = styled.img `
display: block;
margin:  auto;
`; 

export default function WelcomePage() {
  return (
    <section>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <MainImage
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        ></MainImage>
      </header>
    </section>
  );
}
