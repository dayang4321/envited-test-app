import React from 'react';
import styled from 'styled-components';
import homeImg from 'src/assets/img/png/home.png';
import Button from 'src/components/UI/Button/Button';
import { StyledTitle } from 'src/components/styles/styledTags';

type Props = {};

const StyledMain = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const StyledHomeTitle = styled(StyledTitle)`
  font-size: 36px;
  margin-bottom: 16px;
  text-align: center;
`;

const StyledText = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: var(--text-gray);
`;

const StyledSpan = styled.span`
  background: linear-gradient(90deg, #8456ec 24.2%, #e87bf8 120.46%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: block;
`;

const StyledPicture = styled.picture``;

const StyledPictureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Home = (props: Props) => {
  return (
    <StyledMain>
      <StyledHomeTitle>
        Imagine if <StyledSpan>Snapchat</StyledSpan> had events.
      </StyledHomeTitle>
      <StyledText>
        Easily host and share events with your friends across any social media.
      </StyledText>

      <StyledPictureBox>
        <StyledPicture>
          <source media="(min-width: 1024px)" src={homeImg} />
          <source media="(max-width: 768px)" src={homeImg} />
          <img src={homeImg} alt="Envited Home Page" />
        </StyledPicture>

        <Button>
          <span>🎉 Create my event</span>
        </Button>
      </StyledPictureBox>
    </StyledMain>
  );
};

export default Home;
