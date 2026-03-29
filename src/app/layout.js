import './globals.css';

export const metadata = {
  title: 'Sharath Saji | Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building elegant digital experiences.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Web Developer', 'Sharath Saji'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
