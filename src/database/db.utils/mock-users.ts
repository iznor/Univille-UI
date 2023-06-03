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

const schoolOsha = {name: 'אושא', address: 'המעפיל 9', city: 'רמת-גן', location: {x: 32.0901953, y: 34.8152453}}


const oshaData = [
    {
        "username": "V_1578556686",
        "userId": "6449b416e350429df0d6ee29",
        "color": "Green",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:31:56.124735+00:00",
            "2023-04-27T06:33:55.196550+00:00",
            "2023-04-27T06:34:55.196550+00:00",
            "2023-04-27T06:36:53.834744+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.213780+00:00",
        "endTime": "2023-04-26T23:37:08.826923+00:00"
    }, {
        "username": "V_931176719",
        "userId": "644a060ce350429df08a2ea4",
        "score": 1,
        "missionsTimestamp": [
            "2023-04-27T06:33:20.124735+00:00",
            "2023-04-27T06:34:32.196550+00:00",
            "2023-04-27T06:35:32.196550+00:00",
            "2023-04-27T06:37:55.834744+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.213780+00:00",
        "endTime": ""
    },{
        "username": "V_-310992135",
        "userId": "644a0a97e350429df0941163",
        "score": 0,
        "missionsTimestamp": [
            "2023-04-27T06:31:22.124735+00:00",
            "2023-04-27T06:33:54.196550+00:00",
            "2023-04-27T06:35:54.196550+00:00",
            "2023-04-27T06:37:32.834744+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.213780+00:00",
        "endTime": ""
    },{
        "username": "V_-248696813",
        "userId": "644a0a9de350429df0941ba1",
        "score": 0,
        "missionsTimestamp": [
            "2023-04-27T06:32:22.124735+00:00",
            "2023-04-27T06:35:46.196550+00:00",
            "2023-04-27T06:35:46.196550+00:00",
            "2023-04-27T06:37:42.834744+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.213780+00:00",
        "endTime": ""
    },{
        "username": "V_-192812638",
        "userId": "644a0aa3e350429df0942817",
        "score": 0,
        "missionsTimestamp": [
            "2023-04-27T06:32:56.124735+00:00",
            "2023-04-27T06:33:55.196550+00:00",
            "2023-04-27T06:34:55.196550+00:00",
            "2023-04-27T06:36:53.834744+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.213780+00:00",
        "endTime": ""
    }, {
        "username": "V_-169103867",
        "userId": "644a0aa5e350429df0942e09",
        "score": 0,
        "missionsTimestamp": [
            "2023-04-27T06:32:56.124735+00:00",
            "2023-04-27T06:34:55.196550+00:00",
            "2023-04-27T06:33:55.196550+00:00",
            "2023-04-27T06:35:53.834744+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.213780+00:00",
        "endTime": ""
    },{
        "username": "V_1526744780",
        "userId": "644a0b4fe350429df095a903",
        "score": 0,
        "missionsTimestamp": [
            "2023-04-27T06:34:56.124735+00:00",
            "2023-04-27T06:35:55.196550+00:00",
            "2023-04-27T06:36:55.196550+00:00",
            "2023-04-27T06:39:53.834744+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.213780+00:00",
        "endTime": ""
    }, {
        "username": "V_-818791392",
        "userId": "644a0dc0e350429df09b0e96",
        "score": 2,
        "missionsTimestamp": [
            "2023-04-27T06:31:33.124735+00:00",
            "2023-04-27T06:33:52.196550+00:00",
            "2023-04-27T06:35:52.196550+00:00",
            "2023-04-27T06:37:52.834744+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.213780+00:00",
        "endTime": ""
    }, {
        "username": "V_-1960232169",
        "userId": "644a0efce350429df09dc939",
        "score": 0,
        "missionsTimestamp": [
            "2023-04-27T06:32:56.124735+00:00",
            "2023-04-27T06:35:55.196550+00:00",
            "2023-04-27T06:35:55.196550+00:00",
            "2023-04-27T06:38:53.834744+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.213780+00:00",
        "endTime": ""
    }, {
        "username": "V_-1186194715",
        "userId": "644a10f6e350429df0a22ebe",
        "score": 1,
        "missionsTimestamp": [
            "2023-04-27T06:34:56.124735+00:00",
            "2023-04-27T06:35:55.196550+00:00",
            "2023-04-27T06:36:55.196550+00:00",
            "2023-04-27T06:39:53.834744+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.213780+00:00",
        "endTime": ""
    }, {
        "username": "V_467711438",
        "userId": "644a1347e350429df0a73716",
        "score": 0,
        "missionsTimestamp": [
            "2023-04-27T06:31:56.124735+00:00",
            "2023-04-27T06:34:55.196550+00:00",
            "2023-04-27T06:34:55.196550+00:00",
            "2023-04-27T06:37:53.834744+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.213780+00:00",
        "endTime": ""
    },{
        "username": "V_-801264233",
        "userId": "644a1477e350429df0a9c346",
        "score": 1,
        "missionsTimestamp": [
            "2023-04-27T06:33:56.124735+00:00",
            "2023-04-27T06:34:55.196550+00:00",
            "2023-04-27T06:35:55.196550+00:00",
            "2023-04-27T06:37:53.834744+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.213780+00:00",
        "endTime": ""
    }, {
        "username": "V_136634458",
        "userId": "644a1683e350429df0ae24e9",
        "color": "Orange",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:32:01.097274+00:00",
            "2023-04-27T06:34:47.823092+00:00",
            "2023-04-27T06:34:47.823092+00:00",
            "2023-04-27T06:37:16.524418+00:00"
        ],
        "startTime": "2023-04-27T06:30:27.479348+00:00",
        "endTime": "2023-04-27T06:44:47.506505+00:00"
    }, {
        "username": "V_162535063",
        "userId": "644a1685e350429df0ae2acd",
        "color": "Blue",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:33:57.746074+00:00",
            "2023-04-27T06:34:24.962017+00:00",
            "2023-04-27T06:36:24.962017+00:00",
            "2023-04-27T06:41:02.607228+00:00"
        ],
        "startTime": "2023-04-27T06:30:30.007795+00:00",
        "endTime": "2023-04-27T06:45:14.191182+00:00"
    }, {
        "username": "V_183186701",
        "userId": "644a1687e350429df0ae2de8",
        "color": "Red",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:32:54.638676+00:00",
            "2023-04-27T06:33:48.063377+00:00",
            "2023-04-27T06:34:48.063377+00:00",
            "2023-04-27T06:37:46.287496+00:00"
        ],
        "startTime": "2023-04-27T06:30:31.193268+00:00",
        "endTime": "2023-04-27T06:44:51.078759+00:00"
    }, {
        "username": "V_201098636",
        "userId": "644a1688e350429df0ae31a8",
        "color": "Blue",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:36:01.822156+00:00",
            "2023-04-27T06:37:30.185548+00:00",
            "2023-04-27T06:40:30.185548+00:00",
            "2023-04-27T06:43:50.720616+00:00"
        ],
        "startTime": "2023-04-27T06:30:32.927527+00:00",
        "endTime": "2023-04-27T06:45:39.647047+00:00"
    },{
        "username": "V_201796426",
        "userId": "644a168ae350429df0ae353f",
        "score": 1,
        "missionsTimestamp": [
            "2023-04-27T06:36:01.822156+00:00",
            "2023-04-27T06:37:30.185548+00:00",
            "2023-04-27T06:40:30.185548+00:00",
            "2023-04-27T06:43:50.720616+00:00"
        ],
        "startTime": "2023-04-27T06:30:34.463603+00:00",
        "endTime": ""
    }, {
        "username": "V_239510573",
        "userId": "644a168de350429df0ae3ae7",
        "color": "Red",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:33:56.124735+00:00",
            "2023-04-27T06:34:55.196550+00:00",
            "2023-04-27T06:35:55.196550+00:00",
            "2023-04-27T06:37:53.834744+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.213780+00:00",
        "endTime": "2023-04-27T06:38:16.074673+00:00"
    },{
        "username": "V_251003668",
        "userId": "644a168de350429df0ae3bee",
        "color": "Orange",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:33:10.301235+00:00",
            "2023-04-27T06:34:48.198484+00:00",
            "2023-04-27T06:35:48.198484+00:00",
            "2023-04-27T06:38:06.926645+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.612252+00:00",
        "endTime": "2023-04-27T06:38:16.813497+00:00"
    }, {
        "username": "V_243950374",
        "userId": "644a168de350429df0ae3c45",
        "color": "Red",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:33:24.438359+00:00",
            "2023-04-27T06:35:39.356500+00:00",
            "2023-04-27T06:36:39.356500+00:00",
            "2023-04-27T06:38:21.869170+00:00"
        ],
        "startTime": "2023-04-27T06:30:37.801321+00:00",
        "endTime": "2023-04-27T06:38:22.203047+00:00"
    }, {
        "username": "V_276855244",
        "userId": "644a1690e350429df0ae4448",
        "color": "Red",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:41:52.605696+00:00",
            "2023-04-27T06:43:09.444867+00:00",
            "2023-04-27T06:44:09.444867+00:00",
            "2023-04-27T06:44:09.444867+00:00"
        ],
        "startTime": "2023-04-27T06:30:40.948593+00:00",
        "endTime": "2023-04-27T06:45:20.301986+00:00"
    }, {
        "username": "V_302673104",
        "userId": "644a1693e350429df0ae4b4e",
        "color": "Green",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:33:51.900362+00:00",
            "2023-04-27T06:35:04.231060+00:00",
            "2023-04-27T06:36:04.231060+00:00",
            "2023-04-27T06:39:26.750535+00:00"
        ],
        "startTime": "2023-04-27T06:30:43.669629+00:00",
        "endTime": "2023-04-27T06:46:09.908031+00:00"
    },{
        "username": "V_320733248",
        "userId": "644a1695e350429df0ae4fc4",
        "score": 0,
        "missionsTimestamp": [
            "2023-04-27T06:35:29.062315+00:00",
            "2023-04-27T06:36:32.506299+00:00",
            "2023-04-27T06:37:32.506299+00:00",
            "2023-04-27T06:40:45.598671+00:00"
        ],
        "startTime": "2023-04-27T06:30:49.604065+00:00",
        "endTime": ""
    },{
        "username": "V_322283520",
        "missionsTimestamp": [
            "2023-04-27T06:33:29.062315+00:00",
            "2023-04-27T06:35:32.506299+00:00",
            "2023-04-27T06:36:32.506299+00:00",
            "2023-04-27T06:47:45.598671+00:00"
        ],
        "startTime": "2023-04-27T06:30:49.604065+00:00",
        "endTime": ""
    },{
        "username": "V_361246302",
        "userId": "644a1699e350429df0ae58d1",
        "color": "Red",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:34:29.062315+00:00",
            "2023-04-27T06:36:32.506299+00:00",
            "2023-04-27T06:37:32.506299+00:00",
            "2023-04-27T06:40:45.598671+00:00"
        ],
        "startTime": "2023-04-27T06:30:49.604065+00:00",
        "endTime": "2023-04-27T06:45:31.802103+00:00"
    }, {
        "username": "V_381268384",
        "userId": "644a169be350429df0ae5e5c",
        "color": "Red",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:33:12.346559+00:00",
            "2023-04-27T06:35:36.172308+00:00",
            "2023-04-27T06:36:36.172308+00:00",
            "2023-04-27T06:38:02.394223+00:00"
        ],
        "startTime": "2023-04-27T06:30:51.693283+00:00",
        "endTime": "2023-04-27T06:40:26.086893+00:00"
    }, {
        "username": "V_402293392",
        "userId": "644a169de350429df0ae6296",
        "color": "Yellow",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:33:41.794677+00:00",
            "2023-04-27T06:35:52.906900+00:00",
            "2023-04-27T06:36:52.906900+00:00",
            "2023-04-27T06:38:43.537451+00:00"
        ],
        "startTime": "2023-04-27T06:30:53.797901+00:00",
        "endTime": "2023-04-27T06:44:02.853483+00:00"
    }, {
        "username": "V_403653203",
        "userId": "644a169ee350429df0ae634d",
        "color": "Yellow",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:33:17.009184+00:00",
            "2023-04-27T06:35:44.990886+00:00",
            "2023-04-27T06:36:44.990886+00:00",
            "2023-04-27T06:38:35.297649+00:00"
        ],
        "startTime": "2023-04-27T06:30:54.201580+00:00",
        "endTime": "2023-04-27T06:43:10.791247+00:00"
    },{
        "username": "V_540263311",
        "userId": "644a16abe350429df0ae8135",
        "color": "Red",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:33:54.327093+00:00",
            "2023-04-27T06:34:21.036997+00:00",
            "2023-04-27T06:36:21.036997+00:00",
            "2023-04-27T06:40:34.701459+00:00"
        ],
        "startTime": "2023-04-27T06:31:07.668417+00:00",
        "endTime": "2023-04-27T06:41:18.526203+00:00"
    }, {
        "username": "V_1037912058",
        "userId": "644a16dde350429df0aee9d4",
        "color": "Red",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:33:52.465196+00:00",
            "2023-04-27T06:34:56.343550+00:00",
            "2023-04-27T06:35:56.343550+00:00",
            "2023-04-27T06:39:17.394085+00:00"
        ],
        "startTime": "2023-04-27T06:31:57.242402+00:00",
        "endTime": "2023-04-27T06:39:17.617236+00:00"
    }, {
        "username": "V_1048462820",
        "userId": "644a16dde350429df0aeea02",
        "color": "Blue",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T06:33:03.646403+00:00",
            "2023-04-27T06:35:34.593963+00:00",
            "2023-04-27T06:36:34.593963+00:00",
            "2023-04-27T06:37:48.398152+00:00"
        ],
        "startTime": "2023-04-27T06:31:57.300154+00:00",
        "endTime": "2023-04-27T06:37:48.522181+00:00"
    },
]

