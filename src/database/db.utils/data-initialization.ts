import {
  PlayerModel,
  SchoolModel,
  UserModel,
  ClassModel,
  MissionModel,
  GameModel,
  TeacherModel,
} from '../models';
import {mockClasses, mockData, mockUpdate} from "./mock-users";

const className = 'Tigers';
const schoolName = 'Shenkar';

const players = [
  {
    username: 'Ofer221',
    fullName: 'Ofer Elfassi',
    group: 'blue',
    avatar:
      'https://gravatar.com/avatar/19c0791465b39fc5ebc9434d9b9af7d6?s=400&d=robohash&r=x',
  },
  {
    username: 'DekelBD',
    fullName: 'Dekel Ben-David',
    group: 'red',
    avatar:
      'https://gravatar.com/avatar/ccfd17a3d0db909ba0353d88a35ef177?s=400&d=robohash&r=x',
  },
  {
    username: 'Ido100k',
    fullName: 'Ido Dor',
    group: 'green',
    avatar:
      'https://gravatar.com/avatar/6719ee5b433813a8bfb72a763efb601f?s=400&d=robohash&r=x',
  },
];

const teachers = [
  {
    username: 'teacher1',
    fullName: 'teacher1',
    className: 'Tigers',
  },
];

const games = [
  {
    name: 'find the monkeys',
    code: '123456',
    startTime: new Date(),
    duration: 5,
    teacher: 'teacher1',
  },
];

const targets = [
  {
    title: 'monkey1',
    location: { x: 32.084042, y: 34.818988 },
    image: 'https://www.safari.co.il/Images/_croppedImage20183814_3103167.png',
  },
];

const hints = [
  [
    {
      index: 1,
      hint: 'you are close, but not there yet',
      type: 'text',
      title: 'Where is the monkey?',
      location: { x: 32.082188, y: 34.818209 },
      image: '',
    },
    {
      index: 2,
      hint: 'On the next tower to the right, look up and maybe you will see it',
      type: 'text',
      title: 'Are you looking up?',
      location: { x: 32.083139, y: 34.818414 },
      image: '',
    },
    {
      index: 3,
      hint: 'Sometimes you need to look down',
      type: 'text',
      title: 'Are you looking down?',
      location: { x: 32.083937, y: 34.818596 },
      image: '',
    },
  ],
];

const missions = [
  {
    name: 'mission1',
    image:
      'https://calcalit-rg.co.il/wp-content/uploads/2020/01/33238ImageFile2.jpg',
    target: {},
    hints: [],
  },
];

const createMission = async (missionData, hintList, targetData) => {
  try {
    const newMission = await MissionModel.create({
      ...missionData,
      target: targetData,
      hints: hintList,
    });
    console.log('mission created', newMission);
    return newMission;
  } catch (error) {
    throw new Error(`Error creating mission: ${error.message}`);
  }
};

const createTeacher = async (teacher) => {
  try {
    const newTeacher = await TeacherModel.create(teacher);
    console.log('teacher created', newTeacher);
    return newTeacher;
  } catch (error) {
    throw new Error(`Error createTeacher: ${error.message}`);
  }
};

const createPlayer = async (playerData) => {
  try {
    const newPlayer = await PlayerModel.createPlayer(
      playerData,
      schoolName,
      className
    );
    console.log('player created', newPlayer);
    return newPlayer;
  } catch (error) {
    throw new Error(`Error createPlayer: ${error.message}`);
  }
};

const createSchoolAndClass = async (newSchoolName: string, newClassName) => {
  try {
    const newSchool = await SchoolModel.create({ name: newSchoolName });
    const newClass = await newSchool.createClass(newClassName);
    console.log('school and class created', newSchool, newClass);
    return newClass;
  } catch (error) {
    throw new Error(`Error createSchoolAndClass: ${error.message}`);
  }
};
// const createGame = async (game, teacher) => {
//   try {
//     game.startTime = new Date();
//     const newGame = await GameModel.createGame(game, teacher.id);
//     console.log('game created', newGame);
//     return newGame;
//   } catch (error) {
//     throw new Error(`Error createGame: ${error.message}`);
//   }
// };

