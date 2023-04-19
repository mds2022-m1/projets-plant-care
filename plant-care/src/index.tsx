import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import * as ReactDOM from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const client = new ApolloClient({
  uri: 'https://maximum-imp-82.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: { 'x-hasura-admin-secret': 'mmCIO2901jLYnqXA796vhQqWtnwSwfvjDmCc8yPybRpWixObuxNZkWpBW3N5K9ln' }
});


// const client = ...

client
  .query({
    query: gql`
      query GetUser {
          User {
            id
            name
            password
            email
          }
        
      }
    `,
  })
  .then((result) => console.log(result));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);