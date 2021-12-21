import React from 'react';
import loader from '../../img/loader.gif';

import style from './loader.module.css';

const Loader = () => {
    return(
        <div className={ style.loaderWrapper }>
            <img src={ loader } alt="loader"/>
        </div>
    )
}

export default Loader;