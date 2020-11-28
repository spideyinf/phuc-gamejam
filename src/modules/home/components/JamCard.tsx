import { LinearProgress, Typography } from '@material-ui/core';
import { GJ_BLACK_100, PRIMARY, WHITE } from 'assets/theme/colors';
import { some } from 'constants/constants';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import moment from 'moment'
import { Col, Row } from 'modules/common/Elements';

const JamCardWrapper = styled.div`
  border-radius: 12px;
  color: ${WHITE};
  background-color: ${GJ_BLACK_100};
  min-width: 260px;
  max-width: 32%;
  flex: 1 1 260px;
  margin: 0 12px 12px 0;
`

const JamCardImage = styled.img`
  border-radius: 12px;
  width: 100%;
  height: auto;
  object-fit: cover;
`

interface Props {
  data: some;
}

const JamCard = (props: Props) => {
  const { data } = props
  return (
    <JamCardWrapper>
      <JamCardImage src={data?.coverImageUrl} alt="" />
      <Col style={{ padding: 8 }}>
        <Typography variant="h6">
          {data?.name}
        </Typography>
        <Typography variant="subtitle2" style={{ color: PRIMARY, marginBottom: 8 }}>
          {`Hosted by ${data?.hostProfiles[0]?.username}`}
        </Typography>
        <Typography variant="caption">
          {`Start in ${moment(data?.startTime).format('YYYY-MM-DD')}`}
        </Typography>
        <LinearProgress variant="determinate" value={Math.random()*100} color="primary" />
        <Row>
          <Typography variant="caption" style={{ marginRight: 12}}>
            {`${data?.joinedCount} Joined`}
          </Typography>
          <Typography variant="caption">
            {`${data?.submissionCount} Submissions`}
          </Typography>
        </Row>
      </Col>
    </JamCardWrapper>
  );
};

export default JamCard;

