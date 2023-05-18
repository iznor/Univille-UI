import { LocationItem } from '../consts';
import { useEffect, useState } from 'react';

export const useLocationItems = () => {
  // todo - api GET request to receive:
  const itemsList: LocationItem[] = [
    {
      unityObjectTag: '100_MosheAvivBuilding',
      name: 'מגדל משה אביב ',
      description:
        "מגדל משה אביב או בשמו השני מגדל אוסיף-אביב על שם החברה שבנתה אותו, הידוע גם בשמו הקודם מגדל שער העיר, הוא גורד שחקים ברח' ז'בוטינסקי 7, סמוך למתחם הבורסה שברמת גן. המגדל בעל 68 הקומות מתנשא לגובה של 235 מטר. המגדל היה גורד השחקים הגבוה בישראל עד בניית מגדל עזריאלי שרונה בשנת 2016, שגבוה ממנו ב-3.5 מטרים. לאחר פטירת היזם שהקים אותו, משה אביב, נקרא המגדל על שמו.",
      objectPhotoUrl: 'images/locations/100_MosheAvivBuilding_real.png',
      mapPhotoUrl: 'images/locations/100_MosheAvivBuilding_game.png',
    },
    {
      unityObjectTag: '102_DavidParkFountain',
      name: 'גן דוד המלך ',
      description:
        'גן דוד המלך ניטע ב 1928 והוא הגן הראשון של רמת גן ואחד המקומות ההיסטוריים והנוסטלגים בעיר רמת גן.  בנוסף דבק בו הכינוי "זקן הגנים" על שם כך שהיה הגן הראשון ברמת גן. בתקופת המנדט הבריטי הגן נקרא בשם "גן המלך ג\'ורג\'" על שם המלך ג\'ורג\' החמישי.',
      objectPhotoUrl: 'images/locations/102_DavidParkFountain_real.png',
      mapPhotoUrl: 'images/locations/102_DavidParkFountain_game.png',
    },
    {
      unityObjectTag: '202_UshaSchool',
      name: 'בית ספר אושא ',
      description: 'בית ספר אושא ',
      objectPhotoUrl: 'images/locations/202_UshaSchool_real.png',
      mapPhotoUrl: 'images/locations/202_UshaSchool_game.png',
    },

    {
      unityObjectTag: '102_ZomerSchool',
      name: 'בית ספר זומר ',
      description:
        "בית ספר זומר, הממוקם במרכז רמת-גן, הינו בית ספר ממלכתי הפועל בגישת חינוך ולדורף. בבית הספר מתחנכים כ-520 תלמידי כיתות א'-ח', ב-16 כיתות אם.",
      objectPhotoUrl: 'images/locations/102_ZomerSchool_real.png',
      mapPhotoUrl: 'images/locations/200_ShenkarCollage_real.png',
    },

    {
      unityObjectTag: '200_ShenkarCollage',
      name: 'מכללת שנקר ',
      description:
        'מכללת שנקר הינה מכללה אקדמית המיועדת להכשרת כוח אדם אקדמי ולמחקר בתחומי הנדסה, עיצוב ואומנות. המוסד נמצא ברמת גן ונקרא על שם אריה שנקר. במכללה ישנן פקולטות להנדסה, עיצוב וכן בית ספר לאומנות רב תחומית. היא חרתה על דגלה את הרב-תחומיות, ובבסיסה שיתוף הפעולה בין הפקולטות.',
      objectPhotoUrl: 'images/locations/200_ShenkarCollage_real.png',
      mapPhotoUrl: 'images/locations/200_ShenkarCollage_game.png',
    },
    {
      unityObjectTag: '102_BeitHachayal',
      name: 'בית החייל ',
      description:
        'בית החייל משמש כבית לחיילים בודדים, לחיילים חסרי עורף משפחתי ולחיילים המשרתים רחוק ממגוריהם.',
      objectPhotoUrl: 'images/locations/102_BeitHachayal_real.png',
      mapPhotoUrl: 'images/locations/102_BeitHachayal_game.png',
    },

    {
      unityObjectTag: '2_RamatGanMunicipality',
      name: 'עיריית רמת גן ',
      description:
        'מרמת גן הינה אחת הערים המרכזיות במחוז תל אביב בישראל, היא גובלת בערים תל אביב, גבעתיים, קריית אונו, גבעת שמואל, ובני ברק. רמת גן הוקמה בשנת 1921 כמושבה חקלאית והוכרה במועצה מקומית בשנת 1926 והוכרזה כעיר בשנת 1950. נכון לשנת 2023 מתגוררים ברמת גן כ 172,605 תושבים. בעיר קיימים מוסדות לימוד, תרבות, אתרי טבע נוף, תעשייה ומקומות רבים נוספים. כיום ראש העיר הינו כרמל שאמה הכהן (המכהן משנת 2018 ועד היום) אשר נולד וגדל בעיר רמת גן לאורך כל חייו.',
      objectPhotoUrl: 'images/locations/2_RamatGanMunicipality_real.png',
      mapPhotoUrl: 'images/locations/2_RamatGanMunicipality_game.png',
    },

    {
      unityObjectTag: '200_CommunityCenterHarozim',
      name: 'מרכז קהילתי חרוזים ',
      description: 'מרכז קהילתי חרוזים ',
      objectPhotoUrl: 'images/locations/200_CommunityCenterHarozim_real.png',
      mapPhotoUrl: 'images/locations/200_CommunityCenterHarozim_game.png',
    },
    {
      unityObjectTag: '101_BialikMall',
      name: 'קניון ביאליק ',
      description:
        'קניון ביאליק הנמצא ברחוב ביאליק 76 שהינו אחד מהרחובות המרכזיים בעיר רמת גן. הקניון היום הוא אחד הקניונים הגדולים והמרכזים ביותר הקיימים העיר, ומציע עשרות חנויות, מסעדות, ומקומות בילוי בעיר.',
      objectPhotoUrl: 'images/locations/101_BialikMall_real.png',
      mapPhotoUrl: 'images/locations/101_BialikMall_game.png',
    },
    {
      unityObjectTag: '2_location_monky   ',
      name: 'גן הקופים ',
      description:
        "גן שאול הידוע גם בכינויו גן הקופים, הוא גן ציבורי בעיר רמת גן הממוקם בפסגתה של גבעת כורכר המתנשאת לגובה של 60 מטרים מעל פני הים. ולמרגלותיו נמצא רחוב ביאליק. בשנות ה -20 של המאה -20 הגן נקרא \"ג'בל אל חרמיה\" (הר הגנבים) על שם השודדים הבדואים שהסתתרו במערותיה ופשטו על שיירות ועל עוברי אורח במקום. במלחמת העולם הראשונה, במהלך כיבוש ארץ ישראל מידי העות'מאנים, נאחזו הבריטים בפיקודו של גנרל אדוארד באלפין מגדוד הדיוויזיה ה-54 בגבעה, והציבו עליה את תותחיהם. משם ניהלו קרב עם חיילי הצבא העות'מאני שהתחפרו צפונית לנחל הירקון. הניסיונות לעבור לגדתו השנייה של הנחל עלו בתוהו, אבל בדצמבר 1917 הצליחו הבריטים לחצות את הירקון ולהדוף את העות'מאנים צפונה. זמן קצר לאחר מכן הושלם כיבוש הארץ כולה",
      objectPhotoUrl: 'images/locations/2_location_monky_game.png',
      mapPhotoUrl: 'images/locations/2_location_monky_game.png',
    },
    {
      unityObjectTag: '101_BusOnStation',
      name: 'אוטובוס ',
      description: 'אוטובוס תקוע בצד הכביש, בדרך אל גן דוד המלך ',
      objectPhotoUrl: 'images/locations/101_BusOnStation_game.png',
      mapPhotoUrl: 'images/locations/101_BusOnStation_game.png',
    },
  ];

  const [selectedItems, setSelectedItems] = useState<LocationItem[]>([]);

  useEffect(() => {}, [selectedItems]);
  const handleSelect = (item: LocationItem) => {
    !selectedItems.some(
      (selectedItem) => selectedItem.unityObjectTag === item.unityObjectTag
    )
      ? setSelectedItems([...selectedItems, item])
      : console.log('todo: already in the list message');
  };
  const handleRemove = (item: LocationItem) => {
    const newSelectedItems = selectedItems.filter(
      (selectedItem) => selectedItem.unityObjectTag !== item.unityObjectTag
    );
    selectedItems.some(
      (selectedItem) => selectedItem.unityObjectTag === item.unityObjectTag
    )
      ? setSelectedItems(newSelectedItems)
      : console.log('todo: error message - cant remove item');
  };
  return { itemsList, selectedItems, handleSelect, handleRemove };
};
