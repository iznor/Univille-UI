import {
    PlayerModel,
    SchoolModel,
    UserModel,
    ClassModel,
    MissionModel,
    GameModel,
    TeacherModel,
    AchievementModel
} from '../models';
import {HttpError, idGenerator} from "../../utils";
import bcrypt from "bcryptjs";

const schoolOsha = { name: 'אושא', address: 'המעפיל 9', city: 'רמת-גן',location: { x: 32.0901953, y: 34.8152453 } }

const missions1 = [
    {
        target:{
            objectTag:"",
            image:"",
            title:"",
            location:{x:0,y:0},
            id:"",
        },
        name:"",
        description:"",
        hint:{
            title:"",
            text:"",
            hint:"",
            image:"",
        },
        image:"",
        score:1,
    },
    {
        target:{
            objectTag:"",
            image:"",
            title:"",
            location:{x:0,y:0},
            id:"",
        },
        name:"",
        description:"",
        hint:{
            title:"",
            text:"",
            hint:"",
            image:"",
        },
        image:"",
        score:1,
    },
    {
        target:{
            objectTag:"",
            image:"",
            title:"",
            location:{x:0,y:0},
            id:"",
        },
        name:"",
        description:"",
        hint:{
            title:"",
            text:"",
            hint:"",
            image:"",
        },
        image:"",
        score:1,
    }
    ]
const game1  = {
    teacherId:'1',
    className:'',
    missions: [],
    metadata:{
        name:  '',
        duration:  '',
        groupCount:  '',
        colors:  '',
        code:  '',
        startTime: '',
    }
}

const teacherSignup = async (firstName, lastName, email, password, school) =>{
    try {
        const teacher = await TeacherModel.findOne({ email });
        if (teacher) {
            throw new Error('this email is already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newTeacher = await TeacherModel.createTeacher(
            { firstName, lastName, email,username:email, password: hashedPassword },
            school
        );
       return newTeacher
    } catch (e) {
        console.log("teacherSignup error",{firstName, lastName, email, password, school},e);
    }
}

const playerSignup = async (firstName, lastName, username, password, school, className, avatar)  =>{
    try {

        const teacher = await PlayerModel.findOne({username});
        if (teacher) {
            throw new Error('this email is already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newPlayer = await PlayerModel.createPlayer(
            {firstName, lastName, username, password: hashedPassword,avatar},
            school,
            className
        );
        return newPlayer
    } catch (e) {
        console.log("playerSignup error",{firstName, lastName, username, password, school, className, avatar},e);
    }
}

const createGame = async (teacherId, className, metadata,missionsArr) => {
    try {
        const newMissions = await MissionModel.createMissions(missionsArr);
        const missions = newMissions.map((m) => m._id);
        const newGame = await GameModel.createGame(
            { ...metadata, code: idGenerator(), missions },
            teacherId,
            className
        );
        newGame.id = newGame._id;
        const updatedGame = await newGame.save();
        return updatedGame
    } catch (e) {
        console.log("createGame error",{teacherId, className, metadata,missionsArr},e);
    }
}

const joinGame = async(playerId, gameCode )=> {

    try {
        const game = await GameModel.addPlayerByGameCode(gameCode, playerId);
        return game
    } catch (e) {
        console.log("joinGame error",{playerId, gameCode},e);
    }
}

const setAchievement=async(gameCode, playerId, missionId) =>{
    console.log('SET_ACHIEVEMENT');
    try {
        const achievement = await GameModel.setPlayerAchievement(gameCode, playerId, missionId);
        return achievement
    } catch (e) {
        console.log("setAchievement error",{gameCode, playerId, missionId},e);
    }
}
const giveColor=async(gameCode, playerId) =>{
    console.log('GIVE_COLOR');
    try {
        const color = await GameModel.giveColor(gameCode,playerId);
        return color
    } catch (e) {
        console.log("giveColor error",{gameCode, playerId},e);
    }
}
const setPlayerAchievement = async (gameCode, playerIdentity, missionIdentity , endTimestamp) => {
    const game = await GameModel.findOne({ code: gameCode });
    const player = await PlayerModel.findOneByIdentity(playerIdentity);
    const mission = await MissionModel.findById(missionIdentity);
    const achievement = await AchievementModel.createOne({
        player,
        mission: mission._id,
        game: game._id,
        duration: endTimestamp - game.startTime.getTime(),
        score: mission.score,
        playerTotal: player.score + mission.score,
    });
    await player.addNewAchievement(achievement);
    return achievement;
}
export const mockUpdate = async () => {
    const osha = new SchoolModel(schoolOsha);
    const savedOsha = await osha.save();
    const oshaClass = await osha.createClass('ה2');
    const oshaTeacher = await teacherSignup('אושא', 'מורה', 'T1@UNIVILLE.COM', '123456', osha._id);

    const zomer = await SchoolModel.findById('64748f93027a00b1515a36f4')
    const zomerClass = await zomer.createClass('ה2');
    const zomerTeacher = await teacherSignup('זומר', 'מורה', 'T2@UNIVILLE.COM', '123456', zomer._id);
    // {firstName, lastName, username, password, school, className, avatar}

}
