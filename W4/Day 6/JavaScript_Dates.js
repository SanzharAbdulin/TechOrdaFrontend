function getDayName(dateString) {
  let weekdays = new Map();
  weekdays.set('Mon', 'Monday');
  weekdays.set('Tue', 'Tuesday');
  weekdays.set('Wed', 'Wednesday');
  weekdays.set('Thu', 'Thursday');
  weekdays.set('Fri', 'Friday');
  weekdays.set('Sat', 'Saturday');
  weekdays.set('Sun', 'Sunday');
  // Write your code here
  let date = new Date(dateString);
  return weekdays.get(date.toDateString().substring(0, 3));
}
