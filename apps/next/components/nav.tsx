import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Basic', href: '/basic' },
  { name: 'Validation', href: '/validation' },
  { name: 'Kitchen Sink', href: '/kitchen' },
];

const linkDefault = `border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-indigo-500 mx-1.5 sm:mx-6`;

const linkActive = `text-gray-800 transition-colors duration-200 transform dark:text-gray-100 border-b-2 border-indigo-500 mx-1.5 sm:mx-6`;

const createLinks = (activePath: string) => {
  return links.map((link, i) => {
    const isActive = activePath === link.href;
    const klass = isActive ? linkActive : linkDefault;
    return (
      <Link href={link.href} key={link.name + i}>
        <a className={klass}>{link.name}</a>
      </Link>
    );
  });
};

const Nav = () => {
  const { asPath } = useRouter();
  return (
    <>{createLinks(asPath)}</>
  );
};

export default Nav;