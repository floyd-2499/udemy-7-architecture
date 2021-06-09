import React from 'react'

const Link = ({className, href, children}) => {

    const onClick= (event) => {

        if(event.metaKey || event.ctrlKey) {
            return;
        }
        // above if is for ctrl+click opens new tab okk....!!

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <div>
            <a onClick={onClick} className={className} href={href}> { children} </a>
        </div>
    )
}

export default Link
