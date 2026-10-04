// Decodes the POST body of results.php from the HAR (BR mode).
// Encoding (deobfuscated.js ~6913-6946): body = xor(btoa(encodeURIComponent(JSON)), key)
// key = `..1${token}2${window.playerId}3..`, token from token.php fetched when Play is pressed.
const har = await Bun.file(new URL("../../../paperio.site.battleroyale.har", import.meta.url)).json();
const entries = har.log.entries as any[];
const tokenEntry = entries.find(e => e.request.url.includes("token.php"));
const token = JSON.parse(tokenEntry.response.content.text).token as string;
const resEntry = entries.find(e => e.request.url.includes("results.php"));
const body = resEntry.request.postData.text as string;
const playerId = 938661124; // window.playerId in index.html (also player_id cookie)
const key = `..1${token}2${playerId}3..`;
let b64 = "";
for (let i = 0; i < body.length; i++) b64 += String.fromCharCode(body.charCodeAt(i) ^ key.charCodeAt(i % key.length));
const json = decodeURIComponent(atob(b64));
console.log("token:", token, "key:", key);
console.log(JSON.stringify(JSON.parse(json), null, 2));
