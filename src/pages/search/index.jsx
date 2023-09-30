import React from 'react';
import "./style.scss";

function Search() {
  return (
    <div>
        <i class="fa-solid fa-magnifying-glass iconn"></i>
        <input className='inp_search' placeholder='Ada görə axtarış'/>
    </div>
  )
}

export default Search