// services/authService.js
//const cors = require('cors');
//app.use(cors({ origin: 'http://localhost:3005' }));  // Replace with your frontend URL

const API_URL = "http://localhost:3005"; // Replace with your API URL

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  const data = await response.json();
  // Store token in local storage
  localStorage.setItem("authToken", data.token);

  return { userId: data.userId, token: data.token };
}

export async function Registration(email, password) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  // Check if response is OK
  if (!response.ok) {
    // Handle non-JSON responses
    const contentType = response.headers.get("Content-Type");
    let errorText = "";

    if (contentType && contentType.includes("application/json")) {
      const errorData = await response.json();
      errorText = errorData.error || "An unexpected error occurred";
    } else {
      errorText = await response.text();
    }

    throw new Error(errorText);
  }

  // Handle successful response
  const contentType = response.headers.get("Content-Type");
  if (contentType && contentType.includes("application/json")) {
    return await response.json();
  } else {
    // If response is not JSON, you might want to handle it differently or throw an error
    throw new Error("Expected JSON response but received non-JSON content.");
  }
}


export async function fetchUserData() {
  const token = localStorage.getItem("authToken");

  const response = await fetch(`${API_URL}/protected/protected`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return await response.json();
}

// src/utils/auth.js
/* export async function login(email, password) {
  try {
    const response = await fetch("http://localhost:3005/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token); // Store token in localStorage
      return true;
    } else {
      console.error("Login failed:", data);
      return false;
    }
  } catch (error) {
    console.error("Error during login:", error);
    return false;
  }
} */

// src/utils/auth.js
/* export async function fetchProtectedData() {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch("http://localhost:3005/protected/protected", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the header
      },
    });
    if (response.ok) {
        return await response.json();
    } else {
      console.error('Failed to fetch protected data');
      return null;
    }
  } catch (error) {
    console.error('Error fetching protected data:', error);
    return null;
  }
} */

/* export async function fetchProtectedData() {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:3005/protected/protected", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the header
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Protected data:", data);
        return data;
      } else {
        console.error("Failed to fetch protected data");
      }
    } catch (error) {
      console.error("Error fetching protected data:", error);
    }
  }
   */
