import React from "react";
import {makeStyles} from 'tss-react/mui';
import {Box} from "@mui/material";
import {Column, IMarkersState, Img, IStaticTarget, NumberInput, P, tableButtons} from "../../../components";
import MaterialTable, {Column as Col, MTableToolbar} from "@material-table/core";
import {useTranslation} from "react-i18next";
import {
    HintDisplay,
    HintInput,
    TargetCard,
    TargetDisplay,
    TargetInput,
    TargetsInputMultiple
} from "../WizardComponents";
import {useSetState} from "react-use";
import {DescriptionInput} from "../WizardComponents/DescriptionInput";
import {DescriptionDisplay} from "../WizardComponents/DescriptionInput/DescriptionDisplay";

interface IMissionsTable {
    game: IGame;
    onMissionAdd: (newData: Partial<IMission>[], gameId: string) => Promise<void>;
    onMissionsAdd: (newData: Partial<IMission>[], gameId: string) => void;
    onMissionUpdate: (newData: Partial<IMission>[], oldData: IMission, gameId: string) => Promise<void>;
    onMissionDelete: (oldData: Partial<IMission>[], gameId: string) => Promise<void>;
    staticItems: ObjectIds<IStaticTarget>
}

const MissionsTable = (props: IMissionsTable) => {
    const {game, onMissionAdd, onMissionUpdate, onMissionDelete, staticItems, onMissionsAdd} = props;
    const {classes, cx} = useStyle();
    const {t} = useTranslation();
    // const [{activeItemId, selectedIds, activeMarker}, setState] =
    //     useSetState({activeItemId: null, selectedIds: [], activeMarker: null});

    // const handleItemClick = (id: string) => {
    //     console.log('item click', id, staticItems[id])
    //     setState({activeItemId: id, activeMarker: staticItems[id]});
    // }
    //
    // const handleItemSelect = (id: string, state: boolean) => {
    //     console.log('item select', id, state)
    //     if (!selectedIds.includes(id)) {
    //         setState({selectedIds: [...selectedIds, id]});
    //     } else {
    //         setState({selectedIds: selectedIds.filter((selectedId) => selectedId !== id)});
    //     }
    // }
    //
    // const handleMarkerClick = (id: string) => {
    //     console.log('marker click', id, staticItems[id], activeMarker)
    //     setState({activeItemId: id, activeMarker: staticItems[id]});
    // }

    const handleMultipleMissionAdd = (values: Partial<IMission>[]) => {
        console.log(values)
        onMissionsAdd(values, game._id ?? game._id ?? '')
    }
    const handleMissionAdd = async (newData: any) => {
        console.log(newData, game._id)
        await onMissionAdd(newData, game._id)
    }
    const handleMissionUpdate = async (newData: any, oldData: any) => {
        console.log(newData)
        await onMissionUpdate(newData, oldData, game._id)
    }
    const handleMissionDelete = async (oldData: any) => {
        console.log(oldData)
        await onMissionDelete(oldData, game._id)
    }
    return (
        <Box className={cx(classes.root)}>
            <MaterialTable
                title={<TargetsInputMultiple values={game.missions} onValuesChange={handleMultipleMissionAdd}/>}
                columns={missionColumns()}
                data={game.missions ?? []}
                editable={{
                    onRowAdd: handleMissionAdd,
                    onRowUpdate: handleMissionUpdate,
                    onRowDelete: handleMissionDelete,
                }}
                icons={tableButtons}
                actions={[
                    {
                        icon: () => <Img img={"/svg/save-blue.svg"}/>,
                        tooltip: t("missions.save"),
                        onClick: (event, row) => console.log(row)
                    }
                ]}
                // cellEditable={{
                //   cellStyle: {},
                //   onCellEditApproved: (
                //     newValue,
                //     oldValue,
                //     rowData,
                //     columnDef
                //   ) => {
                //     return new Promise((resolve, reject) => {
                //       console.log({
                //           newValue,
                //           oldValue,
                //           rowData,
                //           columnDef
                //       });
                //       setTimeout(resolve, 4000);
                //     });
                //   },
                //   isCellEditable: (rowData, columnDef) => {
                //     return !(columnDef.field === "score" );
                //   },
                // }}

                //     components={{
                //     Toolbar: props => (
                //         <div style={{ backgroundColor: '#e8eaf5' }}>
                //             <MTableToolbar {...props} />
                //         </div>
                //     )
                // }}
                options={{

                    columnsButton: false, search: false, paging: false,
                    rowStyle: (rowData) => ({
                        backgroundColor: "rgba(255,255,255,0.3)"
                    }),
                    headerStyle: {
                        backgroundColor: "rgb(152, 255, 202 , 36%)",
                        textAlign: "center",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",

                    },
                }}
            />
        </Box>
    );
};

export {MissionsTable};

const missionColumns = (): Array<Col<Partial<IMission>>> => [
    {
        title: 'Hint',
        field: 'hint',
        // width: "100px",
        // minWidth: 100,
        render: (rowData: IMission) => <HintDisplay hint={rowData.hint}/>,
        editComponent: (props) => <HintInput value={props.value} onValueChange={props.onChange}/>
    },
    {
        title: 'Target',
        field: 'target',
        // width: "100px",
        // minWidth: 100,
        render: (rowData: IMission) => <TargetCard target={rowData.target}/>,
        editComponent: (props) => (
            <TargetInput
                value={props.value}
                onValueChange={props.onRowDataChange}
            />)

    },
    {
        title: 'Name',
        field: 'name',
        type: 'string',
        // width: 100,
        // minWidth: 100,
        render: (rowData: IMission) => rowData?.name ?? ""}
    ,
    {
        title: 'Score',
        field: 'score',
        type: 'numeric',
        headerStyle: {textAlign: 'center'},
        align: 'center',
        width: 100,
        minWidth: 50,
        editComponent: (props) => <NumberInput min={1} max={10000} label="Points" value={props.value}
                                               onChange={props.onChange}/>
    },
    {
        title: 'Description',
        field: 'description',
        type: 'string',
        // width: 150,
        // minWidth: 100,
        render: (rowData: IMission) => <DescriptionDisplay description={rowData.description}/>,
        editComponent: (props) => <DescriptionInput value={props.value} onValueChange={props.onChange}/>
    },

    {title: 'id', field: 'id', type: 'string', editable: 'never', hidden: true},
    {title: '_id', field: '_id', type: 'string', editable: 'never', hidden: true},


]

interface IMissionColumnsArgs {
    markersState: IMarkersState,
    targetItems: ObjectIds<IStaticTarget>,
    onItemSelect: (id: string, state: boolean) => void,
    onItemClick: (id: string) => void,
    onMarkerClick: (id: string) => void
}

const useStyle = makeStyles()((theme) => ({
    root: {

    },

}));
