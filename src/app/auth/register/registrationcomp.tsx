import { useState } from 'react';
import { Registration } from '../../../services/authService';
import { useRouter } from 'next/navigation';
//import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting form...');
    try {
      console.log('Attempting registration...');
      await Registration(email, password);
      //redirect('/landingpage')
      router.push('/home');  // Redirect after registration
    } catch (error) {
      console.error('Registration error:',error)
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Register</button>
      {error && <p>{error}</p>}
    </form>
  );
}