import { useEffect, useState } from "react";

const UseScreenWidth = () => {
    const [ScreenWidth, setScreenWidth] = useState(null);
    const responsiveBreakPoint = ScreenWidth < 1279;

    useEffect(() => {
        if (ScreenWidth === null) {
            setScreenWidth(window.innerWidth);
        }
        window.onresize = () => {
            setScreenWidth(window.innerWidth);
        }
        return () => window.onresize = null;
    }, [])

    return { responsiveBreakPoint: responsiveBreakPoint };

}

export default UseScreenWidth;