const clearData = async () => {
  console.log('clearing data');
  try {
    await PlayerModel.deleteMany({});
    await ClassModel.deleteMany({});
    await SchoolModel.deleteMany({});
    await UserModel.deleteMany({});
    await MissionModel.deleteMany({});
    await GameModel.deleteMany({});
  } catch (err) {
    console.log('error in clearing data', err.message);
  }
};
const createSchools = async () => {
  const schools = [
    { name: 'אביגור', address: 'תל-חי', city: 'רמת-גן',location: { x: 32.0691542, y: 34.8253758 } },
    { name: 'ארנון', address: 'החולה 4', city: 'רמת-גן',location: { x: 32.0605901, y: 34.8286671 } },
    { name: 'בן גוריון', address: 'שרת 27', city: 'רמת-גן',location: { x: 32.0862027, y: 34.8157825 } },
    { name: 'גבעולים', address: 'התקוה 20', city: 'רמת-גן',location: { x: 32.0885303, y: 34.8103099 } },
    { name: 'הבילויים', address: 'אהרונסון 38', city: 'רמת-גן',location: { x: 32.0607605, y: 34.8227041 } },
    { name: 'הגפן', address: 'בנימין 28', city: 'רמת-גן',location: { x: 32.0848642, y: 34.8038936 } },
    { name: 'הלל', address: 'הגלגל 44', city: 'רמת-גן',location: { x: 32.080249, y: 34.8211389 } },
    { name: 'המנחיל', address: 'הפודים 41', city: 'רמת-גן',location: { x: 32.0932857, y: 34.8183109 } },
    { name: 'המתמיד', address: 'המתמיד 37', city: 'רמת-גן',location: { x: 32.0803349, y: 34.8037645 } },
    { name: 'ויצמן', address: 'מנדס 55', city: 'רמת-גן',location: { x: 32.0548809, y: 34.8457124 } },
    { name: 'זומר', address: "שד' למדן 1", city: 'רמת-גן',location: { x: 32.0863098, y: 34.8116064 } },
    { name: 'חשמונאים', address: 'חשמונאים 33', city: 'רמת-גן',location: { x: 32.079995, y: 34.8067611 } },
    { name: 'יהל"ם', address: 'קריניצי 68', city: 'רמת-גן',location: { x: 32.0818028, y: 34.7685264 } },
    { name: 'מורדי הגטאות', address: 'אמנון ותמר 19', city: 'רמת-גן',location: { x: 32.0723638, y: 34.8246126 } },
    { name: 'מכל"ל', address: 'פומבדיתא 16', city: 'רמת-גן',location: { x: 32.0687555, y: 34.8283161 } },
    { name: 'נטעים', address: 'עזריאל 26', city: 'רמת-גן',location: { x: 32.0519421, y: 34.817399 } },
    { name: 'ניצנים', address: 'מוזס 10', city: 'רמת-גן',location: { x: 32.0936132, y: 34.8085779 } },
    { name: 'עליות', address: 'האגדה 9', city: 'רמת-גן',location: { x: 32.0752053, y: 34.8238873 } },
    { name: 'ערמונים', address: 'הכבאים 25', city: 'רמת-גן',location: { x: 32.0624362, y: 34.8331584 } },
    { name: 'עתיד', address: 'מבוא נגבה 10', city: 'רמת-גן',location: { x: 32.0693173, y: 34.8210005 } },
    { name: "קורצ'אק", address: 'גדעון 28', city: 'רמת-גן',location: { x: 32.0674672, y: 34.8147761 } },
    { name: 'רמת-חן', address: 'רמת חן 41', city: 'רמת-גן',location: { x: 32.0515687, y: 34.8084362 } },
    { name: 'רמת-אפעל', address: "שד' אורנים 52960", city: 'רמת-גן',location: { x: 32.0467447, y: 34.8283588 } },
    { name: 'חווה חקלאית', address: "שד' הצבי 10", city: 'רמת-גן',location: { x: 32.0525442, y: 34.8246676 } },
    { name: 'שנקר', address: "אנה פרנק 12", city: 'רמת-גן',location: { x: 32.0900601, y: 34.8009942 } },
    {name: 'אושא', address: 'המעפיל 9', city: 'רמת-גן', location: {x: 32.0901953, y: 34.8152453}}
  ];
  try {
    await SchoolModel.insertMany(schools);
    console.log('schools created');
  } catch (err) {
    console.log('error in creating schools', err.message);
  }
};

