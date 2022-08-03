import { useEffect } from "react";

const onClickWithUserSelectNone = (action = () => { }) => {

    // need use with onmousedown event
    document.documentElement.style = "user-select:none";
    document.documentElement.addEventListener('mouseup', onMouseUpHandler);

    function onMouseUpHandler() {
        action && action();
        document.documentElement.style = null;
        document.documentElement.removeEventListener('mouseup', onMouseUpHandler);
    }

}

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


export { changeCSS_RootVariable, onClickWithUserSelectNone }

