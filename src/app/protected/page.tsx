// app/protected/page.js
import { fetchUserData } from '../../services/authService';
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
  try {
    const user = await fetchUserData();
    return <div>Protected Content for {user.name}</div>;
  } catch {
    redirect('/landingpage');
  }
}
