import styled from "styled-components";

const Wrapper = styled.div`
  background: white;
  margin-top: 30px;
  tr > td {
    padding: 3px;
    text-align: center;
  }
  tr > th {
    text-align: center;
    width: 20px;
    padding: 4px;
  }
  .ant-table-pagination.ant-pagination {
    float: unset;
    text-align: -webkit-center !important;
    background-color: #f7f7f9;
    border: 1px solid #ddd;
  }

  //modal pagination is not working
  .ant-modal-footer {
    background-color: black;
    margin: auto;
    // text-align: center;
  }
`;
// for  top menu and ...
const Container = styled.div`
  display: grid;
`;

//for top menu
const Peak = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #ddd;
  font-size: 18px;
  font-weight: 700;
  padding-top: 15px;
  padding-bottom: 15px;
  
  .col1 {
    display: flex;
  }
  .container1{
    display: flex;
    
  }
 .container2{
    //   display: flex;
  }
`;

//table conainer
const DataTable = styled.table `
width: 100%;
tr > td{
    padding: 3px;
    text-align: center;
}
tr > th{
    text-align: center;
    width: 20px;
    padding: 4px;
}
.ant-table-pagination.ant-pagination {
    float: unset;
    text-align: -webkit-center !important;
    background-color: #f7f7f9;
    border: 1px solid #ddd;
  }

`

export { Wrapper, Container, Peak, DataTable };
