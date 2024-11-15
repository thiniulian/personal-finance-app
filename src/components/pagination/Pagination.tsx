import { useState } from 'react';
import './pagination.scss'; 
import Right from '../../assets/images/icon-caret-right.svg?react';
import Left from '../../assets/images/icon-caret-left.svg?react';

// TODO: functionalitate butoane
export default function Pagination () {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth); 
    
    window.addEventListener('resize', () => {
        setViewportWidth(window.innerWidth);
    })

    return(
        <div className='Pagination'>
            <button className='page-nav-btn'>
                <Left role='img' aria-label='Previous'/>
                { viewportWidth < 768 ? '' : 'Prev' }
                {/* add text on prev and next buttons, when viewport width above tablet size */}
            </button>

            <div className='all-page-btns'>
                <button className='page-btn'>1</button>
                <button className='page-btn active'>2</button>
                <button className='page-btn'>3</button>
                <button className='page-btn'>4</button>
                <button className='page-btn'>5</button>
            </div>

            <button className='page-nav-btn'>
                { viewportWidth < 768  ? '' : 'Next' }
                <Right role='img' aria-label='Next'/>
            </button>
        </div>        
    );
} 