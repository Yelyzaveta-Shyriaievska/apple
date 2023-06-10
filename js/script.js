/*const root=document.getElementById('root')
const elem=<h1>Hello, world!</h1>
ReactDOM.render( elem, root )

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)*/


const root=document.getElementById('root')
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function timer(){
  let data=new Date()

  let seconds=data.getSeconds()
  let hour=data.getHours()
  let minutes=data.getMinutes()
  let day=data.getUTCDate()
  let mouth=data.getUTCMonth()
  let weekDay=weekday[data.getDay()]

  switch (mouth) {
    case 0:
      mouth="January"
      break;
    case 1:
      mouth="February"
      break;
    case 2:
      mouth="March"
      break;
    case 3:
      mouth="April"
      break;
    case 4:
      mouth="May"
      break;
    case 5:
      mouth="June"
      break;
    case 6:
      mouth="July"
      break;
    case 7:
      mouth="August"
      break;
    case 8:
      mouth="September"
      break;
    case 9:
      mouth="October"
      break;
    case 10:
      mouth="November"
      break;
    case 11:
      mouth="December"
      break;
    default:
      break;
  }

  let element=(
  <div className="display">
    <p className="date">{weekDay}, {mouth} {day}</p>
    <p className="time">{hour}:{minutes}</p>
    <p className="sec">sec: {seconds}</p>
  </div>)

  ReactDOM.render(element, root)
}

setInterval(timer, 1000)