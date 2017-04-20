module.exports = {
  dateOrganiser: dateOrganiser
}

function dateOrganiser(events) {

  spruceAndSimplify (events) //Capitalizes Event name

  filterEventDates (events)

  sortEventDates (events)

  correctDatesDisplay (events)

  return events
}


function spruceAndSimplify (events) {
  if (events[0] != undefined) {
    events.map((day, i) => {
      events[i].event = day.event.charAt(0).toUpperCase() + day.event.slice(1)
      events[i].date = day.date.split('').filter(removeDash).join('')
  })}
  return events
}

function removeDash (value) {
  if (value !== "-") return value
}

function filterEventDates (events) {
  events.map((day, i) => {
    while (events.length > i) {
      if (events[i].date < todaysDate()) {
        events.splice(i, 1)
      } else i++
  }})
  return events
}

function sortEventDates (events) {
  events.sort((a, b) => {
    return a.date - b.date
  })
  return events
}

function correctDatesDisplay (events) {
  events.map((day, i) => {
    let a = day.date.split('')
    let rearranged = [a[6],a[7],"-",a[4],a[5],"-",a[0],a[1],a[2],a[3]]
    let joinedArray = rearranged.join('')
    events[i].date = joinedArray
  })
}

function todaysDate () {
  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()
  if (day < 10) {
    day = "0" + day
  }
  if (month < 10) {
    month = "0" + month
  }
  return [year, month, day].join('')
}
