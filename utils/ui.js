import { useEffect } from "react";



// need use with onmousedown event
const onClickWithUserSelectNone = (action = () => { }, e = null) => {

    let isMouseOutTarget = false;
    document.documentElement.style = "user-select:none";
    document.documentElement.addEventListener('mouseup', onMouseUpHandler);

    if (e) {
        e.target.addEventListener('mouseout', onMouseOutHandler)
        function onMouseOutHandler() {
            isMouseOutTarget = true;
            e.target.removeEventListener('mouseout', onMouseOutHandler)
        }
    }

    function onMouseUpHandler() {
        if (e) {
            !isMouseOutTarget && action && action();
        } else {
            action && action();
        }
        document.documentElement.style = null;
        document.documentElement.removeEventListener('mouseup', onMouseUpHandler);

    }

}

// when state change , change any css :root variables . State value type must be boolean
const changeCSS_RootVariable = (
    { trigger,
        variableName,
        value: { true: trueVal, false: falseVal }
    }) => {

    useEffect(() => {
        var r = document.querySelector(':root');
        r.style = trigger ? `${variableName}: ${trueVal}` : `${variableName}: ${falseVal}`;
    }, [trigger]);
}


function selectorSass(cx) {
    let selector = (s) => { return `.${cx(s[0])}` }
    return { selector }
}
// USAGE : const {selector} = selectorSass(cx('test'))    use with backticks like selector.`testimonial-slider`

export { changeCSS_RootVariable, onClickWithUserSelectNone, selectorSass }

