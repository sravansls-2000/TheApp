import React from "react"
import './booking.css'

export const TicketBooking = () => {

const rows = 10
const cols = 10

const [boookedSeats, setBookedSeats] = React.useState([])

const [selectedSeats, setSelectedSeats] = React.useState([])

const [flag,setFlag]=React.useState(false)

const clickBookseats=()=>{

if(selectedSeats.length===0){

alert('Please select at least one seat')

}

else{

setBookedSeats([...selectedSeats])

setSelectedSeats([])

}

}

console.log(boookedSeats)

const clickSeat=(seatno)=>{

// console.log(seatno)

if(!selectedSeats.includes(seatno)&& !boookedSeats.includes(seatno)){

setSelectedSeats([...selectedSeats,seatno])

}

else{

setSelectedSeats(selectedSeats.filter(item => item!== seatno))

// console.log(selectedSeats)

}

}

let seatRowsTimeAuto = ""

for (let i = 0; i <= cols; i++) {

seatRowsTimeAuto += 'auto '

}

return (

<div className="mt-50 layout-column justify-content-center align-items-center">

<div className="display-flex">

<button data-testid="book-seats" onClick={clickBookseats}>Book Seats</button>

<button data-testid="clear-selection" onClick={()=>setSelectedSeats([])} className="danger">Clear</button>

</div>

<div style={{ display: 'grid', gridTemplateColumns: `${seatRowsTimeAuto}` }}>

{Array(rows).fill(0).map((_, row) => (

<div key={row} style={row === 4 ? { marginRight: '40px' } : null}>{

Array(cols).fill(0).map((_, col) =>

<div data-testid={`${row}${col}`} className={selectedSeats.includes(`${row},${col}`)?"selected seat":boookedSeats.includes(`${row},${col}`)?"disabled seat":"seat"}onClick={()=>clickSeat(`${row},${col}`)} key={`${row}${col}`}>{`${String.fromCharCode(65 + col)}${row}`}</div>

)

}</div>

))}

</div>

<br />

<button data-testid="reset" onClick={()=>{setSelectedSeats([]);setBookedSeats([])}}>Reset Bookings</button>

</div>

)

}