const dataInitialization = async () => {
  console.log('Data initialization');
  try {
    // await mockUpdate();
    // await mockClasses();
    const schoolsExist = await SchoolModel.find({});
    if(!schoolsExist || schoolsExist.length === 0) {
        await createSchools();
      await mockClasses();
      await mockData();
    }

    // const exist = await PlayerModel.findOne({ username: 'DekelBD' });
    // if (exist) {
    //   console.log('data already initialized');
    //   return;
    // }
    // await clearData();
    // await createSchools();

    // const teacher1 = await createTeacher(teachers[0]);
    // const class1 = await createSchoolAndClass(schoolName, className);
    // const mission1 = await createMission(missions[0], hints[0], targets[0]);
    // const player1 = await createPlayer(players[0]);
    // const player2 = await createPlayer(players[1]);
    // const player3 = await createPlayer(players[2]);
    // await class1.addPlayer(player1.id);
    // await class1.addPlayer(player2.id);
    // await class1.addPlayer(player3.id);
    // await class1.addTeacher(teacher1.id);
    // const game1 = await createGame(games[0], teacher1);
    // await game1.addMission(mission1.id);
    // await game1.addPlayer(player1.id);
    console.log('data initialized');
  } catch (err) {
    console.log('error in data initialization', err.message);
  }
};
export { dataInitialization };
/*
אביגור
6775049
6763542
תל-חי 52335
אורלי לאלו
אתר
ארנון
6779358
6763436
החולה 4 52255
אורנה בן זקן
אתר
בן גוריון
6734709
6702741
שרת 27 52413
ד"ר איריס מנדלביץ
אתר
גבעולים
7514496
7523980
התקוה 20
ד"ר רונית שניידר
אתר
הבילויים
6777964
6746681
אהרונסון 38
מיכאל פינטו
אתר
הגפן
7529092, 6128742
6133059
בנימין 28
ד"ר מרקוס ארני
אתר
הלל
6185285, 5785053
5784885
הגלגל 44
אורית קייזר
אתר
המנחיל
7524497
6137105
הפודים 41
איילה אלבז
אתר
המתמיד
5753010
7511185
המתמיד 37
שרון חיון
אתר
ויצמן
5347299, 5356701
5341651
מנדס 55 ק.קריניצי 52653
מורן מיכה ארמי
אתר
זומר
6723409
6702307
שד' למדן 1 524443
אליה אלון
אתר
חשמונאים
6736509
6702742
חשמונאים 33
אדווה חלפון
אתר
יהל"ם
6736809
6700382
קריניצי 68
שירלי חביב
אתר
מורדי הגטאות
6779908
6749717
אמנון ותמר 19
איריס מגן
אתר
מכל"ל
6779161
5746669
פומבדיתא 16
עינת זבולון
אתר
נטעים
6313121
6317698
עזריאל 26
מרב שרייבר
אתר
ניצנים
7512876
6133774
מוזס 10
אלה אסיה
אתר
עליות
6778948
6763439
האגדה 9
אתי קדוש
אתר
ערמונים
6773434
6744153
הכבאים 25
נעמה בן יהודה שלהב
אתר
עתיד
6779419
6763452
מבוא נגבה 10
איילה יצחקי
אתר
קורצ'אק
5718008
5716722
גדעון 28
יפית בלנקיט
אתר
רמת-חן
6779565
6763328
רמת חן 41
רונית פדלון
אתר
רמת-אפעל
5344316, 6350226
5356340
שד' אורנים 52960
אופיר סלפוי
אתר
חווה חקלאית
6741616
שד' הצבי 10
יאיר נאור
אתר

"אביגור",
"ארנון",
"בן גוריון",
"גבעולים",
"הבילויים",
"הגפן",
"הלל",
"המנחיל",
"המתמיד",
"ויצמן",
"זומר",
"חשמונאים",
'יהל"ם',
"מורדי הגטאות",
"נטעים",
"ניצנים",
"עליות",
"ערמונים",
"עתיד",
"קורצ'אק",
"רמת-חן",
"רמת-אפעל",
"חווה חקלאית",
 */
