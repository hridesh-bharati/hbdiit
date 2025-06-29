import React, { useState, useEffect } from 'react';
function Title() {
    const Title1 = "Drishtee institute of information technology"
    const Title2 = "Drishtee Computer Center"
    const [title, setTitle] = useState(Title1);
    useEffect(() => {
        const timer = setInterval(() => {
            setTitle(prevTitle => prevTitle === Title1 ? Title2 : Title1);
        }, 2000);
        return () => clearInterval(timer);
    }, []);
    useEffect(() => {
        document.title = title;
    }, [title]);
    return null;
}
export default Title;
