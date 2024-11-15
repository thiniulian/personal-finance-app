import { useState } from 'react';
import styles from './pagination.module.scss'; 
import Right from '../../assets/images/icon-caret-right.svg?react';
import Left from '../../assets/images/icon-caret-left.svg?react';

// TODO: functionalitate butoane
export default function Pagination () {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth); 
    
    window.addEventListener('resize', () => {
        setViewportWidth(window.innerWidth);
    })

    return(
        <div className={styles.pagination}>
            <button className={styles.page_nav_btn}>
                <Left role='img' aria-label='Previous'/>
                { viewportWidth < 768 ? '' : 'Prev' }
                {/* add text on prev and next buttons, when viewport width above tablet size */}
            </button>

            <div className={styles.all_page_btns}>
                <button className={styles.page_btn}>1</button>
                <button className={`${styles.page_btn} ${styles.active}`}>2</button>
                <button className={styles.page_btn}>3</button>
                <button className={styles.page_btn}>4</button>
                <button className={styles.page_btn}>5</button>
            </div>

            <button className={styles.page_nav_btn}>
                { viewportWidth < 768  ? '' : 'Next' }
                <Right role='img' aria-label='Next'/>
            </button>
        </div>        
    );
} 