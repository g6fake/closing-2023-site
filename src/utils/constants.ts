import { IPlaces, IPrograms } from "./interfaces";
import { eveningRoute, excursion, night, nightVelo } from "./routeConstants";

// Места
export const places: IPlaces = {
    gors: {
        name: 'Площадь Ленина',
        shortName: 'Горс',
        dgisLink: 'https://go.2gis.com/xoui3',
        yandexLink: 'https://yandex.ru/maps/-/CDU6BNI-',
        yandexLocation: [54.772878, 56.024106],
    },
    mashinka: {
        name: 'Площадь Машиностроителей',
        shortName: 'Машинка',
        dgisLink: 'https://go.2gis.com/wq9z3',
        yandexLink: 'https://yandex.ru/maps/-/CDU6BPnz',
        yandexLocation: [54.806216, 56.114378],
    },
    vdnh: {
        name: "Парковка у ВДНХ",
        shortName: "ВДНХ",
        dgisLink: 'https://go.2gis.com/b6pih',
        yandexLink: 'https://yandex.ru/maps/-/CDU6J4PS',
        yandexLocation: [54.725265, 56.018649]
    },
    arena: {
        name: "Уфа-арена",
        dgisLink: 'https://go.2gis.com/hweb7',
        yandexLink: 'https://yandex.ru/maps/-/CDU6JNNU',
        yandexLocation: [54.739781, 55.955443]
    },
    tema: {
        name: "Temabar",
        dgisLink: 'https://go.2gis.com/xcde6',
        yandexLink: 'https://yandex.ru/maps/-/CDU6J8OB',
        yandexLocation: [54.741271, 55.987500]
    },
    gdk: {
        name: "Городской дворец культуры",
        shortName: "ГДК",
        dgisLink: 'https://go.2gis.com/laji6z',
        yandexLink: 'https://yandex.ru/maps/-/CDU6RA0~',
        yandexLocation: [54.795039, 56.037292]
    },
    pp: {
        name: "Парк победы",
        shortName: "ПП",
        dgisLink: 'https://go.2gis.com/635dz',
        yandexLink: 'https://yandex.ru/maps/-/CDU6RE7d',
        yandexLocation: [54.822442, 56.058397]
    },
    ordjon: {
        name: "Площадь Орджоникидзе",
        shortName: "Орджон",
        dgisLink: 'https://go.2gis.com/th1iq',
        yandexLink: 'https://yandex.ru/maps/-/CDU6REyN',
        yandexLocation: [54.819036, 56.069813]
    },
    ds: {
        name: 'Дворец спорта',
        dgisLink: 'https://go.2gis.com/wgy78z',
        yandexLink: 'https://yandex.ru/maps/-/CDUvyJld',
        yandexLocation: [54.759043, 55.996448]
    },
    agrarka: {
        name: 'Аграрный универститет',
        shortName: 'Аграрка',
        dgisLink: 'https://go.2gis.com/74kvh',
        yandexLink: 'https://yandex.ru/maps/-/CDUvyL6q',
        yandexLocation: [54.739114, 55.981697]
    },
    ogni: {
        name: 'Огни Уфы',
        shortName: 'Огни',
        dgisLink: 'https://go.2gis.com/9ndss',
        yandexLink: 'https://yandex.ru/maps/-/CDUvyXo-',
        yandexLocation: [54.737480, 55.972054]
    },
    profsouzov: {
        name: 'Дом профсоюзов',
        dgisLink: 'https://go.2gis.com/wvaxdt',
        yandexLink: 'https://yandex.ru/maps/-/CDUvy-mi',
        yandexLocation: [54.731577, 55.946526]
    },
    art: {
        name: 'Арт-квадрат',
        dgisLink: 'https://go.2gis.com/sh7dv',
        yandexLink: 'https://yandex.ru/maps/-/CDUv5Uy3',
        yandexLocation: [54.727781, 55.946709]
    },
    sovet: {
        name: 'Советская площадь',
        dgisLink: 'https://go.2gis.com/6byt9',
        yandexLink: 'https://yandex.ru/maps/-/CDUv5U~y',
        yandexLocation: [54.721731, 55.947804]
    },
    telek: {
        name: 'Телецентр/памятник Салавата Юлаева',
        shortName: 'Телек/Конь',
        dgisLink: 'https://go.2gis.com/bfowx',
        yandexLink: 'https://yandex.ru/maps/-/CDUv5J8f',
        yandexLocation: [54.718735, 55.925838]
    },
    zaebal: {
        name: 'Белый дом',
        dgisLink: 'https://go.2gis.com/5h82n',
        yandexLink: 'https://yandex.ru/maps/-/CDUv5V-8',
        yandexLocation: [54.716762, 55.942992]
    },
    sad: {
        name: 'Сад Салавата Юлаева',
        dgisLink: 'https://go.2gis.com/ezkbh',
        yandexLink: 'https://yandex.ru/maps/-/CDUv5O8x',
        yandexLocation: [54.713312, 55.950942]
    },
    stella: {
        name: 'Стела "Город трудовой доблести',
        dgisLink: 'https://go.2gis.com/0o1xx',
        yandexLink: 'https://yandex.ru/maps/-/CDUv5D30',
        yandexLocation: [54.712356, 55.958869]
    },
    monument: {
        name: 'Монумент Дружбы',
        shortName: 'Монумент',
        dgisLink: 'https://go.2gis.com/iymuu',
        yandexLink: 'https://yandex.ru/maps/-/CDUv5Hnb',
        yandexLocation: [54.711826, 55.963464]
    },
    magnit: {
        name: 'Магнит (магазин)',
        dgisLink: 'https://go.2gis.com/k05tg',
        yandexLink: 'https://yandex.ru/maps/-/CDUvJYpi',
        yandexLocation: [54.781529, 56.074005]
    },
    monetka: {
        name: 'Монетка (магазин)',
        dgisLink: 'https://go.2gis.com/g6ihu',
        yandexLink: 'https://yandex.ru/maps/-/CDUvJJPx',
        yandexLocation: [54.787722, 56.135513]
    },
    five: {
        name: 'Пятёрочка (магазин)',
        dgisLink: 'https://go.2gis.com/99kb3',
        yandexLink: 'https://yandex.ru/maps/-/CDUvJNMn',
        yandexLocation: [54.810425, 56.099286]
    },
    sipadown: {
        name: 'Спуск в сипу',
        dgisLink: 'https://go.2gis.com/m00nz2',
        yandexLink: 'https://yandex.ru/maps/-/CDUvJR-X',
        yandexLocation: [54.753421, 56.032616]
    },
    kash: {
        name: 'Кашкадан',
        dgisLink: 'https://go.2gis.com/pmdso',
        yandexLink: 'https://yandex.ru/maps/-/CDUvJVY3',
        yandexLocation: [54.774912, 56.059658]
    },
    biatlonka: {
        name: 'Битлонка',
        dgisLink: 'https://2gis.ru/ufa/geo/2393147187396613/56.038216%2C54.809347?m=56.038553%2C54.808281%2F17.73',
        yandexLink: 'https://yandex.ru/maps/-/CDUCQ2m7',
        yandexLocation: [54.809384, 56.038384]
    },
}

