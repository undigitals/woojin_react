import styled from 'styled-components'

// for look up page top menu
const Container = styled.div`
  display: grid;
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

export {Container, DataTable}