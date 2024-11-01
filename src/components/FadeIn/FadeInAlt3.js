import { useEffect, useRef, useState } from 'react';
import './FadeInAlt.css';

export default function FadeInAlt({ children, marginTop }) {
    const delay = 1500;
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const currentElement = domRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
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
            className={`fadeInAlt ${isVisible ? 'visible' : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    )
}