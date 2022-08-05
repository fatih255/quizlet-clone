import { useEffect, useState } from "react";



const UseScreenWidthBreakPoint = (query) => {
    const [responsiveBreakPoint, setResponsiveBreakPoint] = useState(null);

    useEffect(() => {
        if (responsiveBreakPoint === null) {
            setResponsiveBreakPoint(widthBreakPoint(query));
        }
        window.onresize = () => {
            const isbreakPoint = widthBreakPoint(query);
            if (widthBreakPoint(query) != responsiveBreakPoint) {
                setResponsiveBreakPoint(isbreakPoint);
            }
        };

        //return () => window.onresize = null;

    }, [])

    return responsiveBreakPoint;

}




function widthBreakPoint(str) {
    const string = str.replace(/\s/g, '');
    const W = { value: window.innerWidth, index: string.search('w') };
    const queryWidths = findMatchesNumber(string);
    let conditions = [];
    const operators = [
        {
            index: string.search('>'),
            operator: '>',
        },
        {
            index: string.search('<'),
            operator: '<',
        },
    ];

    queryWidths.map((qw) => {
        if (operators.some((o) => o.index > 0)) {
            const ActiveOperators = operators.filter((o) => o.index > 0);
            ActiveOperators.map((opt) => {
                if (opt.operator === '>') {
                    if (W.index > qw.index) {
                        conditions.push(W.value < qw.value);
                    }
                    if (W.index < qw.index) {
                        conditions.push(W.value > qw.value);
                    }
                } else {
                    if (W.index < qw.index) {
                        conditions.push(W.value < qw.value);
                    }
                    if (W.index > qw.index) {
                        conditions.push(W.value > qw.value);
                    }
                }
            });
        }
    });

    function findMatchesNumber(str) {
        let results = [];
        let matches = [...str.matchAll(new RegExp(/\d+/, 'g'))];
        matches.forEach((match) => {
            results.push({ value: parseInt(match[0]), index: match.index });
        });
        return results;
    }

    return conditions[0];
}

export default UseScreenWidthBreakPoint;
