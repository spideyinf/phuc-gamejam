import { Typography } from '@material-ui/core';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface Props {}

const GameCard = (props: Props) => {
  return (
    <div>
      <Typography variant="body2">
        <FormattedMessage id="save" />
      </Typography>
    </div>
  );
};

export default GameCard;

