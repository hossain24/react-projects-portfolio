import React, { useEffect, useRef } from 'react';
import './typed-feature.scss';
import Typed from "typed.js";

const TypedFeature = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["HTML, CSS, JavaScript, React"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "!"
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div className="TypedFeature">
                <h1>Front-end Technologies</h1>
                <span ref={el}></span>
            </div>
        </>
    );
}

export default TypedFeature;
