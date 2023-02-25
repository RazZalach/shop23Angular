import { Products } from './products';
import { Sorts } from './sort';
import Utils from './utils'

export const SORTS: Sorts[] = [
    {
        "id": 1,
        "name": "מומלצים",
        "key": "isFavorite",
        "type" : "number",
        "desc" : true
    },{
        "id": 2,
        "name": "הנמכרים ביותר",
        "key": "sellNo",
        "type" : "number",
        "desc" : true
    },{
        "id": 3,
        "name": "אלפבתי, A-Z",
        "key": "title",
        "type" : "string",
        "desc" : false
    },{
        "id": 4,
        "name": "אלפבתי, Z-A",
        "key": "title",
        "type" : "string",
        "desc" : true
    },{
        "id": 5,
        "name": "מחיר נמוך לגבוה",
        "key": "price",
        "type" : "number",
        "desc" : false
    },{
        "id": 6,
        "name": "מחיר גבוה לנמוך",
        "key": "price",
        "type" : "number",
        "desc" : true
    },{
        "id": 7,
        "name": "תאריך חדש לישן",
        "key": "openDate",
        "type" : "number",
        "desc" : true
    },{
        "id": 8,
        "name": "תאריך ישן לחדש",
        "key": "openDate",
        "type" : "number",
        "desc" : false
    }
];

