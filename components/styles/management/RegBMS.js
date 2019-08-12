import styled from  'styled-components'

const Container = styled.div `
display: flex;
justify-content: space-around;
font-size: 18px;
font-weight: 650;

.col1{
    display: flex;
    justify-content: space-around;
    align-item: flex-end
    color: black 
}

`
const Wrapper = styled.div`
background: white;
margin-top: 30px;
tr > td{
    padding: 3px;
    text-align: center;
}
tr > th{
    text-align: center;
    width: 20px;
    padding: 4px;
}
.ant-table-pagination.ant-pagination{
    float: unset;
    text-align: -webkit-center !important;
    background-color: #f7f7f9;
    border: 1px solid #ddd;
}

//modal pagination is not working
.ant-modal-footer{
    background-color: black;
    margin: auto;
    // text-align: center;
}

`;

const Containr = styled.div `
    display: grid

`

export {Container, Wrapper, Containr}