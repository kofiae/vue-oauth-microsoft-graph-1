import * as msal from '@azure/msal-browser'
 
/**
* List the requested scopes (aka. the requested permissions)
*/
export const requestedScopes = {
  scopes: ["User.Read", "Mail.Read"]
}
 
/**
* List the logout account
*/
// const logoutRequest = {
//   mainWindowRedirectUri: "/",
// };
 
const msalInstance = new msal.PublicClientApplication({
  auth: {
    clientId: process.env.VUE_APP_OAUTH_CLIENT_ID,  //"e8137439-4d1d-462d-a85f-f81cfea8f0d8"
    mainWindowRedirectUri: "/"
  },
  cache: {
    cacheLocation: "sessionStorage"
  }
})
 
//if using "msale v3.x", otherwise in "msale v2.x" delete the next line
msalInstance.initialize();
 
export async function signInAndGetUser () {
  const authResult = await msalInstance.loginPopup(requestedScopes)
  msalInstance.setActiveAccount(authResult.account)
  return authResult
}

export async function getAccessToken() {
  const account = msalInstance.getActiveAccount();
  if (!account) throw new Error("No active account");
  const response = await msalInstance.acquireTokenSilent({
    ...requestedScopes,
    account
  });
  return response.accessToken;
}

export async function getUserMails() {
  const accessToken = await getAccessToken();
  const response = await fetch("https://graph.microsoft.com/v1.0/me/mailFolders/inbox/messages", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  if (!response.ok) throw new Error("Failed to fetch inbox mails");
  return await response.json();
}

export async function getUserMailById(mailId) {
  const accessToken = await getAccessToken();
  console.log("mailId", mailId);
  const response = await fetch(`https://graph.microsoft.com/v1.0/me/messages/${mailId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  if (!response.ok) throw new Error("Failed to fetch mail");
  return await response.json();
}

export async function logout() {
  await msalInstance.setActiveAccount(null);
}