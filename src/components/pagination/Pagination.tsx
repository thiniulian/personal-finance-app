import './pagination.scss'; 
import Right from '../../assets/images/icon-caret-right.svg?react';
import Left from '../../assets/images/icon-caret-left.svg?react';

// TODO: functionalitate butoane
export default function Pagination () {
    return(
        <div className="pagination">
            <button className="page-nav-btn">
                <Left role='img' aria-label='Previous'/>
                <span className='btn-text'>Prev</span>
            </button>

            <div className="all-page-btns">
                <button className="page-btn">1</button>
                <button className="page-btn active">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">4</button>
                <button className="page-btn">5</button>
            </div>

            <button className="page-nav-btn">
                <span className='btn-text'>Prev</span>
                <Right role='img' aria-label='Next'/>
            </button>
        </div>        
    );
} 