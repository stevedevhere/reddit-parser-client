/**
 * @flow
 * @relayHash 7124a2ad57327f5c8a2edfd4681aac49
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type mainQueryResponse = {|
  +posts: $ReadOnlyArray<?{|
    +id: ?string;
    +title: ?string;
    +description: ?string;
    +link: ?string;
  |}>;
|};
*/


/*
query mainQuery(
  $title: String!
  $after: String!
  $before: String!
  $lang: String!
) {
  posts(title: $title, after: $after, before: $before, lang: $lang) {
    id
    title
    description
    link
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "title",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "after",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "before",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "lang",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "mainQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "lang",
            "variableName": "lang",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "title",
            "variableName": "title",
            "type": "String"
          }
        ],
        "concreteType": "Post",
        "name": "posts",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "title",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "description",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "link",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "mainQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "title",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "after",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "before",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "lang",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "mainQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "lang",
            "variableName": "lang",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "title",
            "variableName": "title",
            "type": "String"
          }
        ],
        "concreteType": "Post",
        "name": "posts",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "title",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "description",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "link",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query mainQuery(\n  $title: String!\n  $after: String!\n  $before: String!\n  $lang: String!\n) {\n  posts(title: $title, after: $after, before: $before, lang: $lang) {\n    id\n    title\n    description\n    link\n  }\n}\n"
};

module.exports = batch;
