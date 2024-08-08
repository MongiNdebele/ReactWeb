const API_URL = 'http://localhost:3005/notes/sticky-notes'; // Adjust this according to your backend API URL

// Fetch all sticky notes for a specific user
export async function fetchNotes(userId) {
    const response = await fetch(`${API_URL}/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch notes');
    }
    return response.json();
  }
  
  // Add a new sticky note
  export async function addNote(userId, title, content, color) {
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
  }