const { gql } = require('apollo-server')

const shippedType = gql `
    type ShippedType @key(fields: "_id") {
        _id:ID!
        name:String!
        status:String
    }
    type Query {
        getStatus(id:ID!):ShippedType
        getAllStatus:[ShippedType]
    }
    type Mutation{
        clearAllStatus:Boolean
    }
`;
module.exports = shippedType
