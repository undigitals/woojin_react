import { Collapse, Icon, Table } from "antd";
import moment from "moment";
import  {DataTable} from '../styles/look/general'


var full_date = moment().format('DD-MM-YYYY ') + moment().format(' h:m:s')
const { Panel } = Collapse;
const data = [];
for (let i = 0; i < 14; i++) {
  data.push({
    turn: `turn`,
    id: i.toString(),
    bus: `Seoul ${i}`,
    starttime: full_date,
    endtime: full_date,
    amount: 5 +`${i}`,
    cname:  'Woojin',
    route: 100+`${i}`,
    crdnumber: "123-456-789",
    dbid: '123456'
  });
}
class DTable extends React.Component {

  render() {
    this.columns = [
      {
        title: "turn",
        dataIndex: "turn",
        key: "turn"
      },
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Bus",
        dataIndex: "bus",
        key: "bus"
      },
      {
        title: "Charging start time",
        dataIndex: "starttime",
        key: "starttime"
      },
      {
        title: "Charge end time",
        dataIndex: "endtime",
        key: "endtime"
      },
      {
        title: "Charge amount",
        dataIndex: "amount",
        key: "amount"
      },
      {
        title: "Company name",
        dataIndex: "cname",
        key: "cname"
      },
      {
        title: "Route number",
        dataIndex: "route",
        key: "rnumber "
      },
      {
        title: "Card number",
        dataIndex: "crdnumber",
        key: "crdnumber"
      },
      {
        title: "SystemDBMID",
        dataIndex: "dbid",
        key: "dbid"
      }
    ];
    return (
      <div>
        <Collapse>
          <Panel
            showArrow = {true}
            header="Bus changing history list"
            key="1"
            extra={<Icon type="setting" />}
            expand={true}
          >
            <DataTable>
              <Table bordered columns={this.columns} dataSource={data}  />
            </DataTable>
          </Panel>
        </Collapse>
        <br />
      </div>
    );
  }
}

export default DTable;
