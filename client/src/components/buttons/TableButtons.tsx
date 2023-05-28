import React, {forwardRef} from "react";
import {Img} from "../Img";
import {SVG} from "../SVG";


export const tableButtons = {
    "Add": forwardRef((props, ref: React.Ref<SVGSVGElement>) => <SVG name={"plus-outlined"}/>),
    "Edit": forwardRef((props, ref: React.Ref<SVGSVGElement>) => <SVG name={"edit-pencil"}/>),
    "Delete": forwardRef((props, ref: React.Ref<SVGSVGElement>) => <SVG name={"delete-trash"} size={20}/>),
    "Check": forwardRef((props, ref: React.Ref<SVGSVGElement>) => <SVG name={"check-green"} size={20}/>),
    "Clear": forwardRef((props, ref: React.Ref<SVGSVGElement>) => <SVG name={"cancel-red"} size={20}/>),
    "ViewColumn": forwardRef((props, ref: React.Ref<SVGSVGElement>) => <SVG name={"columns"} size={20}/>),
    "Search": forwardRef((props, ref: React.Ref<SVGSVGElement>) => <SVG name={"search-magnifier"} size={20}/>),
}
