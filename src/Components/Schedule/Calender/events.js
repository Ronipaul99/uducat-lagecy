const events = [
  { id: "01", title: "All Day Event", start: getDate("YEAR-MONTH-01") },
  {
    id: "02",
    title: "Long Event",
    start: getDate("YEAR-MONTH-07"),
    end: getDate("YEAR-MONTH-10")
  },
  {
    id: "03",
    groupId: "999",
    title: "Repeating Event",
    start: getDate("YEAR-MONTH-09T16:00:00+00:00")
  },
  {
    id: "04",
    groupId: "999",
    title: "Repeating Event",
    start: getDate("YEAR-06-16T16:00:00+00:00")
  },
  {
    id: "05",
    title: "Conference",
    start: "2023-04-10",
    end: getDate("2023-04-11")
  },
  {
    id: "06",
    title: "Meeting",
    start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
    end: getDate("YEAR-MONTH-18T12:30:00+00:00")
  },

  { id: "07", title: "Lunch", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
  { id: "08", title: "Birthday Party", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
  { id: "09", title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
  { id: "10", title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
  { id: "11", title: "Dinner", start: getDate("YEAR-MONTH-18T20:00:00+00:00") }
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

export default events;
