# hackerrank-javascript-intermediate-cert

## User Transactions
Implement a function getNumTransactions(). It takes a username and it returns either the number of transactions associated with username, or a string "Username Not Found" if no such user exists. Make a GET request to the given REST APIs that contain information about a user.

Given a user name, the user details should be fetched by making a GET call to the API https://jsonmock.hackerrank.com/api/article_users?username= where is the parameter passed to the getNumTransactions function.

The response will be a JSON object with the following 5 fields:

page: The current page of the results. (Number)

per_page: The maximum number of results returned per page. (Number)

total: The total number of results. (Number)

total_pages: The total number of pages with results. (Number)

data: Either an empty array or an array with a single object containing the user details record with the following schema:

id - user id (Number)

username - user name as passed above (String)

This object has other fields as well but they are not needed for this question.

If the username passed to the request does not exist in the system, the data array will be empty. In that case, the function should return "Username Not Found".

An example of a user record is as follows:
{
"id": 1,
"username": "epaga"
}

If the user details is successfully fetched from the first API, use the id property of the details object to fetch the transactions information for the user. The API to fetch this is https://jsonmock.hackerrank.com/api/transactions?&userId= where is the id property fetched earlier.

The response will be a JSON object with the following 5 fields:

page: The current page of the results. (Number)

per_page: The maximum number of results returned per page. (Number)

total: The total number of transactions for the given user id. (Number)

total_pages: The total number of pages with results. (Number)

data: Either an empty array or an array with transaction records of the user.

Here total is the total number of transactions of the user and is the final value to be returned by the function.

Here is an example of a response:
{
page: 1,
per_page: 10,
total: 75,
total_pages: 8,
data: [
// Data contains the list of user transactions matching the user ID.
{
"id": 8,
"userId": 1,
"userName": "Francesco De Mello",
"timestamp": 1548805761859,
"txnType": "credit",
"amount": "$1,214.44",
...
}
]
}

As per this example final value to be returned is 75.


## Activity List
The goal of this problem is to use prototypal inheritance in Javascript.

Implement inheritance as described below-

Create a function Activity that takes a single parameter amount (Number) and assigns it to member variable 'amount'.

Add the following functions to the Activity prototype -

setAmount - This function takes a single parameter , value.
If the value is less than or equal to 0, it returns false.
Otherwise, it assigns value to the member variable amount and returns true.
getAmount - This function returns the member variable amount value.

Create a function Payment that -

inherits from parent Activity.
takes 2 parameters - amount (Number) and receiver (string). It assigns the parent's member variable 'amount', and self's member variable 'receiver' respectively.
Add the following functions to Payment's existing prototype -

setReceiver - This function takes a single parameter and assigns it to the member variable 'receiver'.
getReceiver - This function returns the member variable 'receiver' value.

Create a function Refund that -

inherits from parent Activity.
takes 2 parameters - amount (Number) and sender (string) and assigns the parent's member variable, 'amount', and self's member variable, 'sender'.
Add below functions to Refund's existing prototype -

setSender - This function takes a single parameter and assigns it to the member variable sender.
getSender - This function returns the member variable sender.

Implementation of the function will be tested by the provided code stub using several input files. Each input file contains parameters for the function calls. The result of their executions will be printed to the standard output by the provided code. In the case of a setAmount function call, if the value returned is false, the stubbed code prints 'Amount not updated'. If the value returned is true, it prints 'Amount updates to '.
