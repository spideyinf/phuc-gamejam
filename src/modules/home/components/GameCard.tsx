import { LinearProgress, Typography } from '@material-ui/core';
import { GJ_BLACK_100, PRIMARY, WHITE } from 'assets/theme/colors';
import { some } from 'constants/constants';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import moment from 'moment'
import { Col, Row } from 'modules/common/Elements';

const GameCardWrapper = styled.div`
  border-radius: 12px;
  color: ${WHITE};
  background-color: ${GJ_BLACK_100};
  min-width: 260px;
  max-width: 32%;
  flex: 1 1 260px;
  margin: 0 12px 12px 0;
`

const GameCardImage = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 300px;
  object-fit: cover;
`

const GameCardPrice = styled.div`
  border-radius: 99px;
  padding: 8px;
  color: ${WHITE};
  border: 1px solid ${WHITE};
`

interface Props {
  data: some;
}

const GameCard = (props: Props) => {
  const { data } = props
  return (
    <GameCardWrapper>
      <GameCardImage src={data?.thumbnailImageUrl} alt="" />
      <Col style={{ padding: 8 }}>
        <Row style={{ justifyContent: 'space-between'}}>
          <Col>
            <Typography variant="h6">
              {data?.name}
            </Typography>
            <Typography variant="subtitle2" style={{ color: PRIMARY, marginBottom: 8 }}>
              {`#${data?.jamSlug}`}
            </Typography>
          </Col>
          <GameCardPrice>
            $3.99
          </GameCardPrice>
        </Row>
        <Typography variant="caption">
          {data?.description}
        </Typography>
      </Col>
    </GameCardWrapper>
  );
};

export default GameCard;

