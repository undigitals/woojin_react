import styled from 'styled-components'

const Wrapper = styled.div`
background: white;
margin-top: 100px;
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

const Container = styled.div `
background-color: white;
display: flex;
font-size: 18px;
border:2px;
margin-top: 50px;
padding: 14px;
font-weight: 650;

.inp-btn{
    justify-content: end;
    align-item: flex-end
    color: black 
}

`

export {Wrapper, Container}