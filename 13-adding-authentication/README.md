## Section 13: Adding Authentication

Learned what authentication is<br/>
Learned how to proect page and routes in both server and client side<br/>
Learned how to implement creating user, logging in, logging out, and resetting password using next-auth<br/>

![image](https://user-images.githubusercontent.com/76464363/230773831-beb62334-6e7a-4145-89ad-3b05422b748f.png)
![image](https://user-images.githubusercontent.com/76464363/230773852-8b3c4278-7c91-4f94-9342-eda28715092e.png)

## Authentication

### Frontend
- Redirect user using next's router (checking session with getSession or useSession)
- Hide UIs that user do not have access

### Backend
- Backend check session status and redirect if user is trying to access unauthorized data. (getSession)


## Study note



Authentication is proving you are who you say you are.

When a user log in, Client sends request that contains user data (user credentials such as email and password)

Server receives this then see if these info is matched with database credentials. 

After checking, server sends response saying Yes, you are authenticated, or No, you are not authenticated.

If user is authenticated, they can finally reach protected (api) routes and send request to other endpoints that require authentication.

ex) user profile page can be accessed by only user who already logged in. password changing should be only allowed for logged in user. 

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

- Server creates (but not store) “permission” token, and send this token to  client
- Client sends token along with request to protected resources.
- Server does not store that token, but sever knows how token is signed and can verify the token.

If attackers generate random token, and send that to server, sever knows it is not created and signed by the server. So access will be denied. 

In Single Page Application(SPA), token is more widely used because of the following reasons. 

1. pages are served directly and populated with logic without necessarily hitting the server. It loads pages without the server being able to directly find out if you are authenticated or not.
2. Backend APIs which is be used for a single-page applications are typically stateless. They do not track all of the connected clients, and do not keep track of all the connected clients. 

In another words, the API itself does not store any extra info about any connected clients. The server is not involved in every request and every action that’s happening on our page. So we can say we have kind of DETACHED front-end and back-end combination. They talk each other sometimes, but not for every action that is happening on the page. Therefore, it is better for clients to have stand-alone permission instead of storing them in the server. 

Among Authentication Tokens, JSON Web Token is one of the most popular tokens. 

A JWT consists of three parts: a header, payload, and signature.

## Slides:
<img width="932" alt="Untitled 1" src="https://user-images.githubusercontent.com/76464363/230774363-9a78e9b8-7f17-43ef-920a-a18902b60249.png">

<img width="976" alt="Untitled 2" src="https://user-images.githubusercontent.com/76464363/230774368-e7629b8c-69a3-403a-a40e-0c0669845dbd.png">
<img width="1008" alt="Untitled" src="https://user-images.githubusercontent.com/76464363/230774372-964a80f3-e181-4e25-8f26-388a3990309a.png">

Ref:

- [https://www.ibm.com/docs/en/cics-ts/6.1?topic=cics-json-web-token-jwt](https://www.ibm.com/docs/en/cics-ts/6.1?topic=cics-json-web-token-jwt)
- [https://security.stackexchange.com/questions/81756/session-authentication-vs-token-authentication/92123#92123](https://security.stackexchange.com/questions/81756/session-authentication-vs-token-authentication/92123#92123)
