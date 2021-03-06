const Calendar = ({current, done}) => {
    const data = orderData();
    const today = Math.floor(new Date()/8.64e7);

    function orderData() {
        

        return done;
    }

    return (
        <div>
        { data.map( (el) => (
        <div>{el.name}</div>
        )) }
        </div>
    )
}

export default Calendar;