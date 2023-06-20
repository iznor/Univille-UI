import {SyntheticEvent, useEffect, useMemo,useState} from "react";
import {useSetState} from "react-use";

interface IPopoverOrigin {
    vertical: 'top' | 'center' | 'bottom' | number;
    horizontal: 'left' | 'center' | 'right' | number;
}

interface IModalProps {
    modalId?: string,
    variant?: 'popover' | 'dialog'
    anchorOrigin?: IPopoverOrigin
    transformOrigin?: IPopoverOrigin
}

interface AnchorPosition {
    top: number
    left: number
}

export interface IModalState {
    open: (event: any) => void,
    close?: (event: any) => void,
    modalId: string,
    isOpen: boolean,
    setAnchorElUsed: boolean,
    anchorEl: HTMLElement | undefined,
    anchorPosition: AnchorPosition | null | undefined,
    hovered: boolean,
    focused: boolean,
    openEventType: string | null | undefined,
    deferNextOpen: boolean,
    deferNextClose: boolean,
    anchorOrigin?: IPopoverOrigin,
    transformOrigin?: IPopoverOrigin,
    anchorReference:'anchorPosition' | 'anchorEl'
}

export const useModal = (props: IModalProps) => {
    const {modalId = 'popup', variant = 'popover',anchorOrigin, transformOrigin} = props;
    const [state, setState] = useState(initialModalState)
    useEffect(() => {
        if (modalId &&  typeof document === 'object') {
            // @ts-ignore
            const modal = document.getElementById(modalId)
            if (modal) modal.focus()
        }
    }, [modalId, state.anchorEl])


    return useMemo(
        () =>
            installModal({
                state,
                setState,
                modalId,
                variant,
                anchorOrigin,
                transformOrigin
            }),
        [state, setState, modalId, variant]
    )
}

export function modalControlProps(modalState: Partial<IModalState>) {
    if(!modalState)return {};
    return {
        onClick: modalState.open,
        onTouchStart: modalState.open,
    }
}

interface IMenuModalReturn{
    id:string;
    anchorEl:HTMLElement | undefined;
    open:boolean;
    anchorPosition:AnchorPosition;
    anchorReference:'anchorPosition' | 'anchorEl';
    onClose:(e:any)=>void;
}
export function menuModalProps(modalState: Partial<IModalState>):IMenuModalReturn {
    // if(!popupState)return {};
    const useAnchorPosition = modalState.openEventType === 'contextmenu'
    return {
        id: modalState?.modalId ??"",
        anchorEl: modalState?.anchorEl??undefined,
        anchorPosition: modalState.anchorPosition,
        anchorReference: useAnchorPosition ? 'anchorPosition' : 'anchorEl',
        open: modalState?.isOpen??true,
        onClose: modalState?.close??null,
    }
}

export function popperModalProps(modalState: Partial<IModalState>) {
    if(!modalState)return {};
    return {
        id: modalState.modalId,
        anchorEl: modalState.anchorEl,
        open: modalState.isOpen,
    }
}

interface IPopoverModalReturn{
    id:string;
    anchorEl:HTMLElement | undefined;
    open:boolean;
    anchorPosition:AnchorPosition;
    anchorReference:'anchorPosition' | 'anchorEl';
    onClose:(e:any)=>void;
    anchorOrigin:IPopoverOrigin;
    transformOrigin:IPopoverOrigin;
}

export function popoverModalProps(modalState: Partial<IModalState>):IPopoverModalReturn {
    // if(!modalState)return {};
    const useAnchorPosition = modalState.openEventType === 'contextmenu'
    return {
        id: modalState.modalId,
        anchorEl:modalState.anchorEl,
        anchorPosition:modalState.anchorPosition,
        anchorOrigin:modalState.anchorOrigin,
        transformOrigin:modalState.transformOrigin,
        anchorReference: useAnchorPosition ? 'anchorPosition' : 'anchorEl',
        open: modalState?.isOpen??true,
        onClose: modalState?.close??null,
    }
}

export interface IDialogModalReturn{
    open:boolean;
    onClose:(e:any)=>void;
}

export function dialogModalProps(modalState: Partial<IModalState>):IDialogModalReturn {
    return {
        open: modalState.isOpen,
        onClose: modalState.close,
    }
}

