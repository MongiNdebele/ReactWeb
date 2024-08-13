const API_URL = "http://localhost:3005/notes/sticky-notes"; // Adjust this according to your backend API URL
import { jwtDecode } from "jwt-decode";

// Fetch all sticky notes for a specific user
export async function fetchUserNotes() {
  try {
    const token = localStorage.getItem('authToken');

    if (!token) throw new Error('No token found');
    const decodedToken = jwtDecode(token)
    const userId = decodedToken.id
    console.log(userId)

    const response = await fetch(`${API_URL}/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch notes');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching notes:', error.message);
    throw error;
  }
}

/* export async function fetchUserNotes() {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("No token found");
  }

  const response = await fetch(`${API_URL}/:userId`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  const data = await response.json();
  return data;
} */

/* export async function fetchNotes(userId) {
    const response = await fetch(`${API_URL}/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch notes');
    }
    return response.json();
  } */

// Add a new sticky note

export async function addNote(title, content, color) {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("No token found");
  }

  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, color }),
  });

  if (!response.ok) {
    throw new Error("Failed to add note");
  }

  const data = await response.json();
  return data;
}

/*  export async function addNote(userId, title, content, color) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, title, content, color }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to add note');
    }
    return response.json();
  } */
