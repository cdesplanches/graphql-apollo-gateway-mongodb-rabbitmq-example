const { gql } = require('apollo-server')

const orderType = gql `
    type OrderType @key(fields: "_id") {
        _id:ID!
        name:String!
        number:Int!
    }
    type Query {
        getOrder(id:ID!):OrderType
        getAllOrders:[OrderType!]
    }
    type Mutation{
        buy(name:String!, number:Int!):OrderType!
        clearOrders:Boolean
    }
`;
module.exports = orderType
