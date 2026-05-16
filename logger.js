const axios = require("axios");

// Credentials from registration
const CLIENT_ID = "cc504b4e-fba9-44b2-958f-b67564d575c9";
const CLIENT_SECRET = "awXwXBeraMRXfdvc";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYW5qYXkuZzIwMjJhQHZpdHN0dWRlbnQuYWMuaW4iLCJleHAiOjE3Nzg5MzE1NzksImlhdCI6MTc3ODkzMDY3OSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjQzN2MzNzdjLTgzNjUtNGRiZS04ODVkLWY4ZmNkM2RlNWExOSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNhbmpheSIsInN1YiI6ImNjNTA0YjRlLWZiYTktNDRiMi05NThmLWI2NzU2NGQ1NzVjOSJ9LCJlbWFpbCI6InNhbmpheS5nMjAyMmFAdml0c3R1ZGVudC5hYy5pbiIsIm5hbWUiOiJzYW5qYXkiLCJyb2xsTm8iOiIyMm1pczA1NjciLCJhY2Nlc3NDb2RlIjoiU2ZGdVdnIiwiY2xpZW50SUQiOiJjYzUwNGI0ZS1mYmE5LTQ0YjItOTU4Zi1iNjc1NjRkNTc1YzkiLCJjbGllbnRTZWNyZXQiOiJhd1h3WEJlcmFNUnhmZHZjIn0.3VGKTKF_WbWinxhpl5oo5s31f_TZVXoHIXRyA8gXfY4";

async function Log(stack, level, packageName, message) {
  try {
    console.log("Sending log...");

    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${ACCESS_TOKEN}`,
          "clientID": CLIENT_ID,
          "clientSecret": CLIENT_SECRET,
          "access_token": ACCESS_TOKEN
        }
      }
    );

    console.log("SUCCESS:");
    console.log(response.data);
  } catch (error) {
    console.log("ERROR:");
    console.log(error.response?.data || error.message);
  }
}

module.exports = Log;