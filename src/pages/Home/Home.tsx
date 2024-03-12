import MainVisual from '../../components/MainVisual/MainVisual';
import MainContents from '../../components/MainContents/MainContents';
import MainMdPick from '../../components/MainMdPick/MainMdPick';
import SideBanner from '../../components/SideBanner/SideBanner';
import Insta from '../../components/Insta/Insta';

const Home = () => {
    return (
        <>
            <MainVisual />
            <MainContents />
            <MainMdPick />
            <SideBanner />
            <Insta />
        </>
    );
};

export default Home;
