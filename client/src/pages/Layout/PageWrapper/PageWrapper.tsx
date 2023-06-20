import { Column } from '../../../components';
import React from 'react';
import { ContainerProps, Container, StackProps } from '@mui/material';
import {makeStyles} from 'tss-react/mui';

interface IPageWrapper extends Partial<StackProps>{
    page: string;
    children?: React.ReactNode;
}

const PageWrapper = (props: IPageWrapper) => {
  const {children,page,className="",maxWidth = 'md',...rest } = props;
    const {classes, cx} = useStyle();
  return (
        <Column
            id={`univille-${page}-page-Container`}
            className={cx(classes.root,className)}
            sx={{height:"85vh"}}
            justifyContent="center"
            alignItems="center"
            {...rest}
        >
            {children}
        </Column>
  );
};

export { PageWrapper };

const useStyle = makeStyles()((theme) => ({
    root: {

    },

}));

