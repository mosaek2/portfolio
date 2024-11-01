import { useEffect, useRef, useState } from 'react';
import FadeIn from '../../components/FadeIn/FadeIn';
import Main from '../../components/Main/Main';
import { P1, P2 } from '../../components/P/P';
import Title from '../../components/Title/Title';
import './Profile.css';

export default function Profile() {
    const [targetCompany] = useState('target company');
    const expandTimer = 1000;
    const typeTimer = 2000;
    const typeSpeed = 100;

    const [isExpand, setIsExpand] = useState(false);
    const [typedText, setTypedText] = useState('');

    // 타이머와 인터벌 관리를 위한 ref 사용
    const typingTimeoutRef = useRef(null);
    const expandTimeoutRef = useRef(null);
    const cursorIntervalRef = useRef(null);

    useEffect(() => {
        // Expand 타이머 설정
        expandTimeoutRef.current = setTimeout(() => {
            setIsExpand(true);
        }, expandTimer);

        let index = 0;
        let text = '';

        // 타이핑 효과 설정
        const typeEffect = () => {
            if (index < targetCompany.length) {
                text += targetCompany[index];
                setTypedText(text);
                index++;
                typingTimeoutRef.current = setTimeout(typeEffect, typeSpeed);
            } else {
                // 타이핑이 끝난 후 커서 깜빡임 시작
                if (!cursorIntervalRef.current) {
                    cursorIntervalRef.current = setInterval(() => {
                        const cursor = document.getElementById('cursor');
                        if (cursor) {
                            cursor.textContent = cursor.textContent === '|' ? ' ' : '|';
                        }
                    }, 500);
                }
            }
        };

        // 타이핑 타이머 시작
        typingTimeoutRef.current = setTimeout(typeEffect, typeTimer);

        // 컴포넌트가 언마운트될 때 클린업
        return () => {
            clearTimeout(typingTimeoutRef.current);
            clearTimeout(expandTimeoutRef.current);
            if (cursorIntervalRef.current) {
                clearInterval(cursorIntervalRef.current);
                cursorIntervalRef.current = null; // 인터벌 초기화
            }
        };
    }, [targetCompany]);

    return (
        <div className='profile'>
            <Main page='profile'>
                <FadeIn>

                    <Title width={900} />

                    <div className='hyukmin-profile-box'>
                        <p className='code-wrapper'>
                            <P1 color='#d1d1d1'>const [</P1>
                            <P1 color='#47ffbd'>hyukminProfile</P1>
                            <P1 color='#d1d1d1'>, </P1>
                            <P1 color='#bdbe7e'>setHyukminProfile</P1>
                            <P1 color='#d1d1d1'>] = </P1>
                            <P1 color='#ffa41c'>useState(</P1>
                            <P1 color='#a84848'>&#123;</P1>

                            <br />
                            <br />

                            <P2 color='#74d5ff'>name: </P2>
                            <P1 color='#c6f3c5'>권혁민</P1>
                            <P1 color='#d1d1d1'>,</P1>

                            <br />

                            <P2 color='#74d5ff'>birth: </P2>
                            <P1 color='#c6f3c5'>'1991-05-26'</P1>
                            <P1 color='#d1d1d1'>,</P1>

                            <br />

                            <P2 color='#74d5ff'>phone: </P2>
                            <P1 color='#c6f3c5'>'010-3002-0014'</P1>
                            <P1 color='#d1d1d1'>,</P1>

                            <br />

                            <P2 color='#74d5ff'>gitHub: </P2>
                            <P1 color='#c6f3c5'>
                                <a
                                    style={{ textDecorationLine: 'underline', cursor: 'pointer' }}
                                    href='https://github.com/mosaek2'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    'https://github.com/mosaek2'
                                </a>
                            </P1>
                            <P1 color='#d1d1d1'>,</P1>

                            <br />

                            <P2 color='#74d5ff'>email: </P2>
                            <P1 color='#c6f3c5'>'mosaek2@gmail.com'</P1>
                            <P1 color='#d1d1d1'>,</P1>

                            <br />
                            <br />

                            <P2 color='#74d5ff'>workAt: </P2>
                            <P1 color='#4E75FF'>null</P1>
                            <P1 color='#d1d1d1'>,</P1>

                            <br />

                            <P2 color='#74d5ff'>joinDate: </P2>
                            <P1 color='#4E75FF'>null</P1>

                            <br />
                            <br />

                            <P1 color='#a84848'>&#125;</P1>
                            <P1 color='#ffa41c'>)</P1>
                            <P1 color='#d1d1d1'>;</P1>
                        </p>
                    </div>

                    <div
                        className={`set-hyukmin-profile-box ${isExpand ? 'visible' : ''}`}
                    >
                        <div className='code-wrapper'>
                            <P1 color='#bdbe7e'>setHyukminProfile(</P1>

                            <br />
                            <br />

                            <P2 color='#74d5ff'>...hyukminProfile</P2>
                            <P1 color='#d1d1d1'>,</P1>

                            <br />

                            <P2 color='#74d5ff'>workAt: </P2>
                            <P1 color='#c6f3c5'>'{typedText}'</P1>
                            <P1 color='#d1d1d1'>,</P1>

                            <br />

                            <P2 color='#74d5ff'>joinDate: </P2>
                            <P1 color='#c6f3c5'><span id="cursor"></span></P1>

                            <br />
                            <br />

                            <P1 color='#72731d'>)</P1>
                            <P1 color='#d1d1d1'>;</P1>
                        </div>
                    </div>
                </FadeIn>
            </Main >
        </div>
    );
}