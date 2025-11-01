import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  FaDev,
  FaDocker,
  FaGitAlt,
  FaHome,
  FaLinux,
  FaPython,
  FaWindows,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { MdDescription } from 'react-icons/md';
import { SiGnubash } from 'react-icons/si';
export default function Header({ className = '' }) {
  const navLink = [
    {
      name: 'home',
      href: '/',
      icon: <FaHome />,
    },
    {
      name: 'bash',
      href: '/bash',
      icon: <SiGnubash />,
    },
    {
      name: 'git',
      href: '/git',
      icon: <FaGitAlt />,
    },
    {
      name: 'docker',
      href: '/docker',
      icon: <FaDocker />,
    },

    {
      name: 'scripts',
      href: '/scripts',
      icon: <MdDescription />,
    },

    {
      name: 'javascript',
      href: '/javascript',
      icon: <IoLogoJavascript />,
    },
    {
      name: 'python',
      href: '/python',
      icon: <FaPython />,
    },
    {
      name: 'powershell',
      href: '/powershell',
      icon: <FaWindows />,
    },
    {
      name: 'linux',
      href: '/linux',
      icon: <FaLinux />,
    },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 border-b-2 border-solid border-blue-500 ',
        className
      )}>
      <div className="container py-4 flex items-center justify-between">
        <div>
          <Link href="/">
            <h1 className="text-base md:text-2xl text-white font-mono font-semibold uppercase flex items-center gap-1">
              <span className="text-2xl">
                <FaDev className="w-[30px] h-[30px] " />
              </span>{' '}
              Cheatsheet
            </h1>
          </Link>
        </div>
        <div>
          <Link href={'/docker'}>Docker</Link>
        </div>
      </div>
    </header>
  );
}
