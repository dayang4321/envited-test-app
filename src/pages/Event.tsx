import React from 'react';
import styled from 'styled-components';
import eventImg from 'src/assets/img/png/event-image.png';
import eventImg2x from 'src/assets/img/png/event-image-2x.png';
import { StyledTitle } from 'src/components/styles/styledTags';
import { ImCalendar } from 'react-icons/im';
import { ImLocation } from 'react-icons/im';
import EventInfo from 'src/components/EventInfo/EventInfo';

type Props = {};

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
`;

const StyledEventTitle = styled(StyledTitle)`
  font-size: 28px;
  line-height: 1.142;
  margin-bottom: 4px;
`;

const StyledText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--subtitle-gray);
  margin: 0;
`;

const StyledSpan = styled.span`
  font-weight: 700;
`;

const StyledPicture = styled.picture``;

const StyledContainer = styled.div`
  padding: 3% 6%;
`;

const EventsInfoContainer = styled.div`
  margin-top: 32px;
`;

const Home = (props: Props) => {
  return (
    <StyledMain>
      <StyledPicture>
        <source media="(min-width: 1024px)" src={eventImg2x} />
        <source media="(max-width: 768px)" src={eventImg2x} />
        <img src={eventImg} alt="Birthday Celebration" />
      </StyledPicture>
      <StyledContainer>
        <StyledEventTitle>Birthday Bash</StyledEventTitle>
        <StyledText>
          Hosted by <StyledSpan>Elysia</StyledSpan>
        </StyledText>
        <EventsInfoContainer>
          <EventInfo
            title="18 August 6:00PM"
            subtitle={
              <>
                to <span>19 August 1:00PM</span> UTC +10
              </>
            }
            Icon={ImCalendar}
          />
          <EventInfo
            title="Street name"
            subtitle="Suburb, State, Postcode"
            Icon={ImLocation}
          />
        </EventsInfoContainer>
      </StyledContainer>
    </StyledMain>
  );
};

export default Home;
