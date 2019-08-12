import moment from "moment";
const full_date = moment().format("DD-MM-YYYY ") + moment().format(" h:m:s");

const userdata = [];
for (let i = 1; i < 100; i++) {
  userdata.push({
    id: i.toString(),
    user_name: `Woojin  ${i}`,
    group_id: "123-456",
    group_name: 'group name',
    partner_name: `10${i}`,
    phone_number: "123-456-789",
    email: 'sm@hubdnc.com',
    view: "Y"
  });
}


export { userdata };
