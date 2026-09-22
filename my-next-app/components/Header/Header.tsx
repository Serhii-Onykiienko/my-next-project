// components/Header/Header.tsx

import Link from 'next/link';
// import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
const Header = () => {
  // const categories = await getCategories();

  return (
    <header>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul>
          {/* <li>
            <CategoriesMenu categories={categories} />
          </li> */}
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* Відображаємо компонент */}
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
