const DarkMode = (isDarkMode, setIsDarkMode) => {
    setIsDarkMode(prevMode => {
        const newMode = !prevMode;

        // Toggle global dark-mode class on root (or body)
        const root = document.getElementById("root");
        if (root) {
            if (newMode) {
                root.classList.add("dark-mode");
                // Redundancy for team section
                const team = document.getElementById("team");
                if (team) team.classList.add("dark-mode");
            } else {
                root.classList.remove("dark-mode");
                const team = document.getElementById("team");
                if (team) team.classList.remove("dark-mode");
            }
        }

        // Direct style manipulation for legacy/inline dark mode
        const white = 'var(--whiteBg)';
        const black = 'var(--mainBgcolorDark)';
        const midBlack = 'var(--MyDarkGrayBg)';
        const lightBlack = 'var(--lightGrayColor)';
        const lightwhite = 'var(--lightWhite)';
        const navRed = 'var(--topNavBgColor)';
        const darkBlue = 'var(--cardHeadColorDark)';
        const darkBlue2 = 'var(--d-blue)';

        // All relevant elements (with updated selectors)
        const elements = [
            { el: document.getElementById("ToperNav"), styles: { background: newMode ? black : navRed } },
            { el: document.getElementById("MobileNav"), styles: { background: newMode ? black : navRed } },
            { el: document.getElementById("homeA"), styles: { background: newMode ? midBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("homeB"), styles: { background: newMode ? midBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("dText"), styles: { color: newMode ? white : midBlack } },
            { el: document.getElementById("team"), styles: { background: newMode ? midBlack : white } },
            { el: document.getElementById("timeTable"), styles: { background: newMode ? midBlack : white } },
            { el: document.getElementById("noticeBg"), styles: { background: newMode ? midBlack : white } },
            { el: document.getElementById("TestimonialChild"), styles: { background: newMode ? midBlack : white } },
            { el: document.getElementById("TestimonialParent"), styles: { background: newMode ? midBlack : white } },
            { el: document.getElementById("liveCards"), styles: { background: newMode ? midBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("liveA"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("liveB"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("liveC"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("liveD"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("HomeOffer"), styles: { background: newMode ? lightBlack : white } },
            { el: document.getElementById("signUpNow"), styles: { background: newMode ? lightBlack : white } },
            { el: document.getElementById("CourseListNav"), styles: { background: newMode ? black : navRed } },
            { el: document.getElementById("studentZoneNav"), styles: { background: newMode ? black : navRed } },
            // About sections: switch to class for multiple elements
            ...Array.from(document.querySelectorAll(".about-section")).map(el => ({
                el,
                styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack }
            })),
            { el: document.getElementById("MissionLeft1"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("MissionLeft2"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("MissionRight"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("MyCardBg"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("Accordion1"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("counter1"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("counter2"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("counter3"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("counter4"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            // { el: document.getElementById("mainCourseEle"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("CourseEleChild"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("cerEle"), styles: { background: newMode ? lightBlack : white, color: newMode ? white : midBlack } },
            { el: document.getElementById("MyFooterColor"), styles: { background: newMode ? lightBlack : darkBlue, color: newMode ? white : midBlack } },
            { el: document.getElementById("thumblain"), styles: { background: newMode ? lightBlack : darkBlue, color: newMode ? white : midBlack } },
            { el: document.getElementById("BAddress"), styles: { background: newMode ? lightBlack : darkBlue2, color: newMode ? white : midBlack } },
            { el: document.getElementById("branchBgCard"), styles: { background: newMode ? midBlack : darkBlue } },
            { el: document.getElementById("branchChild"), styles: { background: newMode ? midBlack : darkBlue } },
            { el: document.getElementById("shortContact"), styles: { background: newMode ? midBlack : darkBlue } },
            { el: document.getElementById("shortContactA"), styles: { background: newMode ? midBlack : darkBlue } },
            { el: document.getElementById("absirfdiitBg"), styles: { background: newMode ? midBlack : navRed } },
        ];

        elements.forEach(({ el, styles }) => {
            if (el && styles) {
                Object.entries(styles).forEach(([prop, value]) => {
                    el.style[prop] = value;
                });
            }
        });

        // Also update root background for legacy support
        if (root) {
            root.style.background = newMode ? black : lightwhite;
        }

        return newMode;
    });
};

export default DarkMode;