export const PRODUCTS: Products[] = [
    {
        "id": 1,
        "title": "מכונת קפה נספרסו",
        "price": 570,
        "description": "מכונת קפה לקפסולות של נספרסו או תאומות נספרסו  ",
        "category": "מכונות קפה",
        "image": "https://www.nespresso.com/il/he/media/catalog/product/3/9/39655-a-pic-483x350-2_4_.png",
        "isFavorite": 1,
        "sellNo": 20,
        "openDate": 20200201
    }, {
        "id": 2,
        "title": "מכונת קפה ביאלטי ",
        "price": 350,
        "description": "מכונת ביאלטי לקפסולות ביאלטי אספרסו באר ",
        "category": "מכונות קפה",
        "image": "https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/s/u/super_laterale_panna.png",
        "isFavorite": 0,
        "sellNo": 50,
        "openDate": 20200201
    }, {
        "id": 3,
        "title": "מכונת קפה טרסט",
        "price": 1200,
        "description": "מכונת קפה לקפסולות של נספרסו או תאומות נספרסו  מגיעה עם מקציף חלב מובנה ",
        "category": "מכונות קפה",
        "image": "https://img001.prntscr.com/file/img001/i0F1GLNSRPSSW5Kz9hYjLg.png",
        "isFavorite": 0,
        "sellNo": 150,
        "openDate": 20200201
    }, {
        "id": 4,
        "title": "מכונת קפה טרסט טוחנת",
        "price": 2400,
        "description": "מכונת קפה  בעלת מטחנת קפה  ומקציף חלב מובנים ",
        "category": "מכונות קפה",
        "image": "https://img001.prntscr.com/file/img001/0hQH_GpASlmhHLNKKlwJBQ.png",
        "isFavorite": 1,
        "sellNo": 100,
        "openDate": 20200205
    }, {
        "id": 5,
        "title": "מטחנת קפה פסקל",
        "price": 750,
        "description": "מכונת קפה פסקל מולינרו ",
        "category": "מכונות קפה",
        "image": "https://www.minuto.co.il/wp-content/uploads/2021/02/Pascal_grinder.png",
        "isFavorite": 1,
        "sellNo": 100,
        "openDate": 20200205
    },{
        "id": 6,
        "title": "מקינטה בריקה ביאלטי מארז קטן",
        "price": 150,
        "description": " מקינטה בריקה 2 כוסות",
        "category": "מקינטות",
        "image": "https://img001.prntscr.com/file/img001/DJ4a4BBoRai260-8dF2Nrg.png",
        "isFavorite": 1,
        "sellNo": 139,
        "openDate": 20200205
    }, {
        "id": 7,
        "title": "מקינטה מוקה אקספרס biealti מארז בינוני",
        "price": 210,
        "description": "מקינטה מוקה אקספרס 4 כוסות",
        "category": "מקינטות",
        "image": "https://img001.prntscr.com/file/img001/D8yXqF_ITGGsrEgH4ntoPw.png",
        "isFavorite": 1,
        "sellNo": 199,
        "openDate": 20190502
    }, {
        "id": 8,
        "title": "מקינטה מוקה אקספרס biealti מארז גדול",
        "price": 255,
        "description": "מקינטה מוקה אקספרס 9 כוסות",
        "category": "מקינטות",
        "image": "https://img001.prntscr.com/file/img001/GIkJ-7h8SZ6MbCviyb3SkQ.png",
        "isFavorite": 249,
        "sellNo": 5,
        "openDate": 20200201
    }, {
        "id": 9,
        "title": "קפסולות italian coffe  מארז בינוני",
        "price": 15.99,
        "description": "קפסולות תואמות למכונת נספרסו מבית איטלקי מסורתי",
        "category": "קפסולות",
        "image": "https://img001.prntscr.com/file/img001/Isa0AhB-QLeG8nPgHytTJA.png",
        "isFavorite": 1,
        "sellNo": 2,
        "openDate": 20210127
    }, {
        "id": 10,
        "title": " BIALETTI קפסולות מארז בינוני",
        "price": 20,
        "description": "קפסולות איטלקיות תואמות מכונת נספרסו משובחות בטעם עשיר ובמגוון דרגות חוזק",
        "category": "קפסולות",
        "image": "https://img001.prntscr.com/file/img001/jSXKIB48QmmfYbFiO6a9wg.jpeg",
        "isFavorite": 0,
        "sellNo": 0,
        "openDate": 20200702
    }, {
        "id": 11,
        "title": "Lavazza קפסולות  מארז גדול",
        "price": 53,
        "description": "קפסולות לאווצה מודו מיו למכונת קפה לאווצה ",
        "category": "קפסולות",
        "image": "https://img001.prntscr.com/file/img001/R24Hbv5iS_2VAkMW6iHUkw.png",
        "isFavorite": 0,
        "sellNo": 3,
        "openDate": 20200201
    }, {
        "id": 12,
        "title": " 2 BIALETTI קפסולות מארז בינוני",
        "price": 30,
        "description": " בעלות מגוון רחב של טעמים וארומות שנוגעים בכל קצוות העולם קפסולות ביאלטי למכונות ביאלטי",
        "category": "קפסולות",
        "image": "https://img001.prntscr.com/file/img001/18noTvCuQa-iEoQwhcvF_g.png",
        "isFavorite": 1,
        "sellNo": 15,
        "openDate": 20200201
    }, {
        "id": 13,
        "title": "LavazzaBlue קפסולות  מארז גדול",
        "price": 199,
        "description": "קפסולות לאווצה בלו  למכונת לאווצה בעלות ארומות ומרקמים עשירים",
        "category": "קפסולות",
        "image": "https://img001.prntscr.com/file/img001/pOGx0en_SZK8I7lTrikaMQ.png",
        "isFavorite": 0,
        "sellNo": 10,
        "openDate": 20201111
    }, {
        "id": 14,
        "title": "BIALETTI פולי קפה טחון  250 גר׳",
        "price": 35,
        "description": "קפה טחון שמגיע ב4 טמעים וארומות ושלל מרקמים מתקתקים וחמוצים",
        "category": "פולי קפה",
        "image": "https://img001.prntscr.com/file/img001/01pFw-v3SNOe0OhH-fJwhg.png",
        "isFavorite": 0,
        "sellNo": 4,
        "openDate": 20210109
    }, {
        "id": 15,
        "title": "BIALETTI פולי קפה",
        "price": 119.99,
        "description": "פולי קפההמגיעים בשלל חוזקים וארומות כמות מילאנו רומא ונציה ונאפולי (המחיר מתייחס לכמות קילו) ",
        "category": "פולי קפה",
        "image": "https://img001.prntscr.com/file/img001/cu5UTCTyQVmbAH12idTv2Q.png",
        "isFavorite": 1,
        "sellNo": 103,
        "openDate": 20200407
    }, {
        "id": 16,
        "title": "LAVAZZA פולי קפה",
        "price": 119.99,
        "description": "פולי קפההמגיעים בשלל חוזקים וארומות כמו  גוסטופורטה גוסטופיאנו אורו קרמה-ארומה רוסה-גראן אספרסרו",
        "category": "פולי קפה",
        "image": "https://img001.prntscr.com/file/img001/9KBUmMW8RmyTasH7H4O5-g.png",
        "isFavorite": 1,
        "sellNo": 34,
        "openDate": 20200201
    }, {
        "id": 17,
        "title": "SAGAFREDO פולי קפה",
        "price": 90,
        "description": "פולי קפה מגיעים בשלל חוזקים וארומות כמו  אינטנזו  עראביק  קפה קרמה אספרסו",
        "category": "פולי קפה",
        "image": "https://img001.prntscr.com/file/img001/NmKx5d32R_y3hN0W0gaoQw.png",
        "isFavorite": 0,
        "sellNo": 0,
        "openDate": 20200415
    }, {
        "id": 18,
        "title": "MAURO פולי קפה",
        "price": 110,
        "description": "פולי קפה מבית המגיעים בשלל ארומות וטעמים כמו  100 אחוז .עראביק 50-50 אחוז . 70 - 30 אחוז",
        "category": "פולי קפה",
        "image": "https://cdn.shopify.com/s/files/1/0076/9064/9652/products/mauro_mix3_600x600_crop_center.png",
        "isFavorite": 0,
        "sellNo": 90,
        "openDate": 20200521
    }, {
        "id": 19,
        "title": "פולי קפה בטעם אתיופיה ",
        "price": 94.85,
        "description": "ניחוחות פרחוניים  ארומטי חמיצות בהירה ויציבה אפטר טייסט של פירות הדר מתקתקים ",
        "category": "פולי קפה",
        "image": "https://m.media-amazon.com/images/I/81DLJc5I5XL.jpg",
        "isFavorite": 0,
        "sellNo": 12,
        "openDate": 20210201
    }, {
        "id": 20,
        "title": "פולי קפה בטעם ברזיל",
        "price": 97.95,
        "description": "גוף מלא מריר ומתוק  חמיצות נמוכה עשיר בטעמי שמנת שוקולד ואגוז",
        "category": "פולי קפה",
        "image": "https://cafe1820.com/wp-content/uploads/2019/09/5-Reasons-why-Costa-Rican-coffee-is-the-best.jpg",
        "isFavorite": 1,
        "sellNo": 23,
        "openDate": 20200306
    }, {
        "id": 21,
        "title": "פולי קפה בטעם קולומוביה ",
        "price": 94.99,
        "description": "מתקתק וחלק עשיר בטמעי קרמל חמיצות בשלה ",
        "category": "פולי קפה",
        "image": "https://blogstudio.s3.theshoppad.net/coffeeheroau/8242e3320e454bb1d8ad9b21a6b88320.jpg",
        "isFavorite": 0,
        "sellNo": 5,
        "openDate": 20201225
    },{
        "id": 22,
        "title": "פולי קפה בטעם קוסטה ריקה ",
        "price": 99,
        "description": "בעל טעם מתון ונקי חמיצות בהירה גוף עדין אפטר טייסט בטעם אספרסו וניל",
        "category": "פולי קפה",
        "image": "https://m.media-amazon.com/images/I/81pCTS6Nn1L.jpg",
        "isFavorite": 1,
        "sellNo": 17,
        "openDate": 20200306
    },{
        "id": 23,
        "title": "פולי קפה בטעם טורקיה",
        "price": 99,
        "description": "תערובת עוצמתית המשלבת בין רובוסטה לערביקה בעלת מתיקות עדינה טעמי אגוז ושוקולד מריר",
        "category": "פולי קפה",
        "image": "https://cdn.shopify.com/s/files/1/0036/4848/7488/products/tres-rios-costa-rica-coffee-img-880x880_1024x.jpg",
        "isFavorite": 1,
        "sellNo": 42,
        "openDate": 20200306
    },{
        "id": 24,
        "title": "נוזל מסיר אבנית אקולוגי למכונות קפה",
        "price": 34.99,
        "description": " מ״ל 250 נוזל מסיר אבנית למכונות קפה אקולוגי מיוצר מחומרים איכותיים ",
        "category": "נוזל מכונות",
        "image": "https://img001.prntscr.com/file/img001/xUqkpZLsRQ-8eFKxPjyCGA.png",
        "isFavorite": 1,
        "sellNo": 42,
        "openDate": 20200306
    },{
        "id": 25,
        "title": "HOOKAHMAN נרגילה גרמנית גדולה",
        "price": 249.99,
        "description": "נרגילה גרמנית גדולה  מגנזיום ",
        "category": "נרגילות",
        "image": "https://img001.prntscr.com/file/img001/5barBdycTYijef_TF_MkLA.jpeg",
        "isFavorite": 1,
        "sellNo": 12,
        "openDate": 20200306
    },{
        "id": 26,
        "title": "JARADAT נרגילה גרמנית ענקית",
        "price": 320,
        "description": "נרגילה גרמנית ענקית עם ראש טבעי נרגילה בהברגה ברמה גבוהה ",
        "category": "נרגילות",
        "image": "https://img001.prntscr.com/file/img001/vYQVEwftTiCVe-gHJW5vkA.jpeg",
        "isFavorite": 1,
        "sellNo": 32,
        "openDate": 20200306
    },
    {
        "id": 27,
        "title": "HOOKAHMAN נרגילה גרמנית בינונית",
        "price": 150,
        "description": "נרגילה גרמנית בינונית נרגילה בהברגה עם יציאות אוויר במגש ",
        "category": "נרגילות",
        "image": "https://img001.prntscr.com/file/img001/M74StDIbTzOFX31VJv9k0g.jpeg",
        "isFavorite": 1,
        "sellNo": 13,
        "openDate": 20200306
    },
    {
        "id": 28,
        "title": "BOSS-MAN נרגילה גרמנית בינונית",
        "price": 160,
        "description": "נרגילה גרמנית בינונית נרגילה מעוצבת בסיגנון דובאי מגיעה עם ראש טבעי ",
        "category": "נרגילות",
        "image": "https://img001.prntscr.com/file/img001/LDHSGNUjS26HFtE7SyWd7g.jpeg",
        "isFavorite": 1,
        "sellNo": 14,
        "openDate": 20200306
    },{
        "id": 29,
        "title": "נרגילה סינית במזוודה",
        "price": 130,
        "description": "נרגילה סינית במזוודה מאובזרת בכול מה שמעשן צריך כולל בערכה טעם וגחלים ועוד הרבה פינוקים",
        "category": "נרגילות",
        "image": "https://img001.prntscr.com/file/img001/IGU8e6WuRyydEmPBmW8Crw.jpeg",
        "isFavorite": 1,
        "sellNo": 13,
        "openDate": 20200306
    },{
        "id": 30,
        "title": "AMY-DELUXE נרגילה מיצרית מהמותג",
        "price": 550,
        "description": "נרגילה מיצרית פרימיום של המותג איימי דלוקס ברמה הגבוההה ביותר שקיימת מגיעה עם ים של מתנות",
        "category": "נרגילות",
        "image": "https://img001.prntscr.com/file/img001/u9mejoogRfSTkTr_xAwEgg.jpeg",
        "isFavorite": 1,
        "sellNo": 13,
        "openDate": 20200306
    },
    {
        "id": 31,
        "title": "MAZAYA טעמים במשקל של חברת",
        "price": 20,
        "description": "טעמים במארזים קטנים מגיעים במגוון ענק של טעמים ",
        "category": "טעמים וגחלים",
        "image": "https://img001.prntscr.com/file/img001/k8AJgqz-TA602CTNfrsBBQ.png",
        "isFavorite": 1,
        "sellNo": 33,
        "openDate": 20200306
    },
    {
        "id": 32,
        "title": "DOZAN טעמים בקופסא של חברת",
        "price": 170,
        "description": "טעמים לנרגילה מגיעים בקופסאות סגורות של קילו במגוון ענק של טעמים כמו love 69 תפוח ועוד ",
        "category": "טעמים וגחלים",
        "image": "https://img001.prntscr.com/file/img001/9yVMkcciSPCrap6mlYbhjg.png",
        "isFavorite": 1,
        "sellNo": 3,
        "openDate": 20200306
    },
    {
        "id": 33,
        "title": "גחלים קוקוס אננס",
        "price": 35,
        "description": "גחלים פרימיום קוקוס אננס באיכות הכי טובה שקיימת",
        "category": "טעמים וגחלים",
        "image": "https://img001.prntscr.com/file/img001/JT6LLYYNQc6uElJJYv82qg.png",
        "isFavorite": 1,
        "sellNo": 13,
        "openDate": 20200306
    },
    {
        "id": 34,
        "title": "LZZYCOCO גחלים טבעיים",
        "price": 45,
        "description": "גחלים טבעיים פרימיום מחזיקים מעמד שעה ויותר דלוקים",
        "category": "טעמים וגחלים",
        "image": "https://img001.prntscr.com/file/img001/RwN3F3IBRZ6bvmdISRvsuA.png",
        "isFavorite": 1,
        "sellNo": 13,
        "openDate": 20200306
    },
    {
        "id": 35,
        "title": "CAESA גחלים טבעיים של חברת",
        "price": 40,
        "description": "פחמים פרימיום באיכות ברמה הכי גבוהה ",
        "category": "טעמים וגחלים",
        "image": "https://img001.prntscr.com/file/img001/aGQ1cGIcRamP4PJplSm3Hg.png",
        "isFavorite": 1,
        "sellNo": 13,
        "openDate": 20200306
    }
];
//                        שמןת הקתעטגורי
export const CATEGORIES = Object.keys(Utils.groupBy(PRODUCTS, 'category'));