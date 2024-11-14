import './pagination.scss'; 
import Left from '../../assets/images/icon-caret-left.svg';
import Right from '../../assets/images/icon-caret-right.svg';
// import { ReactComponent as Left} from '../../assets/images/icon-caret-left.svg';

export default function Pagination () {
    return(
        <div className='Pagination'>
            <button className='page-nav-btn'>
                <img src={Left} alt='Previous Button'/>
                {/* <Left/> */}
            </button>

            <div className='all-page-btns'>
                <button className='page-btn'>1</button>
                <button className='page-btn'>2</button>
                <button className='page-btn'>3</button>
                <button className='page-btn'>4</button>
                <button className='page-btn'>5</button>
            </div>

            <button className='page-nav-btn'>
                <img src={Right} alt='Next button'/>
                {/* Next */}
            </button>
        </div>
    );
} 