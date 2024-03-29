// New
import product_new_1 from '/assets/product/new/01.jpg';
import product_new_2 from '/assets/product/new/02.jpg';
import product_new_3 from '/assets/product/new/03.jpg';
import product_new_4 from '/assets/product/new/04.jpg';
import product_new_5 from '/assets/product/new/05.jpg';
import product_new_6 from '/assets/product/new/06.jpg';
import product_new_7 from '/assets/product/new/07.jpg';
import product_new_8 from '/assets/product/new/08.jpg';
// Men
import product_men_1 from '/assets/product/men/01.jpg';
import product_men_2 from '/assets/product/men/02.jpg';
import product_men_3 from '/assets/product/men/03.jpg';
import product_men_4 from '/assets/product/men/04.jpg';
import product_men_5 from '/assets/product/men/05.jpg';
import product_men_6 from '/assets/product/men/06.jpg';
import product_men_7 from '/assets/product/men/07.jpg';
import product_men_8 from '/assets/product/men/08.jpg';
// Women
import product_women_1 from '/assets/product/women/01.jpg';
import product_women_2 from '/assets/product/women/02.jpg';
import product_women_3 from '/assets/product/women/03.jpg';
import product_women_4 from '/assets/product/women/04.jpg';
import product_women_5 from '/assets/product/women/05.jpg';
import product_women_6 from '/assets/product/women/06.jpg';
import product_women_7 from '/assets/product/women/07.jpg';
import product_women_8 from '/assets/product/women/08.jpg';
// Acc
import product_acc_1 from '/assets/product/acc/01.jpg';
import product_acc_2 from '/assets/product/acc/02.jpg';
import product_acc_3 from '/assets/product/acc/03.jpg';
import product_acc_4 from '/assets/product/acc/04.jpg';
import product_acc_5 from '/assets/product/acc/05.jpg';
import product_acc_6 from '/assets/product/acc/06.jpg';
import product_acc_7 from '/assets/product/acc/07.jpg';
import product_acc_8 from '/assets/product/acc/08.jpg';

// md pick
import md_pick_1 from '/assets/mdpick/01_pick.jpg';
import md_pick_2 from '/assets/mdpick/02_pick.jpg';
import md_pick_3 from '/assets/mdpick/03_pick.jpg';

// Label
import labelMen from '/assets/label/label-men.png';
import labelMile from '/assets/label/label-mile.png';
import labelNew from '/assets/label/label-new.png';

interface CoordinationItem {
    title: string;
    imageAlt: string;
    imageSrc: string;
}

const coordination: CoordinationItem[] = [
    {
        title: '코디네이션 1번',
        imageAlt: 'MD선정 코디 1번',
        imageSrc: md_pick_1,
    },
    {
        title: '코디네이션 2번',
        imageAlt: 'MD선정 코디 2번',
        imageSrc: md_pick_2,
    },
    {
        title: '코디네이션 3번',
        imageAlt: 'MD선정 코디 3번',
        imageSrc: md_pick_3,
    },
]

export default coordination;