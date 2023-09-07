import { Link, LinkProps, useSearchParams } from 'react-router-dom';
import { FC } from 'react';
import { getSearchWith } from '../../utils';
import { SearchParams } from '../../types';

type Props = Omit<LinkProps, 'to'> & {
  params: SearchParams;
};

const SearchLink: FC<Props> = ({ children, params, ...props }) => {
  const [searchParams] = useSearchParams();

  return (
    <Link
      to={{
        search: getSearchWith(searchParams, params),
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default SearchLink;
