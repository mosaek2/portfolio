import { useEffect, useRef, useState } from 'react';
import './FadeIn.css';

export default function FadeIn({ children, marginTop }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const currentElement = domRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return (
        <div
            style={{ marginTop: marginTop }}
            className={`fadeIn ${isVisible ? 'visible' : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    )
}