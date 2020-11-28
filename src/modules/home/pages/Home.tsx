import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { some } from 'constants/constants';
import { GamejamData } from '../data';
import HomeDesktop from '../components/HomeDesktop';

interface Props {
}

const Home = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<some | undefined>(undefined);

  const fetchData = React.useCallback(
    async () => {
      setLoading(true)
      // Calling API goes here
      setData(GamejamData)
      setLoading(false)
    }, []
  )

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  return <HomeDesktop data={data} />;
};

export default connect(
  (state: any) => ({ account: state.system.profile }),
  {}
)(withRouter(Home));
