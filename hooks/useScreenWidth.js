import { useEffect, useState } from "react";



const UseScreenWidth = (maxWidth) => {
    const [responsiveBreakPoint, setResponsiveBreakPoint] = useState(null);

    useEffect(() => {
        if (responsiveBreakPoint === null) {
            setResponsiveBreakPoint(window.innerWidth < maxWidth);
        }
        window.onresize = () => {
            if (window.innerWidth < maxWidth != responsiveBreakPoint) {
                setResponsiveBreakPoint(window.innerWidth < maxWidth)
            }
        };

        //return () => window.onresize = null;

    }, [])

    return responsiveBreakPoint;

}

export default UseScreenWidth;