const zomerData = [
   {
        "username": "V_-1726794759",
        "userId": "644a3903e350429df0fb64dc",
        "score": 0,
        "missionsTimestamp": [
            "2023-04-27T09:39:42.909936+00:00",
            "2023-04-27T09:40:04.907030+00:00",
            "2023-04-27T09:41:04.907030+00:00",
            "2023-04-27T09:42:21.974956+00:00"
        ],
        "startTime": "2023-04-27T09:25:37.048778+00:00",
        "endTime": ""
    },{
        "username": "V_701311720",
        "userId": "644a3bd1e350429df001c1e3",
        "score": 1,
        "missionsTimestamp": [
            "2023-04-27T09:33:42.909936+00:00",
            "2023-04-27T09:34:04.907030+00:00",
            "2023-04-27T09:35:04.907030+00:00",
            "2023-04-27T09:37:21.974956+00:00"
        ],
        "startTime": "2023-04-27T09:25:37.048778+00:00",
        "endTime": ""
    }, {
        "username": "V_1957636832",
        "userId": "644a3f7ce350429df00a3d87",
        "score": 0,
        "missionsTimestamp": [
            "2023-04-27T09:31:42.909936+00:00",
            "2023-04-27T09:32:04.907030+00:00",
            "2023-04-27T09:33:04.907030+00:00",
            "2023-04-27T09:35:21.974956+00:00"
        ],
        "startTime": "2023-04-27T09:25:37.048778+00:00",
        "endTime": ""
    },{
        "username": "V_1962548834",
        "userId": "644a3f7ce350429df00a3e85",
        "color": "Orange",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:30:42.909936+00:00",
            "2023-04-27T09:31:04.907030+00:00",
            "2023-04-27T09:32:04.907030+00:00",
            "2023-04-27T09:33:21.974956+00:00"
        ],
        "startTime": "2023-04-27T09:25:37.048778+00:00",
        "endTime": ""
    }, {
        "username": "V_2097265858",
        "userId": "644a3f8ae350429df00a5bcc",
        "color": "Green",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:31:42.909936+00:00",
            "2023-04-27T09:32:04.907030+00:00",
            "2023-04-27T09:33:04.907030+00:00",
            "2023-04-27T09:37:21.974956+00:00"
        ],
        "startTime": "2023-04-27T09:25:37.048778+00:00",
        "endTime": ""
    },{
        "username": "V_-1499295894",
        "userId": "644a3f91e350429df00a6ae4",
        "color": "Green",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:30:42.909936+00:00",
            "2023-04-27T09:31:04.907030+00:00",
            "2023-04-27T09:33:04.907030+00:00",
            "2023-04-27T09:35:21.974956+00:00"
        ],
        "startTime": "2023-04-27T09:25:37.048778+00:00",
        "endTime": "2023-04-27T09:35:22.774811+00:00"
    }, {
        "username": "V_-2090615165",
        "userId": "644a3f94e350429df00a7469",
        "color": "Blue",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:30:42.909936+00:00",
            "2023-04-27T09:31:04.907030+00:00",
            "2023-04-27T09:33:04.907030+00:00",
            "2023-04-27T09:35:21.974956+00:00"
        ],
        "startTime": "2023-04-27T09:25:37.048778+00:00",
        "endTime": ""
    },{
        "username": "V_-2048248552",
        "userId": "644a3f99e350429df00a7e08",
        "color": "Blue",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:30:53.909936+00:00",
            "2023-04-27T09:31:33.907030+00:00",
            "2023-04-27T09:33:33.907030+00:00",
            "2023-04-27T09:35:34.974956+00:00"
        ],
        "startTime": "2023-04-27T09:25:37.048778+00:00",
        "endTime": ""
    }, {
        "username": "V_-2045893630",
        "userId": "644a3f99e350429df00a7e22",
        "color": "Red",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:30:55.537695+00:00",
            "2023-04-27T09:31:32.377567+00:00",
            "2023-04-27T09:32:32.377567+00:00",
            "2023-04-27T09:33:51.810799+00:00"
        ],
        "startTime": "2023-04-27T09:25:45.282866+00:00",
        "endTime": "2023-04-27T09:35:52.892144+00:00"
    },{
        "username": "V_-2035621912",
        "userId": "644a3f9ae350429df00a80c1",
        "color": "Green",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:00.355006+00:00",
            "2023-04-27T09:30:10.707101+00:00",
            "2023-04-27T09:31:10.707101+00:00",
            "2023-04-27T09:33:02.127900+00:00"
        ],
        "startTime": "2023-04-27T09:25:46.472131+00:00",
        "endTime": ""
    },{
        "username": "V_-2029833334",
        "userId": "644a3f9be350429df00a8267",
        "color": "Green",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:55.537695+00:00",
            "2023-04-27T09:32:32.377567+00:00",
            "2023-04-27T09:33:32.377567+00:00",
            "2023-04-27T09:36:51.810799+00:00"
        ],
        "startTime": "2023-04-27T09:25:45.282866+00:00",
        "endTime": ""
    }, {
        "username": "V_-1931587020",
        "userId": "644a3fa3e350429df00a985c",
        "color": "Yellow",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:23.057770+00:00",
            "2023-04-27T09:31:27.273229+00:00",
            "2023-04-27T09:32:27.273229+00:00",
            "2023-04-27T09:36:33.810799+00:00"
        ],
        "startTime": "2023-04-27T09:25:55.619512+00:00",
        "endTime": ""
    }, {
        "username": "V_-1912074744",
        "userId": "644a3fa6e350429df00a9e31",
        "color": "Blue",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:25.261071+00:00",
            "2023-04-27T09:30:01.007967+00:00",
            "2023-04-27T09:30:29.007967+00:00",
            "2023-04-27T09:32:42.002693+00:00"
        ],
        "startTime": "2023-04-27T09:25:58.687936+00:00",
        "endTime": ""
    },{
        "username": "V_-1912696673",
        "userId": "644a3fa7e350429df00a9f8d",
        "color": "Orange",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:05.110752+00:00",
            "2023-04-27T09:32:33.014089+00:00",
            "2023-04-27T09:35:33.014089+00:00",
            "2023-04-27T09:38:42.002693+00:00"
        ],
        "startTime": "2023-04-27T09:25:59.303205+00:00",
        "endTime": ""
    }, {
        "username": "V_-1964267800",
        "userId": "644a3fa9e350429df00aa4c3",
        "color": "Green",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:04.345696+00:00",
            "2023-04-27T09:30:01.231581+00:00",
            "2023-04-27T09:30:44.231581+00:00",
            "2023-04-27T09:34:42.002693+00:00"
        ],
        "startTime": "2023-04-27T09:26:01.145824+00:00",
        "endTime": ""
    }, {
        "username": "V_-1878447858",
        "userId": "644a3faae350429df00aa83b",
        "color": "Yellow",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:19.899001+00:00",
            "2023-04-27T09:32:22.464456+00:00",
            "2023-04-27T09:33:22.464456+00:00",
            "2023-04-27T09:33:42.002693+00:00"
        ],
        "startTime": "2023-04-27T09:26:02.129140+00:00",
        "endTime": ""
    }, {
        "username": "V_-1830931286",
        "userId": "644a3fafe350429df00ab2bf",
        "color": "Green",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:02.216720+00:00",
            "2023-04-27T09:31:00.612928+00:00",
            "2023-04-27T09:31:25.612928+00:00",
            "2023-04-27T09:33:56.366876+00:00"
        ],
        "startTime": "2023-04-27T09:26:07.506029+00:00",
        "endTime": ""
    }, {
        "username": "V_-1821162440",
        "userId": "644a3fafe350429df00ab3e3",
        "color": "Orange",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:28.194474+00:00",
            "2023-04-27T09:30:22.033620+00:00",
            "2023-04-27T09:30:42.033620+00:00",
            "2023-04-27T09:32:33.775548+00:00"
        ],
        "startTime": "2023-04-27T09:26:07.858767+00:00",
        "endTime": ""
    },{
        "username": "V_-1766560749",
        "userId": "644a3fb5e350429df00ac0a1",
        "color": "Green",
        "score": 0,
        "missionsTimestamp": [
            "2023-04-27T09:29:00.898472+00:00",
            "2023-04-27T09:30:12.530824+00:00",
            "2023-04-27T09:30:41.530824+00:00",
            "2023-04-27T09:34:43.745231+00:00"
        ],
        "startTime": "2023-04-27T09:26:13.544495+00:00",
        "endTime": "2023-04-27T09:29:22.302929+00:00"
    },{
        "username": "V_-1666164130",
        "userId": "644a3fbfe350429df00ad4d0",
        "color": "Yellow",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:00.898472+00:00",
            "2023-04-27T09:30:00.530824+00:00",
            "2023-04-27T09:30:41.530824+00:00",
            "2023-04-27T09:34:43.745231+00:00"
        ],
        "startTime": "2023-04-27T09:26:23.290676+00:00",
        "endTime": ""
    },{
        "username": "V_-1543079638",
        "userId": "644a3fcbe350429df00aed63",
        "color": "Green",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:24.583625+00:00",
            "2023-04-27T09:30:22.433823+00:00",
            "2023-04-27T09:30:52.433823+00:00",
            "2023-04-27T09:36:16.092420+00:00"
        ],
        "startTime": "2023-04-27T09:26:35.623614+00:00",
        "endTime": ""
    },{
        "username": "V_-1448423777",
        "userId": "644a3fd5e350429df00b00e8",
        "color": "Blue",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:27.813378+00:00",
            "2023-04-27T09:30:00.940478+00:00",
            "2023-04-27T09:30:28.940478+00:00",
            "2023-04-27T09:34:05.302795+00:00"
        ],
        "startTime": "2023-04-27T09:26:45.114318+00:00",
        "endTime": ""
    },{
        "username": "V_-1176313769",
        "userId": "644a3fe4e350429df00b2cf4",
        "color": "Green",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:30:16.915719+00:00",
            "2023-04-27T09:31:00.023023+00:00",
            "2023-04-27T09:31:30.023023+00:00",
            "2023-04-27T09:33:24.111604+00:00"
        ],
        "startTime": "2023-04-27T09:27:00.802630+00:00",
        "endTime": "2023-04-27T09:36:14.308287+00:00"
    }, {
        "username": "V_-364528657",
        "userId": "644a4040e350429df00bf656",
        "color": "Red",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:29.400163+00:00",
            "2023-04-27T09:31:44.682360+00:00",
            "2023-04-27T09:32:44.682360+00:00",
            "2023-04-27T09:35:27.728792+00:00"
        ],
        "startTime": "2023-04-27T09:28:32.781805+00:00",
        "endTime": ""
    },{
        "username": "V_327543799",
        "userId": "644a4086e350429df00c91f0",
        "color": "Green",
        "score": 4,
        "missionsTimestamp": [
            "2023-04-27T09:29:58.670544+00:00",
            "2023-04-27T09:30:18.145621+00:00",
            "2023-04-27T09:31:18.145621+00:00",
            "2023-04-27T09:35:27.728792+00:00"
        ],
        "startTime": "2023-04-27T09:29:42.755898+00:00",
        "endTime": ""
    }
]

