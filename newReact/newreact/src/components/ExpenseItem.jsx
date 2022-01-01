import './ExpenseItem.css';

function ExpenseItem(props){
        const month = props.date.toLocaleString('en-US')
    let title = "car insurance";
    return(
        <div className='expense-item'>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='expense_item_desc'>
                <h2>{title}</h2>
                <div className='expense_item_price'>$200</div>
            </div>
        </div>
    )
}

export default ExpenseItem;