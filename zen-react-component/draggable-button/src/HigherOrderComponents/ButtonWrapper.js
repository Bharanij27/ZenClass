import React from 'react';

let canMove = false;

const styles = {
    button : {
        position : 'fixed',
        top : '0',
        left : '0',
    }
}

const callFunc = e => {
    canMove = !canMove
    if(canMove) add(e);
    else remove(e);
}

const move = e =>
{
    debugger
    const el= document.querySelector('#btn1');
    el.style.left = `${e.clientX - 1}px`
    el.style.top = `${e.clientY - 1}px`
}
const add = () => window.addEventListener('mousemove',move);

const remove = () => window.removeEventListener('mousemove',move);

export default (WrappedComponent) => {
    return function wrappedRender(args){
        return WrappedComponent({callFunc, styles})
    }
}