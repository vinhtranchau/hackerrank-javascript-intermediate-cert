function getNumTransactions(username) {
    return new Promise((resolve, reject) => {
        // Define the user details endpoint
        const userDetailsEndpoint = `https://jsonmock.hackerrank.com/api/article_users?username=${username}`;

        // Fetch user details
        https.get(userDetailsEndpoint, (res) => {
            let data = '';

            res.on('data', (chunk) => { 
                data += chunk;
            });

            res.on('end', () => {
                const userResponse = JSON.parse(data);

                // Check if user exists
                if (userResponse.data.length === 0) {
                    resolve("Username Not Found");
                    return;
                }

                // Define the transactions endpoint
                const userId = userResponse.data[0].id;
                const txnEndpoint = `https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`;

                // Fetch transactions for the user
                https.get(txnEndpoint, (res2) => {
                    let data2 = '';

                    res2.on('data', (chunk) => { 
                        data2 += chunk;
                    });

                    res2.on('end', () => {
                        const txnResponse = JSON.parse(data2);
                        resolve(txnResponse.total);   // Return total number of transactions
                    });
                }).on('error', (err) => {
                    reject(err);
                });
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}
