import moment from "moment";
const full_date = moment().format("DD-MM-YYYY ") + moment().format(" h:m:s");

const mainRs = [];
for (let i = 1; i < 100; i++) {
  mainRs.push({
    id: i.toString(),
    company: `Woojing ${i}`,
    date: full_date,
    maintenance: "Maintenance",
    content: `Maintenance Content`,
    mechanic: "mechanic",
    part: `Replacement part`,
    equipment: 'Equipment',
    cost: 'Maintenace Cost',
    view: "View Details"
  });
}

const alarm = [];
for (let i = 1; i < 0; i++) {
  alarm.push({
    id: i.toString(),
    car_num: `123456`,
    alarm_position: "alarm position",
    alarm_code: "Alarm code",
    alarm_state: `Aalarm state`,
    alarm_time: "alarm time",
    confirm: `Confirmation`,
    view: "View Details"
  });
}


export { alarm, mainRs };
