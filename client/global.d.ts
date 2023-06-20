import {Theme} from '@mui/system';
import {IUserState} from './src/store/reducers';

declare global {
    type themeFunc = (theme: Theme) => string;
    type colorProp = themeFunc | string;
    type TypeNumColors = {
        [key: number]: string;
    };

    interface IGameState {
        games: IGame[];
    }

    interface IGroupColor {
        name: string;
        hex: string;
        heb: string;
    }

    interface IGame {
        _id: string;
        id: string;
        name: string;
        duration: number;
        groupCount: number;
        colors: IGroupColor[];
        code: string;
        startTime: number | string;
        players?: IUserState[];
        teacher: ITeacher;
        class: IClass;
        missions: Partial<IMission>[];
        draft?: boolean;
    }

    interface IPlayer {
        username: string;
        fullName: string;
        firstName: string;
        lastName: string;
        group: string;
        school: {
            id: string;
            name: string;
            city: string;
            address: string;
        };
        class: {
            id: string;
            name: string;
            score: string;
        };
        avatar: string;
        score: number;
        achievements: IAchievement[];
        currentGame: {
            game: IGame;
            currentMission: {
                mission: IMission;
                startTime: Date;
                endTime: Date;
            };
        };
    }

    interface IAchievement {
        id: string;
        game: IGame;
        mission: IMission;
        player: IPlayer;
        duration: number;
        score: number;
        playerTotal: number;
    }

    interface IGameMeta {
        name: string;
        duration: number;
        groupCount: number;
        colors: IGroupColor[];
        code: string;
        startTime: number;
    }

    interface IGameParams {
        teacherId: string;
        className: string;
        missions: Partial<IMission>[];
        metadata: Partial<IGameMeta>;
    }

    interface IHint {
        hint?: string;
        text?: string;
        image?: string;
        title?: string
    }

    interface ITarget {
        objectTag: string;
        image?: string;
        title?: string,
        location?: ILocation
    }

    interface IMission {
        name: string;
        description: string;
        hint: { hint?: string; text?: string; image?: string; title?: string };
        target: { objectTag: string; image?: string; title?: string, location?: ILocation,id:string };
        image: string;
        score: number;
        id: string;
        _id: string;
    }

    interface ILocation {
        x: number;
        y: number;
    }

    interface ISchool {
        name: string;
        city: string;
        address: string;
        location: { x: number; y: number };
        classes: string[] | IClass[] | any[];
        teachers: string[] | ITeacher[];
        _id: string;
        id: string;
    }

    interface IClass {
        id: string;
        name: string;
        score: number;
        teachers: any[];
        players: any[];
        school: any;
    }

    interface ClassOptionType extends Partial<IClass> {
        inputValue?: string;

    }

    interface ITeacher {
        school: ISchool | string;
        class: IClass | string;
        fullName: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }

    interface ObjectIds<T> {
        [id: string]: T
    }

    export interface IUserInfoState {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        school?: ISchool;
    }
    interface INewGameRequestParams {
        teacherId:string,
        className:string,
        missions:IMission[],
        metadata:{
            name:string,
            duration:number,
            groupCount:number,
            colors:string[],
            code:string,
            startTime:string,
        }
    }

    interface IAppMetadata {
        schools:number,
        classes:number,
        teachers:number,
        students:number,
        games:number,
    }

}

export {};
