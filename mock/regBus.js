import moment from "moment";
const full_date = moment().format("DD-MM-YYYY ") + moment().format(" h:m:s");

const busdata = [];
for (let i = 1; i < 100; i++) {
  busdata.push({
    id: i.toString(),
    card_number: `FFFF${i}`,
    account_name: "Woojin Transport",
    route_number: `10${i}`,
    car_number: "ㅎ1234",
    bms: `WS0011`,
    view: "View Details"
  });
}


export { busdata };
