import {Column as Col, Options} from "@material-table/core";
import {Img, NumberInput} from "../../../components";
import React from "react";
import {TFunction} from "i18next";
import moment from "moment/moment";
import {MobileDateTimePicker} from "@mui/x-date-pickers";
import {ClassInput, CodeDisplay, ColorChips, ColorsInput, GameCodeInput} from "../WizardComponents";


export const tableOptions = (selectedGameId: string): Options<IGame> => (
    {
        columnsButton: true,
        detailPanelType: "single",
        // tableLayout: "fixed",
        // columnResizable: true,
        rowStyle: (rowData) => ({
            backgroundColor:
                selectedGameId === rowData.id ? "rgb(152, 255, 202 , 36%)" : "rgba(255,255,255,0.3)",
        }),
        headerStyle: {
            backgroundColor: "#EEE",
            color: "#000",
            textAlign: "center",
            fontWeight: "bold",
            whiteSpace: "nowrap",

        },
    }
)

export const tableActions = (t,onPlayClick:(game:IGame)=>void,onSaveClick:(game:IGame)=>void) => ([
    {
        icon: () => <Img img={"/svg/play-purple.svg"}/>,
        tooltip: t("games.play"),
        onClick: (event, rowData) => {
            console.log(rowData)
            onPlayClick(rowData)
        }
    },
    {
        icon: () => <Img img={"/svg/save-blue.svg"}/>,
        tooltip: t("games.save"),
        onClick: (event, rowData) => {
            console.log(rowData)
            onSaveClick(rowData)
        }
    }
])

const validateRequired = (value: any, message = "") => {
    return value !== "" && value !== null && value !== undefined && value !== 0;
}

export const cols = (t: TFunction<"translation", undefined, "translation">, userInfo: IUserInfoState): Array<Col<IGame>> => [
    {
        title: t("games.table.name"),
        field: 'name',
        align: 'center',
        initialEditValue: `Game-${new Date().getUTCMilliseconds()}`,
        validate: (row) => validateRequired(row.name, 'Name')
    },
    {
        title: t("games.table.teacher"),
        field: 'teacher',
        editable: 'never',
        align: 'center',
        render: (rowData: IGame) => rowData.teacher.firstName + ' ' + rowData.teacher.lastName,
        emptyValue: userInfo.firstName + ' ' + userInfo.lastName,
        cellStyle: {whiteSpace: 'nowrap'},
    },
    {
        title: t("games.table.class"),
        field: 'class',
        align: 'center',
        render: (rowData: IGame) => rowData.class?.name ?? '',
        validate: (row) => validateRequired(row.class?.name),
        editComponent: (props) => <ClassInput value={props.value} onSelected={props.onChange}/>
    },
    // {title: t("games.table.class"), field: 'class', render: (rowData: IGame) => rowData.class?.name ?? '', validate: (row) => validateRequired(row.class,'Class'),editComponent: (props) => <ClassInput classes={props.rowData.teacher.classes} onNewClass={props.onRowAdd}/>},
    {
        title: t("games.table.duration"),
        field: 'duration',
        type: 'numeric',
        align: 'center',
        initialEditValue: 20,
        editComponent: (props) => <NumberInput min={1} max={100} label="Minutes" value={props.value}
                                               onChange={props.onChange}/>
    },
    {
        title: t("games.table.groupCount"),
        field: 'groupCount',
        type: 'numeric',
        headerStyle: {textAlign: 'center'},
        align: 'center',
        width: 100,
        minWidth: 50,
        initialEditValue: 1,
        validate: (row) => validateRequired(row.groupCount),
        editComponent: (props) => <NumberInput min={1} max={14} label="Groups" value={props.value}
                                               onChange={props.onChange}/>
    },
    {
        title: t("games.table.colors"),
        field: 'colors',
        align: 'center',
        render: (rowData: IGame) => <ColorChips colors={rowData.colors}/>,
        // render: (rowData: IGame) => <ColorsInput value={rowData.colors} count={rowData.groupCount}/>,
        initialEditValue: [],
        editComponent: (props) => <ColorsInput value={props.value} onChange={props.onChange}
                                               count={props.rowData.groupCount}/>
    },
    {
        title: t("games.table.startTime"),
        field: 'startTime',
        type: 'datetime',
        align: 'center',
        render: (rowData: IGame) => moment.utc(rowData.startTime).format('DD/MM/YYYY HH:mm'),
        editComponent: (props) => <MobileDateTimePicker ampm={false} value={moment.utc(props.value)}
                                                        minDateTime={moment.utc().startOf('day')}
                                                        onChange={(value) => props.onChange(moment.utc(value))}/>
    },
    {
        title: t("games.table.code"), field: 'code', type: 'string',align: 'center',
        render: (rowData: IGame) => <CodeDisplay code={rowData.code}/>,
        validate: (row) => validateRequired(row.code, 'Code'),
        editComponent: (props) => <GameCodeInput value={props.value} onChange={props.onChange}/>
    },
    {title: 'gameId', field: 'id', hidden: true},
    {title: '_id', field: '_id', hidden: true},
    {title: 'id', field: '_id', hidden: true},
    {title: 'schoolId', field: 'schoolId', hidden: true, emptyValue: userInfo.school.id},
]
