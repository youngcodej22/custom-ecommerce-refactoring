// md pick
import md_pick_1 from '/assets/mdpick/01_pick.jpg';
import md_pick_2 from '/assets/mdpick/02_pick.jpg';
import md_pick_3 from '/assets/mdpick/03_pick.jpg';
import md_pick_4 from '/assets/mdpick/04_pick.jpg';
import md_pick_5 from '/assets/mdpick/05_pick.jpg';
import md_pick_6 from '/assets/mdpick/06_pick.jpg';
import md_pick_7 from '/assets/mdpick/07_pick.jpg';
import md_pick_8 from '/assets/mdpick/08_pick.jpg';
import md_pick_9 from '/assets/mdpick/09_pick.jpg';
import md_pick_10 from '/assets/mdpick/10_pick.jpg';

// data
import coordinationData from '../data/json/coordination.json';

// each coordi = 3 product
const display_1 = coordinationData.filter((item) => item.bestDisplay === 1);
const display_2 = coordinationData.filter((item) => item.bestDisplay === 2);
const display_3 = coordinationData.filter((item) => item.bestDisplay === 3);

// Tab: Brand > Coordination
const display_4 = coordinationData.filter((item) => item.bestDisplay === 4);
const display_5 = coordinationData.filter((item) => item.bestDisplay === 5);
const display_6 = coordinationData.filter((item) => item.bestDisplay === 6);
const display_7 = coordinationData.filter((item) => item.bestDisplay === 7);
const display_8 = coordinationData.filter((item) => item.bestDisplay === 8);
const display_9 = coordinationData.filter((item) => item.bestDisplay === 9);
const display_10 = coordinationData.filter((item) => item.bestDisplay === 10);


interface CoordinationItem {
    title: string;
    imageAlt: string;
    imageSrc: string;
    products: object[],
    showBest: boolean
}

const coordination: CoordinationItem[] = [
    {
        title: '코디네이션 1번',
        imageAlt: 'MD선정 코디 1번',
        imageSrc: md_pick_1,
        products: display_1,
        showBest: true
    },
    {
        title: '코디네이션 2번',
        imageAlt: 'MD선정 코디 2번',
        imageSrc: md_pick_2,
        products: display_2,
        showBest: true
    },
    {
        title: '코디네이션 3번',
        imageAlt: 'MD선정 코디 3번',
        imageSrc: md_pick_3,
        products: display_3,
        showBest: true
    },
    {
        title: '코디네이션 4번',
        imageAlt: 'MD선정 코디 4번',
        imageSrc: md_pick_4,
        products: display_4,
        showBest: false
    },
    {
        title: '코디네이션 5번',
        imageAlt: 'MD선정 코디 5번',
        imageSrc: md_pick_5,
        products: display_5,
        showBest: false
    },
    {
        title: '코디네이션 6번',
        imageAlt: 'MD선정 코디 6번',
        imageSrc: md_pick_6,
        products: display_6,
        showBest: false
    },
    {
        title: '코디네이션 7번',
        imageAlt: 'MD선정 코디 7번',
        imageSrc: md_pick_7,
        products: display_7,
        showBest: false
    },
    {
        title: '코디네이션 8번',
        imageAlt: 'MD선정 코디 8번',
        imageSrc: md_pick_8,
        products: display_8,
        showBest: false
    },
    {
        title: '코디네이션 9번',
        imageAlt: 'MD선정 코디 9번',
        imageSrc: md_pick_9,
        products: display_9,
        showBest: false
    },
    {
        title: '코디네이션 10번',
        imageAlt: 'MD선정 코디 10번',
        imageSrc: md_pick_10,
        products: display_10,
        showBest: false
    },
]

export default coordination;