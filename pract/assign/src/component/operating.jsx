import './operating.css';

function operating(){

    let title = "car insurance";
    return(
        <div className='expense-item'>
            <div>December 30 2021</div>
            <div className='expense_item_desc'>
                <h2>{title}</h2>
                <div className='expense_item_price'>$200</div>
            </div>
        </div>
    )
}

export default operating;