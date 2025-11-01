import { cn } from '@/lib/utils';
export default function Footer({ className = '' }) {
  return (
    <footer className={cn('', className)}>
      <h1>Footer</h1>
    </footer>
  );
}