// Катки и мероприятия
export const programs: IPrograms = {
    evening: {
        id: 'evening',
        name: "Вечерняя разминочная",
        date: '22.09 19:00',
        leader: 'Анна',
        shortDescription: 'Лайтово прокатим и разомнём тебя, а также поможем вкатиться в уфимский стиль',
        description: 'Вечерняя разминочная катка для того, чтобы отвлечь тебя от рабочей недели и напомнить о приятном мире роликов',
        temp: 'Лёгкий',
        start: places.gors,
        finish: places.mashinka,
        interPoints: [places.gdk, places.pp, places.ordjon],
        route: eveningRoute,
    },
    'night-velo': {
        id: 'night-velo',
        name: "Ночь 1000 велосипедистов",
        date: '22.09 21:00',
        leader: 'Алексей',
        shortDescription: 'С радостью прокатимся вместе с тобой на городском мероприятии велосипедистов',
        description: 'Уже более десяти лет подряд в Уфе выделяется день, в который собираются тысячи велосипедистов и проезжают по перекрытым улицам этого города. И второй год подряд в Уфе проводится подобное мероприятие в вечернее время. Предлагаем вместе с нами проехать по проезжей части бок о бок с велосипедистами, познакомиться с кем-то из них поближе и ощутить настроение подобного масового мероприятия!',
        temp: 'Лёгкий',
        start: places.mashinka,
        finish: places.mashinka,
        route: nightVelo,
    },
    bar: {
        id: 'bar',
        name: "Бар",
        date: 'Ночь 22-23.09 00:00',
        shortDescription: 'Познакомим с местными напитками, роллерами и вайбом',
        description: 'После такого насыщенного вечера стоит задуматься о хорошем отдыхе! А мы готовы составить тебе приятную и весёлую компанию в Темабаре',
        start: places.tema,
    },
    excursion: {
        id: 'excursion',
        name: "Экскурсионная интересная",
        date: '23.09 16:00',
        leader: 'Анна и Артём',
        shortDescription: 'Расскажем и покажем этот удивительный город (деревню)',
        description: 'Получилось выжить после вчерашнего? Или только прибываешь в город? Отлично, пора бы и про Уфу немного узнать, а то дома не поймут, как это ничего не знаешь про Уфу?! Покажем достопримечательности и расскажем пару легенд',
        temp: 'Средний с остановками',
        start: places.gors,
        finish: places.monument,
        interPoints: [places.ds, places.agrarka, places.ogni, places.arena, places.profsouzov, places.art, places.sovet, places.telek, places.zaebal, places.sad, places.stella],
        route: excursion,
    },
    night: {
        id: 'night',
        name: "Ночная отбитая",
        date: '23.09 23:00',
        leader: 'Алексей',
        shortDescription: 'Подарим незабываемые эмоции от ночной Уфы',
        description: 'Самая сочная катка Уфы. Приготовили для тебя огни ночного города, нашли атмосферные места, собрали лакомый маршрут с несколькими затяжными спусками. Но не волнуйся, поможем добраться до финиша в целости и сохранности',
        temp: 'Ниже среднего, средне-высокий',
        start: places.vdnh,
        finish: places.pp,
        interPoints: [places.sipadown, places.kash, places.magnit, places.monetka, places.mashinka, places.five, places.ordjon ],
        route: night,
    },
    activity: {
        id: 'activity',
        name: "Активити",
        date: '24.09 16:00',
        leader: 'Анна',
        shortDescription: 'Проведём для тебя мини-соревнования, конкурсы и закрепим приятные впечатления',
        description: 'Выживаешь второй день подряд?! Да ты мощный роллер! Давай узнаем, насколько мощный? Приглашаем тебя поучаствовать в соревнованиях: на других посмотреть, себя показать. Ну и самое главное - хорошо повеселиться, ведь сезон заканчивается, стоит насладиться последними катабельными неделями по максимуму!',
        start: places.arena,
    },
    kebabs: {
        id: 'kebabs',
        name: "Шашлыки",
        date: '24.09 17:00',
        leader: 'Анна',
        shortDescription: 'Накормим вкусными шашлыками и уютно посидим',
        description: 'Выживаешь второй день подряд?! Да ты мощный роллер! Хватит катать, пора восстанавливаться. Как физически, так и морально! Приезжай к нам, мы накормим и составим тебе прекрасную компанию!',
        start: places.biatlonka,
    }
}

export const defaultMapLocations: { [programName: string]: {center: [x: number, y: number], zoom: number }} = {
    evening: {center: [54.791801, 56.067468], zoom: 12},
    'night-velo': {center: [54.791801, 56.067468], zoom: 12},
    excursion: {center: [54.733046, 55.971057], zoom: 11},
    night: {center: [54.791801, 56.067468], zoom: 11},
  };
