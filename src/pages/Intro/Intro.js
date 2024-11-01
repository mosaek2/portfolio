import FadeIn from '../../components/FadeIn/FadeIn';
import FadeInAlt from '../../components/FadeIn/FadeInAlt';
import FadeInAlt2 from '../../components/FadeIn/FadeInAlt2';
import FadeInAlt3 from '../../components/FadeIn/FadeInAlt3';
import Main from '../../components/Main/Main';
import './Intro.css';

export default function Intro() {
    return (
        <div className='intro'>
            <Main page='intro'>
                <FadeIn>
                    <p className='big-title'>권혁민 포트폴리오</p>
                </FadeIn>

                <FadeInAlt marginTop={150}>
                    <p className='big-title-2'>안녕하세요! 저는 C언어로 프로그래밍에 입문하여 개발에 대한 흥미를 키웠습니다.</p>
                </FadeInAlt>

                <FadeInAlt2 marginTop={80}>
                    <p className='big-title-2'>이를 바탕으로 6개월간 풀스택 개발자 양성과정을 수료하면서 웹 개발의 전반적인 기술 스택을 익히고,</p>
                </FadeInAlt2>
                <FadeInAlt2 marginTop={20}>
                    <p className='big-title-2'>프론트엔드와 백엔드 모두를 아우르는 프로젝트 경험을 쌓았습니다."</p>
                </FadeInAlt2>

                <FadeInAlt3 marginTop={80}>
                    <p className='big-title-2'>다른 사람이 쉽게 이해하고 수정할 수 있는 코드를 작성하는 것을 목표로 하고 있습니다.</p>
                </FadeInAlt3>
            </Main>
        </div>
    )
}