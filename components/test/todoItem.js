import React from "react";
import { Query } from "react-apollo";
import {Dquery}  from './query'
import Item from './Item'

const DataComp = () => (
  <Query query={Dquery}>
    {({ data, loading, error }) => {
      if (loading) {
        return <span>Loading ...</span>;
      }
      if(error){
          return <div>Error!</div>
      }
      const {todos} = data;
      return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {
                todos.map(todo =>(
                    <Item key={todo.id} {...todo}/>
                ))
            }
        </div>
      );
    }}
  </Query>
);

export default DataComp;