import React from 'react';
import './Content.css';

function Content({title, passage}) {
  return (
    <section>
        <h1 className='content__title'>{title}</h1>
        <div className="content__list">
          <div className="content__text">
            <p>
            {passage}
            </p>
          </div>
        <div className="content__effect"></div>
        </div>
    </section>
  )
}

export default Content