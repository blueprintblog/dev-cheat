'use client';

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
        'fixed top-0 left-0 w-full z-50 border-b-2 border-solid border-blue-500 bg-gray-900',
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
        <nav className="hidden md:flex items-center space-x-4">
          {navLink.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-blue-300 transition-colors duration-200 flex items-center gap-2">
              <span className="text-lg">{link.icon}</span>
              <span className="capitalize">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <select
            className="bg-transparent text-white border border-white rounded px-2 py-1"
            onChange={(e) => {
              if (e.target.value) {
                window.location.href = e.target.value;
              }
            }}
            defaultValue="">
            <option value="" disabled>
              Menu
            </option>
            {navLink.map((link) => (
              <option key={link.name} value={link.href}>
                {link.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
