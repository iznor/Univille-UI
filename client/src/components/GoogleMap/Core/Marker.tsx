import React, {useEffect, useMemo, useRef} from 'react';
import {InfoWindow, InfoWindowF, MarkerF} from '@react-google-maps/api';
import {TargetModal} from "../EditorMap/TargetModal";

export interface IMarker {
    active?: boolean;
    selected?: boolean;
    type?: 'marker' | 'pin' | 'boy' | 'girl';
    location: {
        x: number;
        y: number;
    },
    onClick: (id:string) => void;
    title: string;
    id: string;
    showInfoWindow?: boolean;
    onItemSelect?: (id: string, state: boolean) => void;
    [key: string]: any;
}

function Marker(props: IMarker) {
    const {
        active = false,
        selected = false,
        type = 'marker', location, title, onClick,id,showInfoWindow,onItemSelect
    } = props;
    const markerRef = useRef(null);
    const infoWindowRef = useRef(null);

    const handleOnLoad = (markerInstance) => {
        markerRef.current = markerInstance;
    };

    const handleInfoWindowLoad = (infoWindow) => {
        console.log('infoWindow',infoWindow)
        infoWindowRef.current = infoWindow;
        // add styles to infoWindow via infoWindowRef.current
    }

    useEffect(() => {
        if (markerRef.current) {
            markerRef.current.setIcon(markerIconFactory(active,selected,type));
        }
    }, [active,selected,type]);

    const handleCLick = (e) => {
        e.stop()
        e.domEvent.preventDefault();
        e.domEvent.stopPropagation();
        onClick(id)
    }



    return <MarkerF
        position={{lat: location.x, lng: location.y}}
        title={title}
        animation={google.maps.Animation.DROP}
        onClick={handleCLick}
        onLoad={handleOnLoad}
        icon={markerIconFactory(active,selected,type)}
    >
        {showInfoWindow&&<InfoWindowF
            onLoad={handleInfoWindowLoad}
            options={{maxWidth: 330,minWidth: 330,disableAutoPan: true}}
            position={{lat: location.x, lng: location.y}}


        >
            <TargetModal {...props} onItemSelect={onItemSelect}/>

        </InfoWindowF>}
    </MarkerF>;
}

const markerIconFactory = (active,selected,type) => {
    let url = ''
    if(type==='marker'){
        url =`/images/svg/marker-${selected?'green':active?'orange':'blue'}.svg`
    } else{
        url =`/images/svg/marker-${type}.svg`
    }
    return {url, scaledSize: new google.maps.Size(40, 40)}
};

export {Marker}