export function contextModalProps(modalState: Partial<IModalState>) {
    if(!modalState)return {};
    return {
        onContextMenu: (e) => {


            modalState.open(e)
        },
    }
}

const initialModalState = {
    open: () => {},
    close: () => {},
    modalId: '',
    isOpen: false,
    setAnchorElUsed: false,
    anchorEl: null,
    anchorPosition: undefined,
    hovered: false,
    focused: false,
    openEventType: null,
    deferNextOpen: false,
    deferNextClose: false,
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
    },
    transformOrigin: {
        vertical: 'top',
        horizontal: 'center',
    },
}

const installModal = ({state, setState: _setState, modalId, variant,anchorOrigin : _anchorOrigin,transformOrigin:_transformOrigin}) => {
    const {
        isOpen,
        setAnchorElUsed,
        anchorEl,
        anchorPosition,
        hovered,
        focused,
        openEventType,
        deferNextOpen,
        deferNextClose,
        anchorOrigin,
        transformOrigin,
    } = state

    let lastState = state
    const setState = (nextState) => {
        if (stateChanged(lastState, nextState)) {
            _setState((lastState = {...lastState, ...nextState}))
        }
    }

    const setAnchorEl = (_anchorEl) => {
        setState({setAnchorElUsed: true, anchorEl: _anchorEl})
    }

    const toggle = (eventOrAnchorEl) => {
        if (isOpen) close(eventOrAnchorEl)
        else open(eventOrAnchorEl)
    }

    const open = (eventOrAnchorEl) => {

        const eventType = eventOrAnchorEl && eventOrAnchorEl.type
        const currentTarget = eventOrAnchorEl && eventOrAnchorEl.currentTarget
        const clientX = eventOrAnchorEl && eventOrAnchorEl.clientX
        const clientY = eventOrAnchorEl && eventOrAnchorEl.clientY

        const anchorPosition =
            typeof clientX === 'number' && typeof clientY === 'number'
                ? {left: clientX, top: clientY}
                : undefined

        if (eventType === 'touchstart') {
            setState({deferNextOpen: true})
            return
        }

        const doOpen = () => {
            if (!eventOrAnchorEl && !setAnchorElUsed) {
                console.warn(
                    'missingEventOrAnchorEl',
                    'eventOrAnchorEl should be defined if setAnchorEl is not used'
                )
            }

            const newState = {
                isOpen: true,
                anchorPosition,
                hovered: eventType === 'mouseover' || hovered,
                focused: eventType === 'focus' || focused,
                openEventType: eventType,
                anchorEl: null
            }

            if (currentTarget) {
                if (!setAnchorElUsed) {
                    newState.anchorEl = currentTarget
                }
            } else if (eventOrAnchorEl) {
                newState.anchorEl = eventOrAnchorEl
            }

            setState(newState)
        }
        if (deferNextOpen) {
            setState({deferNextOpen: false})
            setTimeout(doOpen, 0)
        } else {
            doOpen()
        }
    }

    const close = (arg?: SyntheticEvent<any> | HTMLElement) => {
        const eventType =arg && arg['type']
        switch (eventType) {
            case 'touchstart':
                setState({deferNextClose: true})
                return
        }
        const doClose = () => {
            setState({isOpen: false, hovered: false, focused: false})
        }
        if (deferNextClose) {
            setState({deferNextClose: false})
            setTimeout(doClose, 0)
        } else {
            doClose()
        }
    }

    const setOpen = (
        nextOpen: boolean,
        eventOrAnchorEl?: SyntheticEvent<any> | HTMLElement
    ) => {
        if (nextOpen) {
            open(eventOrAnchorEl)
        } else close(eventOrAnchorEl)
    }



    const modalState = {
        anchorEl,
        anchorPosition,
        setAnchorEl,
        setAnchorElUsed,
        modalId,
        variant,
        isOpen,
        open,
        close,
        toggle,
        setOpen,
        openEventType,
        anchorOrigin :_anchorOrigin ?? anchorOrigin,
        transformOrigin:_transformOrigin ?? transformOrigin
    }

    return [modalState]
}

const stateChanged = (state, nextState) => {
    for (let key in nextState) {
        if (
            Object.prototype.hasOwnProperty.call(state, key) &&
            state[key] !== nextState[key]
        ) {
            return true
        }
    }
    return false
}

