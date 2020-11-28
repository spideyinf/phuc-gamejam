import { Typography } from '@material-ui/core';
import { some } from 'constants/constants';
import { Row } from 'modules/common/Elements';
import * as React from 'react';
import JamCard from './JamCard';
import GameCard from './GameCard';
import styled from 'styled-components'
import { GJ_BLACK, GJ_BLACK_100, PRIMARY, WHITE } from 'assets/theme/colors';

const ButtonOutline = styled.button`
  border-radius: 99px;
  color: ${WHITE};
  border: 1px solid ${WHITE};
  background: ${GJ_BLACK};
  text-transform: uppercase;
  padding: 4px 8px;
`

const ButtonSolid = styled.button`
  border-radius: 99px;
  color: ${WHITE};
  background: ${PRIMARY};
  text-transform: uppercase;
  padding: 8px 16px;
  border: 0;
  width: 120px;
`

const BigFeatureMain = styled.div`
  width: 50%;
  height: 200px;
  color: ${WHITE};
  background: ${GJ_BLACK_100};
  padding: 32px;
`

interface Props {
  data?: some;
}

const HomeDesktop = (props: Props) => {
  const { data } = props
  return (
    <>
      <Row>
        <img src={data?.bigFeaturedJam.coverImageUrl} alt="" style={{ width: '50%', height: 264}}/>
        <BigFeatureMain>
          <Typography variant="h6">
            {data?.bigFeaturedJam.name}
          </Typography>
          <Typography variant="subtitle2" style={{ color: PRIMARY, marginBottom: 8 }}>
            {`Hosted by ${data?.bigFeaturedJam.hostProfiles[0]?.username}`}
          </Typography>
          <Row style={{ justifyContent: 'center' }}>
            <ButtonSolid>
              Join now
            </ButtonSolid>
          </Row>
        </BigFeatureMain>
      </Row>

      <Typography variant="h5">
        Featured Jams
      </Typography>

      <Row style={{ flexWrap: 'wrap'}}>
        {data?.jams.map((item: some, index: number) => (
          <JamCard key={index} data={item} />
        ))}
      </Row>
      <Row style={{ justifyContent: 'flex-end' }}>
        <ButtonOutline
          type="submit"
          style={{ alignSelf: 'flex-end' }}
          onClick={() => console.log('View more')}
        >
          View More
        </ButtonOutline>
      </Row>

      <Typography variant="h5">
        Featured Games
      </Typography>
      <Row style={{ flexWrap: 'wrap'}}>
        {data?.games[0].data.map((item: some, index: number) => (
          <GameCard key={index} data={item} />
        ))}
      </Row>
      <Row style={{ justifyContent: 'flex-end' }}>
        <ButtonOutline
          type="submit"
          style={{ alignSelf: 'flex-end' }}
          onClick={() => console.log('View more')}
        >
          View More
        </ButtonOutline>
      </Row>
    </>
  );
};

export default HomeDesktop;
