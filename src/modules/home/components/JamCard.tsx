import { LinearProgress, Typography } from '@material-ui/core';
import { GJ_BLACK_100, PRIMARY, WHITE } from 'assets/theme/colors';
import { some } from 'constants/constants';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import moment from 'moment'
import { Row } from 'modules/common/Elements';

const JamCard = styled.div`
  border-radius: 12pxl
  color: ${WHITE};
  background-color: ${GJ_BLACK_100};
`

const JamCardImage = styled.img`
  border-radius: 12pxl
  width: 100%
  height: auto;
  object-fit: cover;
`

interface Props {
  data: some;
}

const JamCards = (props: Props) => {
  const { data } = props
  return (
    <JamCard>
      <JamCardImage src={data?.coverImageUrl} alt="" />
      <Typography variant="h6">
        {data?.name}
      </Typography>
      <Typography variant="subtitle1" style={{ color: PRIMARY, marginBottom: 8 }}>
        {data?.hostProfiles[0]?.username}
      </Typography>
      <Typography variant="caption">
        {`Start in ${moment(data?.startTime)}`}
      </Typography>
      <LinearProgress variant="determinate" value={50} color="secondary" />
      <Row>
        <Typography variant="caption" style={{ marginRight: 12}}>
          {`${data?.joinCount} Joined`}
        </Typography>
        <Typography variant="caption">
          {`${data?.submissionCount} Submissions`}
        </Typography>
      </Row>
    </JamCard>
  );
};

export default JamCards;

