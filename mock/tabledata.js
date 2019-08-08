import moment from 'moment'
// get full data for registration
const full_date = moment().format("DD-MM-YYYY ") + moment().format(" h:m:s");
const userdata  = [
    {
      key: 1,
      name: `Edrward 1`,
      regnum: "123-456-789",
      address: `London Elizabet street, Harvar University Park no. 1`,
      mobile: "123-456-789",
      date: full_date,
      view: "View Details"
    },
    {
      key: 2,
      name: `Edrward 2`,
      regnum: "123-456-789",
      address: `London Elizabet street, Harvar University Park no. 2`,
      mobile: "123-456-789",
      date: full_date,
      view: "View Details"
    }
  ];

  const routedata  = [
    {
      key: 1,
      companyname: "Woojin transportation 1",
      routename: `700B`,
      date: full_date,
      view: "View Details"
    },
    {
      key: 2,
      companyname: `Woojin transportaion 2`,
      routename: "700B",
      date: full_date,
      view: "View Details"
    }
  ];

  export {userdata, routedata}

