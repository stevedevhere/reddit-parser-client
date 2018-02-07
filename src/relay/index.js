import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

let env;

function init({ endpoint, accessToken }) {
  function fetchQuery(operation, variables) {
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    })
      .then(response => response.json());
  }

  const source = new RecordSource();
  const store = new Store(source);
  const network = Network.create(fetchQuery);

  env = new Environment({ network, store });
}

function getEnv() {
  return env;
}

export default {
  init,
  getEnv
};
