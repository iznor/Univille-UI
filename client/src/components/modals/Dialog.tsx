import {
    Dialog as MuiDialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle, Box, Button, Paper, PaperProps
} from '@mui/material';
import {IModalState, dialogModalProps} from "hooks/useModal";
import React from "react";
import {Row} from "../basic";
import Draggable from 'react-draggable';
import {makeStyles} from 'tss-react/mui';

export interface IDialog extends Partial<DialogProps> {
    modalState?: Partial<IModalState>;
    onClose?: () => void;
    onOk?: (val?: any) => any;
    onCancel?: (val?: any) => any;
    children?: React.ReactNode;
    draggable?: boolean;
    dialogTitle?: React.ReactNode;

}

export const Dialog = (props: IDialog) => {
    const {
        modalState = null,
        onClose,
        onOk,
        onCancel,
        children,
        dialogTitle,
        draggable,
        ...rest
    } = props;
    const {classes, cx} = useStyle();
    const onMenuClose = (e) => {
        modalState.close(e);
        onClose && onClose();
    };
    const handleOk = (e) => {
        e.preventDefault()
        onOk(e);
    }
    const handleCancel = (e) => {
        modalState.close(e);
        onCancel && onCancel();
    }

    return (
        <MuiDialog
            {...dialogModalProps(modalState)}
            {...rest}
            onClose={onMenuClose}
            container={document.body}
            componentsProps={{backdrop: {style: {position: 'inherit'}}}}
            className={cx(classes.root,"dialog-container")}
            {...(draggable ? draggableProps : {})}
        >

                <Row id={"draggable-dialog-title"} className={cx(classes.dragNav)}>
                    <DialogTitle className={cx(classes.title)}>{dialogTitle}</DialogTitle>
                    <Button onClick={handleCancel} sx={{ml: 'auto', padding: '4px'}}>cancel</Button>
                </Row>
                <DialogContent className={cx(classes.content,"dialog-content-container")}>
                    {children}
                </DialogContent>
            {onOk&&<DialogActions>
                <Button onClick={handleOk} color={"success"} sx={{ml: 'auto', padding: '4px'}}>Confirm</Button>
            </DialogActions>}

        </MuiDialog>
    );
};


function PaperComponent(props: PaperProps) {
    return (
        <>{/*@ts-ignore*/}
            <Draggable
                handle="#draggable-dialog-title"
                cancel={'[class*="MuiDialogContent-root"]'}
            >
                <Paper {...props} sx={{borderRadius: '3px !important'}}/>
            </Draggable>
        </>
    );
}

const draggableProps = {PaperComponent: PaperComponent}


const useStyle = makeStyles()((theme) => ({
    root: {
        "& .MuiPaper-root":{
            maxHeight: 'calc(100% - 64px)',
            maxWidth: 'calc(100% - 64px)',
        }
        // overflowY: 'h',
    },
    dragNav:{
        position: 'sticky',
        top: 0,
        backgroundColor: "inherit",
        zIndex: 1,
        // borderBottom: theme => `1px solid ${theme.palette.app.border}`
    },
    title:{
        position: 'relative',
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: '12px',
        padding: 0,
        lineHeight: 2
    },
    content:{
        overflowY: 'auto',
        marginBottom: "13px",
        marginTop: "13px"
    }
}));

/*
 position: 'sticky',
        width: "100%",
        top: 0,
        backgroundColor: "inherit",
        zIndex: 1,
        borderBottom: theme => `1px solid ${theme.palette.app.border}`
 */
