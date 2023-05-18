import React, {useEffect} from 'react';
import { P } from '../../components';
import { useData, useUi } from '../../store';
import * as process from "process";

interface IHome {}

const Home = (props: IHome) => {
  const {} = props;
    const { dataState, dataActions } = useData();
    useEffect(() => {
        dataActions.getServerInfo();
        console.log(process.env.NODE_ENV)
    },[])
  return (
    <div>
      <P>Hommmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmme</P>
    </div>
  );
};

export { Home };
