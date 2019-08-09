import styled from 'styled-components';

// main container
const Container = styled.div`
    margin-top: 30px;
    font-size: 18px;
    background-color: white;

`;

// search container
const SrchContainer = styled.div`


`
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
const MainContainer = styled.div `
.pagination{
    background: black
}
footer{
    background-color: black;
}

`

export {Container, SrchContainer, DataTable, MainContainer};