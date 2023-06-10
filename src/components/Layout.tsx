import React, {
  ReactNode,
  ReactElement,
  createContext,
  useContext,
  useState,
} from 'react';
import { SearchBox } from '.';

interface LayoutProps {
  children: ReactNode | ReactElement;
}

type LayoutContext = {
  search: string;
  onSearchChange: (text: string) => void;
};

const LayoutContext = createContext<LayoutContext>({} as LayoutContext);

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  const [search, setSearch] = useState<string>('');

  return (
    <LayoutContext.Provider
      value={{
        search,
        onSearchChange: setSearch,
      }}
    >
      <div className='flex w-full h-full flex-col items-center p-5'>
        <div className='flex flex-col tablet:w-6/12 laptop:w-4/12 w-11/12 gap-5 items-center p-3 laptop:p-5 shadow-0'>
          <SearchBox />
          {children}
        </div>
      </div>
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);
