import { Typography } from '@material-ui/core';
import { some } from 'constants/constants';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface Props {
  data?: some;
}

const HomeDesktop = (props: Props) => {
  const { data } = props
  console.log('data :', data);
  return (
    <div>
      HEY
    </div>
  );
};

export default HomeDesktop;
