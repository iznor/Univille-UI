import React, {useEffect} from 'react';
import { P } from '../../components';
import { useData, useUi } from '../../store';

interface IHome {}

const Home = (props: IHome) => {
  const {} = props;
    const { dataState, dataActions } = useData();
    useEffect(() => {
        dataActions.getServerInfo();
    },[])
  return (
    <div>
      <P>Hommmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmme</P>
    </div>
  );
};

export { Home };
