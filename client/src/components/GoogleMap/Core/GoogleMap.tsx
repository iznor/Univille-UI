import {GoogleMap as GMap, GoogleMapProps, InfoWindow, useLoadScript} from '@react-google-maps/api';
import {Marker} from "./Marker";
import React, {PureComponent, useCallback, useEffect, useRef} from "react";
import {CircularProgress} from "@mui/material";
import {MapControl} from "./MapControl";
import {IControlSection, IMarkerItem, IMarkersState, MapControlPosition} from "./types";
import {useUi} from "../../../store";


interface IGoogleMap extends Partial<GoogleMapProps> {
    children?: React.ReactNode;
    markerInfo?: React.ReactNode;
    onMarkerClick?: (id: string) => void;
    onItemSelect?: (id: string, state: boolean) => void
    markers?: ObjectIds<IMarkerItem>;
    controlSections?: IControlSection[];
    activeMarker?: IMarkerItem;
    markersState?: IMarkersState;

}





const GoogleMap = (props: IGoogleMap) => {
    const {
        children,
        controlSections = [],
        markerInfo,
        onMarkerClick = () => {},
        markers = {},
        activeMarker,
        onItemSelect,
        markersState = GMapConf.initialMarkersState,
        ...rest
    } = props;

    const mapRef = useRef();
    const {uiState} = useUi()

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: GMapConf.apiKey,
        language: 'he',
    });

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    // useEffect(() => {
    //
    // }, [uiState])


    const renderMap = () => {
        return <GMap
            zoom={GMapConf.zoom}
            center={GMapConf.center}
            options={{...GMapConf.options,styles:uiState.isDark?darkStyle:lightStyle}}
            onLoad={onMapLoad}
            {...rest}
        >
            {
                Object.values(markers).map((marker,index) => {
                    return <Marker
                        key={`${marker.id}-marker-item-${index}`}
                        onClick={onMarkerClick}
                        location={marker.location}
                        onItemSelect={onItemSelect}
                        active={markersState.activeItemId === marker.id}
                        selected={markersState.selectedIds.includes(marker.id)}
                        showInfoWindow={markersState.activeItemId!==null && markersState.activeItemId === marker.id}
                        title={String(marker.name)}
                        id={marker.id}
                        {...marker}
                    />
                })
            }
            {activeMarker && markerInfo!==null &&
                <InfoWindow  position={{lat: activeMarker.location.x, lng: activeMarker.location.y}}
                            onCloseClick={()=>onMarkerClick(null)}>
                    {markerInfo}
                </InfoWindow>}

            {controlSections && controlSections.map((section) => {
                return <MapControl
                                   key={section.id} position={section.position} id={section.id}>
                    {section.children}
                    </MapControl>
            })}
            {children}


        </GMap>
    }

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }

    return isLoaded ? renderMap() : <CircularProgress color="secondary"/>
};

const GMapConf = {
    apiKey:'AIzaSyC5AlihZSX4xudbvm2bLMcKBcvAZPXRbQk',
    initialMarkersState: {activeItemId: null, selectedIds: [], activeMarker: null},
    zoom:14,
    center:{
        lat:32.067429,
        lng:34.825187
    },
    disableDefaultUI: true,
    zoomControl: false,
    options:{
        disableDefaultUI: true,
        zoomControl: false,
        styles:[]
    }
}

const lightStyle = [
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            {visibility: "off"}
        ]
    },
    {
        featureType: "transit",
        elementType: "labels",
        stylers: [
            {visibility: "off"}
        ]
    }
    ]
const darkStyle = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
    },
    {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
    },
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [{visibility: "off"}]
    },
    {
        featureType: "transit",
        elementType: "labels",
        stylers: [{visibility: "off"}]
    }
    ]


export {GoogleMap};
