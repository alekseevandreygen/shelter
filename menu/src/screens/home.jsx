import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button/Button.jsx';

const Wrapper = styled.div`
  display: flex;`;
const OfferContainer = styled.div`
  flex: 1;
  position: relative;`;
const Offer = styled.div`
  position: absolute;
  left: 100px;
  font-family: latoblack;`;
const H1 = styled.h1`
	line-height: 30px;
  font-size: 85px;
  letter-spacing: 4px;`;
const Description = styled.div`
	font-family: roboto_slabregular;
  width: 400px;
  color: #908f8f;`;
const ImageContainer  = styled.div`
  flex: 1;`;
const Image = styled.img`
  background: url('../src/images/hi.png');
  height: 480px;
  width: 494px;
  content: 'Hi, visitors! Here should be an img :)';
  `;

export const Home = () => {
	return <Wrapper>
    <OfferContainer>
      <Offer>
        <H1>Design</H1>
        <H1>Development</H1>
        <H1>Promotion</H1>
        <Description>
          You have been looking for and found!
          Our team will help your bussines
          to rise to a new level.
        </Description>
        <Button 
          content={'Let\'s start'}
        />
      </Offer>
    </OfferContainer>

    <ImageContainer>
      <Image />
    </ImageContainer>
	</Wrapper>
};
