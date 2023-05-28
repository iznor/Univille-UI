import {Button, Card, CardActions, CardContent, CardMedia, Typography, Paper, Box} from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import React from "react";
import {Img} from "../../Img";
import {P} from "../../text";
import {SVG} from "../../SVG";

interface ITargetModal {
    name?: string;
    description?: string;
    objectPhotoUrl?: string;
    mapPhotoUrl?: string;
    onItemSelect?: (id: string, state?: boolean) => void;

    [key: string]: any;

}

const TargetModal = (props: ITargetModal) => {
    const {name, description, objectPhotoUrl, mapPhotoUrl,onItemSelect} = props;
    return (
        <Card sx={{maxWidth: 270,minWidth: 270,padding:0,mt:3,ml:4.5,boxShadow:'none'
        }}>
            <Box sx={{height: 105}}>
                <Carousel autoPlay={false}>
                    < Img src={objectPhotoUrl} width={250} height={100}/>
                    <Img src={mapPhotoUrl} width={250} height={100}/>
                </Carousel>
            </Box>
            <CardContent sx={{height: 100}}>
                <Typography gutterBottom variant="h3" component="div" sx={{textAlign:'center',mt:'5px'}}>
                    {name}
                </Typography>
                <Typography variant="body2"
                            color="text.primary"
                            sx={{maxHeight: '50px', overflowY: 'auto'}}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{height:30}}>
                <Button size="small" onClick={()=>onItemSelect(props.id)}>
                    {props.selected?<SVG name={"delete-trash"}/>:<SVG name={"add-plus"}/>}
                    <P sx={{ml:1}}>הוסף</P>
                </Button>
            </CardActions>
        </Card>
    )
        ;
};

export {TargetModal};
