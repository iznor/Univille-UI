import React from "react";
import {makeStyles} from 'tss-react/mui';
import { Row, tableButtons} from "components";
import MaterialTable, {Column as Col, DetailPanel} from "@material-table/core";
import {useTranslation} from "react-i18next";
import {useData, useUser} from "store";
import {cols, tableActions, tableOptions} from "./tableSettings";

interface IGamesTable {
    draftGames: Array<IGame>;
    onGameAdd: (newData: IGame) => Promise<void>;
    onGameUpdate: (newData: IGame, oldData: IGame) => Promise<void>;
    onGameDelete: (oldData: IGame) => Promise<void>;
    onGameSave: (game: IGame) => any;
    onPlayClick: (game: IGame) => any;
    selectedGameId: string;
    setEditor: (patch: (Partial<{ selectedGameId: string | null, draftGames: IGame[] }> | ((prevState: {
        selectedGameId: string | null,
        draftGames: IGame[]
    }) => Partial<{ selectedGameId: string | null, draftGames: IGame[] }>))) => void
    missionsPanel?: (({rowData}: {rowData: IGame}) => React.ReactNode) | (DetailPanel<IGame> | ((rowData: IGame) => DetailPanel<IGame>))[];


}

const GamesTable = (props: IGamesTable) => {
    const {draftGames, onGameAdd, onGameUpdate, onGameDelete, selectedGameId, setEditor,missionsPanel,onGameSave,onPlayClick} = props;
    const {classes, cx} = useStyle();
    const {t} = useTranslation();
    const {dataActions, dataState} = useData();
    const {userState} = useUser();

    const handleRowClick = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, rowData: IGame | undefined, togglePanel: ((panelIndex?: number | undefined) => void) | undefined) => {
        togglePanel();
        setEditor({selectedGameId: rowData.id});
    }
    return (
        <Row id={"game-table-wrapper"} className={cx(classes.root)}>
            <MaterialTable
                title={t("games.table.title")}
                columns={cols(t, userState.user)}
                data={draftGames}
                editable={{
                    onRowAdd: onGameAdd,
                    onRowUpdate: onGameUpdate,
                    onRowDelete: onGameDelete,
                }}
                icons={tableButtons}
                actions={tableActions(t,onPlayClick,onGameSave)}
                options={tableOptions(selectedGameId)}
                detailPanel={missionsPanel}
                onRowClick={handleRowClick}
            />

        </Row>
    );
};

export {GamesTable};


const useStyle = makeStyles()((theme) => ({
    root: {
        "&>.MuiPaper-root": {
            backgroundColor: theme.palette.app.bgInverse,
            width: "100%",
        }

    },

}));
