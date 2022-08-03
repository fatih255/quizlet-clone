const userSelectNone = (action = () => { }, withmousedown = false) => {

    document.documentElement.style.userSelect = 'none'
    //handler
    action();
    document.documentElement.style.userSelect = null


    const mouseDownHandler = () => {
        document.documentElement.style.userSelect = 'none'
    }
    const mouseUpHandler = () => {
        document.documentElement.style.userSelect = null
        //handler
        action();
        document.removeEventListener('mousedown', mouseDownHandler)
        document.removeEventListener('mouseup', mouseUpHandler)
    }
    if (withmousedown) {
        document.addEventListener('mousedown', mouseDownHandler)
        document.addEventListener('mouseup', mouseUpHandler)
    }

}

export { userSelectNone }

