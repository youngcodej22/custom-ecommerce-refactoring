// assets
import benefitMembership from '/assets/benefit/benefit-membership.png';
import benefitKakao from '/assets/benefit/benefit-kakao.png';
import benefitReview from '/assets/benefit/benefit-review.png';

const benefits = [
    {
        title: 'MEMBERSHIP',
        text: '맥케이슨 회원 혜택 안내',
        imageAlt: '맥케이슨 회원 혜택 안내',
        imageSrc: benefitMembership,
    },
    {
        title: 'REVIEW',
        text: '상품 리뷰 작성 시 마일리지 적립',
        imageAlt: '프로모션 리뷰',
        imageSrc: benefitReview,
    },
    {
        title: 'KAKAOTALK',
        text: '플러스친구 등록 시 쿠폰 증정',
        imageAlt: '프로모션 카카오톡',
        imageSrc: benefitKakao,
    },
]

export default benefits;