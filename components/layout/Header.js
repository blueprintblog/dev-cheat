'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaCaretDown,
  FaCloud,
  FaCss3Alt,
  FaDev,
  FaDocker,
  FaFolder,
  FaGitAlt,
  FaHome,
  FaHtml5,
  FaLinux,
  FaNetworkWired,
  FaPython,
  FaShieldAlt,
  FaSync,
  FaTimes,
  FaWindows,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { MdDescription } from 'react-icons/md';
import { SiGnubash, SiKubernetes } from 'react-icons/si';

export default function Header({ className = '' }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efeito para controlar o overflow quando o menu mobile está aberto
  React.useEffect(() => {
    if (mobileMenuOpen) {
      // Previne scroll no body e html, mas permite scroll no menu
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      // Adiciona padding para compensar a barra de rolagem que some
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      // Restaura o scroll
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    // Cleanup function para restaurar o overflow quando o componente for desmontado
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  const handleDropdownMouseEnter = (dropdown) => {
    // Cancela qualquer timer pendente
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setOpenDropdown(dropdown);
  };

  const handleDropdownMouseLeave = () => {
    // Adiciona um pequeno delay para permitir o mouse mover para os itens
    const id = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
    setTimeoutId(id);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleDropdownContentMouseEnter = () => {
    // Cancela o fechamento quando o mouse entra no conteúdo do dropdown
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  const handleDropdownContentMouseLeave = () => {
    // Adiciona um delay quando o mouse sai do conteúdo do dropdown
    const id = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
    setTimeoutId(id);
  };

  const navCategories = [
    {
      name: 'home',
      href: '/',
      icon: <FaHome />,
      standalone: true,
    },
    {
      category: 'Desenvolvimento & Programação',
      items: [
        {
          name: 'html',
          href: '/html',
          icon: <FaHtml5 />,
        },
        {
          name: 'css',
          href: '/css',
          icon: <FaCss3Alt />,
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
          name: 'bash',
          href: '/bash',
          icon: <SiGnubash />,
        },
        {
          name: 'powershell',
          href: '/powershell',
          icon: <FaWindows />,
        },
        {
          name: 'scripts',
          href: '/scripts',
          icon: <MdDescription />,
        },
      ],
    },
    {
      category: 'DevOps & Infraestrutura',
      items: [
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
          name: 'kubernetes',
          href: '/kubernetes',
          icon: <SiKubernetes />,
        },
        {
          name: 'cicd',
          href: '/cicd',
          icon: <FaSync />,
        },
        {
          name: 'cloud',
          href: '/cloud',
          icon: <FaCloud />,
        },
      ],
    },
    {
      category: 'Sistema & Segurança',
      items: [
        {
          name: 'linux',
          href: '/linux',
          icon: <FaLinux />,
        },
        {
          name: 'filesystem',
          href: '/filesystem',
          icon: <FaFolder />,
        },
        {
          name: 'network',
          href: '/network',
          icon: <FaNetworkWired />,
        },
        {
          name: 'devsecops',
          href: '/devsecops',
          icon: <FaShieldAlt />,
        },
      ],
    },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 border-b-2 border-solid border-blue-500 bg-gray-900',
        className
      )}
      onMouseLeave={handleDropdownMouseLeave}>
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

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navCategories.map((category, index) => {
            if (category.standalone) {
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-white hover:text-blue-300 transition-colors duration-200 flex items-center gap-2">
                  <span className="text-lg">{category.icon}</span>
                  <span className="capitalize">{category.name}</span>
                </Link>
              );
            }

            return (
              <div
                key={category.category}
                className="relative"
                onMouseEnter={() => handleDropdownMouseEnter(category.category)}
                onMouseLeave={handleDropdownMouseLeave}>
                <button className="text-white hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 py-2">
                  <span className="text-lg">
                    <FaBars />
                  </span>
                  <span className="capitalize">{category.category}</span>
                  <FaCaretDown className="text-xs" />
                </button>

                {openDropdown === category.category && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-xl"
                    onMouseEnter={handleDropdownContentMouseEnter}
                    onMouseLeave={handleDropdownContentMouseLeave}>
                    <div className="py-2">
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-700 transition-colors duration-200">
                          <span className="text-lg">{item.icon}</span>
                          <span className="capitalize">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Menu Tablet */}
        <nav className="hidden md:flex lg:hidden items-center space-x-4">
          {navCategories.map((category) => {
            if (category.standalone) {
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-white hover:text-blue-300 transition-colors duration-200 flex items-center gap-2">
                  <span className="text-lg">{category.icon}</span>
                </Link>
              );
            }

            return (
              <div
                key={category.category}
                className="relative"
                onMouseEnter={() => handleDropdownMouseEnter(category.category)}
                onMouseLeave={handleDropdownMouseLeave}>
                <button className="text-white hover:text-blue-300 transition-colors duration-200 flex items-center gap-1 py-2">
                  <span className="text-lg">
                    <FaBars />
                  </span>
                  <span className="text-sm capitalize">
                    {category.category.split(' ')[0]}
                  </span>
                  <FaCaretDown className="text-xs" />
                </button>

                {openDropdown === category.category && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-xl"
                    onMouseEnter={handleDropdownContentMouseEnter}
                    onMouseLeave={handleDropdownContentMouseLeave}>
                    <div className="py-2">
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-200">
                          <span className="text-lg">{item.icon}</span>
                          <span className="capitalize text-sm">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-blue-300 transition-colors duration-200 p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className="md:hidden fixed top-0 right-0 h-full w-80 max-w-full z-50 bg-gray-900 shadow-xl flex flex-col">
            
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-white text-lg font-semibold">Menu</h2>
              <button
                onClick={closeMobileMenu}
                className="text-white hover:text-blue-300 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                aria-label="Fechar menu">
                <FaTimes className="text-xl" />
              </button>
            </div>
            
            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4">
                {navCategories.map((category) => (
                  <div key={category.standalone ? category.name : category.category} className={category.standalone ? 'mb-4' : 'mb-6'}>
                    
                    {category.standalone ? (
                      <Link
                        href={category.href}
                        className="flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                        onClick={closeMobileMenu}>
                        <span className="text-lg">{category.icon}</span>
                        <span className="capitalize text-lg font-medium">
                          {category.name}
                        </span>
                      </Link>
                    ) : (
                      <>
                        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider px-4 py-2 mb-3">
                          {category.category}
                        </h3>
                        <div className="space-y-1">
                          {category.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                              onClick={closeMobileMenu}>
                              <span className="text-lg">{item.icon}</span>
                              <span className="capitalize">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Footer do Menu Mobile */}
              <div className="border-t border-gray-700 p-4">
                <div className="text-center text-gray-400 text-sm">
                  <p className="font-medium">Dev Cheatsheet</p>
                  <p className="text-xs mt-1">
                    Referência rápida para desenvolvedores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
