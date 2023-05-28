import React from "react";
import {IListItem} from "../../List/ListItem";

export enum MapControlPosition {
    TOP_LEFT = 1,
    TOP_CENTER = 2,
    TOP_RIGHT = 3,
    LEFT_BOTTOM = 6,
    LEFT_TOP = 5,
    LEFT_CENTER = 4,
    RIGHT_BOTTOM = 9,
    RIGHT_CENTER = 8,
    RIGHT_TOP = 7,
    BOTTOM_CENTER = 11,
    BOTTOM_LEFT = 12,
    BOTTOM_RIGHT = 10,
}

export interface IMarkerItem {
    name?:string;
    active?: boolean;
    selected?: boolean;
    location: {
        x: number;
        y: number;
    },
    id: string;
    itemIndex: number;
    type?: 'marker' | 'pin' | 'boy' | 'girl';
}

export interface IControlSection {
    children?: React.ReactNode;
    position: MapControlPosition;
    id: string;
}

export interface IMarkersState {
    activeItemId?: string;
    selectedIds?: string[];
    activeMarker?: IMarkerItem;
}
export interface IStaticTarget extends IListItem,IMarkerItem{
    unityObjectTag?:string;
    description?:string;
    objectPhotoUrl?:string;
    mapPhotoUrl?:string;
}
