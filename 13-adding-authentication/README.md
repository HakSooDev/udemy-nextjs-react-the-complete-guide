# Authentication

When a user log in, Client sends request that contains user data (user credentials) ex) email and password

Server receives this then see if these info is matched with database credentials.

After checking, server sends response saying Yes, you are authenticated, or No, you are not authenticated.

If user is authenticated, they can finally reach protected (api) routes and send request to other endpoints that require authentication. For example) user profile page can be accessed by only user who already logged in. password changing should be only allowed for logged in user.

So this permission ,”Yes, you are authenticated”, is important.

For this permission, we need PROOF that cannot be faked.

Two Proofs:

1. Server Side Session
2. Authentication Tokens

Server Side Session

- After use login, server generate unique session id. Then keep one in the database, and send another one to client.
- Client sends this session identifier in every request they send to the server.
- When server gets request from client, server checks if this identifier matches with the one server stored in database.
- If identifiers are matched, grant access, otherwise, deny access

Can it be stolen?

Not easy. In transit, we should be using SSL for encrypting to connection. So not easy to be stolen. Also, when it is stored on the client side (typically in a cookie), most of time, it is configured to prevent against cross-site scripting attacks. Therefore, most of time, only the owner of your computer, and the user of the browser, will be able to access it.

Furthermore, even attackers generate random identifier, it won’t be useful since server would not know those identifiers.

Authentication Tokens

- Server creates (but not store) “permission” token, and send this token to client
- Client sends token along with request to protected resources.
- Server does not store that token, but sever knows how token is signed and can verify the token.

If attackers generate random token, and send that to server, sever knows it is not created and signed by the server. So access will be denied.

In Single Page Application(SPA), token is more widely used because of following reasons.

1. pages are served directly and populated with logic without necessarily hitting the server. It loads pages without the server being able to directly find out if you are authenticated or not.
2. Backend APIs which is be used for a single-page applications are typically stateless. They do not track all of the connected clients, and do not keep track of all the connected clients.

In another words, the API itself does not store any extra info about any connected clients. The server is not involved in every request and every action that’s happening on our page. So we can say we have kind of DETACHED front-end and back-end combination. They talk each other sometimes, but not for every action that going on the page. Therefore, it’s better for clients to have standalone permission instead of storing them in the server.

Among Authentication Tokens, JSON Web Token is one of the most popular tokens.

A JWT consists of three parts: a header, payload, and signature.

![Untitled](Authentication%2028bc8decee594ad8abfc1093c10e8f5b/Untitled.png)

![Untitled](Authentication%2028bc8decee594ad8abfc1093c10e8f5b/Untitled%201.png)

![Untitled](Authentication%2028bc8decee594ad8abfc1093c10e8f5b/Untitled%202.png)

Ref: [https://www.ibm.com/docs/en/cics-ts/6.1?topic=cics-json-web-token-jwt](https://www.ibm.com/docs/en/cics-ts/6.1?topic=cics-json-web-token-jwt)
