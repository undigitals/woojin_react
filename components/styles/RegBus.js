import styled from "styled-components";

const Wrapper = styled.div`
  background: white;
  margin-top: 100px;
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

const Container = styled.div`
  display: grid;
`;
const Peak = styled.div`
  display: flex;
  justify-content: space-between;

 .container{
      display: flex;
  }

  border: 1px solid #ddd;
  font-size: 18px;
  font-weight: 700;
  padding: 15px;
  padding-bottom: 5px;
  .col1 {
    display: flex;
  }
`;

export { Wrapper, Container, Peak };
