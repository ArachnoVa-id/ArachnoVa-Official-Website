// src/app/academy/page.js
import { redirect } from 'next/navigation';

export default async function AcademyPage() {
  // Example condition for redirection
  const shouldRedirect = true;

  if (shouldRedirect) {
    redirect('https://forms.gle/47BD69dSta8wDPrV8'); // The URL to redirect to
  }

  return (
    <div>
      <h1>Academy Page</h1>
      <p>This is the academy page content.</p>
    </div>
  );
}
