import React from 'react'

const ClientContext = React.createContext();

const ClientProvider = ClientContext.Provider
const ClientConsumer = ClientContext.Consumer


export {ClientConsumer,ClientProvider }