const missions = [
    {
        target: {
            objectTag: "BusStation1",
            image: "images/locations/BusStation.png",
            title: "תחנת אוטובוס",
            location: {x: 32.0837559, y: 34.8012767},
        },
        name: "תחנת אוטובוס",
        description: "תחנת אוטובוס",
        hint: {
            title: "תחנת אוטובוס",
            hint: "היום נלך לנקות את גן המלך דוד, עליך להגיע לתחנת האוטובוס הקרובה לקבלת הרמז הבא",
            image: "images/locations/BusStation.png",
        },
        image: "images/locations/BusStation.png",
        score: 1,
    },
    {
        target: {
            objectTag: "100_MosheAvivBuilding",
            image: "images/locations/100_MosheAvivBuilding_real.png",
            title: "מגדל משה אביב",
            location: {x: 32.08391, y: 34.803862},
        },
        name: "מגדל משה אביב",
        description: "מגדל משה אביב או בשמו השני מגדל אוסיף-אביב על שם החברה שבנתה אותו, הידוע גם בשמו הקודם מגדל שער העיר, הוא גורד שחקים ברח' ז'בוטינסקי 7, סמוך למתחם הבורסה שברמת גן. המגדל בעל 68 הקומות מתנשא לגובה של 235 מטר. המגדל היה גורד השחקים הגבוה בישראל עד בניית מגדל עזריאלי שרונה בשנת 2016, שגבוה ממנו ב-3.5 מטרים. לאחר פטירת היזם שהקים אותו, משה אביב, נקרא המגדל על שמו",
        hint: {
            title: "מגדל משה אביב",
            text: "",
            hint: "ישנם שיבושים בתחבורה הציבורית, הגיעו לבנין הכי גבוה בעיר לקבלת הוראות נוספות",
            image: "images/locations/100_MosheAvivBuilding_game.png",
        },
        image: "images/locations/100_MosheAvivBuilding_real.png",
        score: 1,
    },
    {
        target: {
            objectTag: "101_BusOnStation",
            image: "images/locations/101_BusOnStation_game.png",
            title: "אוטובוס",
            location: {x: 32.0837559, y: 34.8012767},
        },
        name: "אוטובוס",
        description: "אוטובוס תקוע בצד הכביש, בדרך אל גן דוד המלך",
        hint: {
            title: "אוטובוס",
            text: "",
            hint: "אוטובוס מיוחד ממתין לכם, המשיכו לאורך הכביש הרחב ביותר, עד שתגיעו לאוטובוס",
            image: "images/locations/101_BusOnStation_game.png",
        },
        image: "images/locations/101_BusOnStation_game.png",
        score: 1,
    },
    {
        target: {
            objectTag: "102_DavidParkFountain",
            image: "images/locations/102_DavidParkFountain_real.png",
            title: "גן דוד המלך",
            location: {x: 32.0843353, y: 34.8136084},
        },
        name: "גן דוד המלך",
        description: "גן דוד המלך ניטע ב 1928 והוא הגן הראשון של רמת גן ואחד המקומות ההיסטוריים והנוסטלגים בעיר רמת גן.  בנוסף דבק בו הכינוי \"זקן הגנים\" על שם כך שהיה הגן הראשון ברמת גן. בתקופת המנדט הבריטי הגן נקרא בשם \"גן המלך ג'ורג'\" על שם המלך ג'ורג' החמישי",
        hint: {
            title: "גן דוד המלך",
            text: "",
            hint: "האוטובוס התחמם, הנהג ביקש עזרה בהחלפת המים למנוע. המשיכו באותו כיוון על הכביש עד שתפגשו בשדרת עצים המובילה למזרקה של גן דוד המלך",
            image: "images/locations/102_DavidParkFountain_game.png",
        },
        image: "images/locations/102_DavidParkFountain_real.png",
        score: 1,
    }
]

