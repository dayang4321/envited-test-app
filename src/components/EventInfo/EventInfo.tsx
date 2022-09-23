import React, { FC } from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';

type EventInfoProps = {
  title: React.ReactNode | string;
  subtitle: React.ReactNode | string;
  Icon: IconType;
};

const EventsInfoBox = styled.div`
  display: flex;
`;

const WhiteIconBg = styled.div`
  width: 48px;
  height: 48px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  color: var(--primary-50);
`;

const InfoTextBox = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoText = styled.p`
  color: var(--primary);
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin: 1.5px 0;
`;

const InfoTextGray = styled(InfoText)`
  color: var(--text-gray);
  font-weight: 400;

  span {
    font-weight: 700;
  }
`;

const EventInfo: FC<EventInfoProps> = ({ title, subtitle, Icon }) => {
  return (
    <EventsInfoBox>
      <WhiteIconBg>
        <Icon size={24} />
      </WhiteIconBg>
      <InfoTextBox>
        <InfoText>{title}</InfoText>
        <InfoTextGray>{subtitle}</InfoTextGray>
      </InfoTextBox>
    </EventsInfoBox>
  );
};

export default EventInfo;
