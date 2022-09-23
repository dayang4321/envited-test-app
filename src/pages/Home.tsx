import React from 'react';
import styled from 'styled-components';

type Props = {};

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 1;
  color: var(--primary-100);
  text-align: center;
  margin-bottom: 16px;
`;

const StyledText = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
`;

const StyledSpan = styled.span`
  background: linear-gradient(90deg, #8456ec 24.2%, #e87bf8 120.46%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: block;
`;

const Home = (props: Props) => {
  return (
    <main>
      <StyledTitle>
        Imagine if <StyledSpan>Snapchat</StyledSpan> had events.
      </StyledTitle>
      <StyledText>
        Easily host and share events with your friends across any social media.
      </StyledText>
    </main>
  );
};

export default Home;
