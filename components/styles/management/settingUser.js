import styled from  'styled-components'



//setting pop up message
const Container = styled.div`
  display: grid;
  font-weight: 700;
`;


//top for setting user
const ContainerTop = styled.div `
display: flex;
font-weight: 700; 

`

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

export {Container, ContainerTop, Wrapper} 