const game1 = (teacherId,className,code,startTime) => ({
    teacherId,
    className,
    missions: missions,
    metadata: {
        name: 'Demo Game',
        duration: 20,
        groupCount: 5,
        colors: [
            {
                name: "brown",
                hex: "#795548",
                heb: "חום",
            },
            {
                name: "violet",
                hex: "#9c27b0",
                heb: "בהיר סגול",
            },
            {
                name: "red",
                hex: "#f44336",
                heb: "אדום",
            },
            {
                name: "green",
                hex: "#4caf50",
                heb: "ירוק",
            },
            {
                name: "indigo",
                hex: "#3f51b5",
                heb: "אינדיגו",
            }
        ],
        code,
        startTime,
    }
})

const teacherSignup = async (firstName, lastName, email, password, school) => {
    try {
        const teacher = await TeacherModel.findOne({email});
        if (teacher) {
            throw new Error('this email is already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newTeacher = await TeacherModel.createTeacher(
            {firstName, lastName, email, username: email, password: hashedPassword},
            school
        );
        return newTeacher
    } catch (e) {
        console.log("teacherSignup error", {firstName, lastName, email, password, school}, e);
    }
}

const playerSignup = async (firstName, lastName, username, password, avatar,classId,schoolId) => {
    try {

        const teacher = await PlayerModel.findOne({username});
        if (teacher) {
            throw new Error('this email is already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newPlayer = await createPlayer(
            {firstName, lastName, username, password: hashedPassword, avatar}, classId,schoolId);
        return newPlayer
    } catch (e) {
        console.log("playerSignup error", {firstName}, e);
    }
}
const createPlayer = async ({firstName, lastName, username, password, avatar},classId,schoolId) => {
    // "6478ad87392e28c511b81da9"
        const mock = {
            schoolName: "בן גוריון",
            className: "ד2",
        }
        const classDoc = await ClassModel.findById(classId);
        const schoolDoc = await SchoolModel.findById(schoolId);
        const newPlayer = new PlayerModel({firstName, lastName, username, password, avatar,school:schoolDoc,class:classDoc});
        classDoc.players.push(newPlayer._id);
        await classDoc.save();
        return newPlayer.save();
    }
const createGame = async (teacherId, className, metadata, missionsArr) => {
    try {
        const newMissions = await MissionModel.createMissions(missionsArr);
        const missions = newMissions.map((m) => m._id);
        const newGame = await GameModel.createGame(
            {...metadata, missions},
            teacherId,
            className
        );
        newGame.id = newGame._id;
        const updatedGame = await newGame.save();
        return updatedGame
    } catch (e) {
        console.log("createGame error", {teacherId, className, metadata, missionsArr}, e);
    }
}

const joinGame = async (playerId, gameCode) => {

    try {
        const game = await GameModel.addPlayerByGameCode(gameCode, playerId);
        return game
    } catch (e) {
        console.log("joinGame error", {playerId, gameCode}, e);
    }
}

const setAchievement = async (gameCode, playerId, missionId) => {
    console.log('SET_ACHIEVEMENT');
    try {
        const achievement = await GameModel.setPlayerAchievement(gameCode, playerId, missionId);
        return achievement
    } catch (e) {
        console.log("setAchievement error", {gameCode, playerId, missionId}, e);
    }
}
const giveColor = async (gameCode, playerId) => {
    console.log('GIVE_COLOR');
    try {
        const color = await GameModel.giveColor(gameCode, playerId);
        return color
    } catch (e) {
        console.log("giveColor error", {gameCode, playerId}, e);
    }
}
const setPlayerAchievement = async (gameId, missionId,playerId, startTime,endTimestamp) => {
    const player = await PlayerModel.findById(playerId);
    const mission = await MissionModel.findById(missionId);
    const game = await GameModel.findById(gameId);
    const calculatedScore = mission.score* 100 * (1 - (new Date(endTimestamp).getTime() - new Date(startTime).getTime()) / (game.duration*60*1000));
    const achievement = new AchievementModel({
        player:playerId,
        mission: missionId,
        game: gameId,
        duration: (new Date(endTimestamp).getTime()) - (new Date(startTime).getTime()),
        score: calculatedScore,
        playerTotal: player.score + 0 + calculatedScore,
    });
    const savedAchievement = await achievement.save();
    player.score += savedAchievement.score;
    player.achievements.push(savedAchievement);
    await player.save();
}

export const mockClasses = async () => {
    const  schools = await SchoolModel.find();
    const classNames= ['ג1','ג2','ג3','ד1','ד2','ד3','ה1','ה2','ה3','ו1','ו2','ו3','ז1','ז2','ז3'];
    for(let i=0;i<schools.length;i++){
        for(let j=0;j<classNames.length;j++){
            // try {


            const classDoc = new ClassModel({name: classNames[j], school: schools[i]});
            await classDoc.save();
            schools[i].classes.push(classDoc);
            await schools[i].save();
            // }catch (e){
            //     console.log(`failed class ${classNames[j]} `);
            // }
        }

    }
}

export const mockTeacherAndGame = async (schoolName:string,className:string,teacherName:string,startTime:string,mockData) => {
    const mock_School = await SchoolModel.findOne({name: schoolName});
    console.log(`school: ${schoolName}`, mock_School._id);
    const mock_Class = await ClassModel.findOne({name: className});
    console.log(`class: ${schoolName} ${className}`, mock_Class._id);
    const mock_Teacher = await teacherSignup('Test', teacherName, `${teacherName}@univille.com`, '123456', mock_School._id);
    console.log(`teacher: ${schoolName} ${teacherName}`, mock_Teacher._id);
    const gameTemplate =game1(mock_Teacher._id,className,idGenerator(5,'A'),startTime)
    const mock_Game = await createGame(mock_Teacher._id, className, gameTemplate.metadata, gameTemplate.missions);
    console.log(`game: ${schoolName} ${className} ${teacherName}`, mock_Game._id,mock_Game.code);
    await mockPlayers(mockData,mock_Class._id,mock_School._id,mock_Game);
    console.log('players created');
    return {schoolId:mock_School._id,classId:mock_Class._id,teacherId:mock_Teacher._id}
}

export const mockData = async () => {
    await mockTeacherAndGame('אושא','ה1','Teacher1',oshaData[0].startTime,oshaData);
    console.log('osha done');
    await mockTeacherAndGame('הבילויים','ו2','Teacher2',zomerData[0].startTime,zomerData);
    console.log('zomer done');
}

export const mockPlayers = async (mockData,classId,schoolId,game)=>{
    for(let value of mockData){
        console.log('creating user', value.username)
        let exist = await  PlayerModel.findOne({username: value.username});
        if(!exist) {
            let student = await playerSignup(value.username, value.username, value.username, value.username, "Nathan", classId,schoolId);
            await joinGame(student._id, game.code);
            await setPlayerAchievement(game._id,game.missions[0], student._id, value.startTime, value.missionsTimestamp[0]);
            await setPlayerAchievement(game._id,game.missions[1], student._id,value.startTime, value.missionsTimestamp[1]);
            await setPlayerAchievement(game._id,game.missions[2], student._id,value.startTime,  value.missionsTimestamp[2]);
            await setPlayerAchievement(game._id,game.missions[3], student._id,value.startTime,  value.missionsTimestamp[3]);
            await giveColor(game.code, student._id);
            console.log('student created', value.username);
        }
        else {
            console.log('student exist', value.username)
        }
    }
}
export const mockUpdate = async () => {
    try {

        // const osha = await SchoolModel.findById("6478ac6206d5209598fd22f5");
        // console.log('osha', osha);
        // const oshaClass = await osha.createClass('ה2');
        // console.log('oshaClass', oshaClass);
        // const oshaTeacher = await teacherSignup('אושא', 'מורה', 'T1@UNIVILLE.COM', '123456', "6478ac6206d5209598fd22f5");
        // console.log('oshaTeacher', oshaTeacher);

        // const zomer = await SchoolModel.findById('64748f93027a00b1515a36ee')
        // console.log('zomer', zomer._id)
        // const zomerClass = new ClassModel({name: 'ו1', school: zomer});
        // const savedClass = await zomerClass.save();
        // zomer.classes.push(savedClass);
        // await zomer.save();
        // console.log('zomerClass', zomerClass._id);
        // const zomerTeacher = await teacherSignup('זומר', 'מורה', 'T3@UNIVILLE.COM', '123456', zomer._id);
        // console.log('zomerTeacher', zomerTeacher._id);

        for(let value of oshaData){
            console.log('value', value.username)
            let exist = await  PlayerModel.findOne({username: value.username});
            if(!exist) {
                let student = await playerSignup(value.username, value.username, value.username, value.username, "Nathan", "6478ad87392e28c511b81da9","6478ac6206d5209598fd22f5");
                await joinGame(student._id, 'OPAPH');
                await setPlayerAchievement('6478986aed34a7cae8a62720','647899b8ed34a7cae8a6274e', student._id, value.startTime, new Date(value.missionsTimestamp[0]).getTime());
                await setPlayerAchievement('6478986aed34a7cae8a62720','647899b8ed34a7cae8a62751', student._id,value.startTime,  new Date(value.missionsTimestamp[1]).getTime());
                await setPlayerAchievement('6478986aed34a7cae8a62720','647899b8ed34a7cae8a62754', student._id,value.startTime,  new Date(value.missionsTimestamp[2]).getTime());
                await setPlayerAchievement('6478986aed34a7cae8a62720','647899b8ed34a7cae8a62757', student._id,value.startTime,  new Date(value.missionsTimestamp[3]).getTime());
                await giveColor('OPAPH', student._id);
                console.log('student created', value.username);
            }
            else {
                console.log('student exist', value.username)
            }
        }
        for(let value of zomerData){
            console.log('value', value.username)
            let exist = await  PlayerModel.findOne({username: value.username});
            if(!exist) {
                let student = await playerSignup(value.username, value.username, value.username, value.username, "Nathan", "6478ca80318061aab368e311","64748f93027a00b1515a36ee");
                await joinGame(student._id, 'OPAPH');
                await setPlayerAchievement('6478986aed34a7cae8a62720','647899b8ed34a7cae8a6274e', student._id, value.startTime, new Date(value.missionsTimestamp[0]).getTime());
                await setPlayerAchievement('6478986aed34a7cae8a62720','647899b8ed34a7cae8a62751', student._id,value.startTime,  new Date(value.missionsTimestamp[1]).getTime());
                await setPlayerAchievement('6478986aed34a7cae8a62720','647899b8ed34a7cae8a62754', student._id,value.startTime,  new Date(value.missionsTimestamp[2]).getTime());
                await setPlayerAchievement('6478986aed34a7cae8a62720','647899b8ed34a7cae8a62757', student._id,value.startTime,  new Date(value.missionsTimestamp[3]).getTime());
                await giveColor('OPAPH', student._id);
                console.log('student created', value.username);
            }
            else {
                console.log('student exist', value.username)
            }
        }

    } catch (e) {

    }


}
