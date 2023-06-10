import React, { useState, useEffect } from 'react';
import { Button, List, ListType, ChildType, useLayoutContext } from 'components';
import { get } from 'utils/client';

export const HomeContainer = () => {
  const { search } = useLayoutContext();
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [list, setList] = useState<ListType[]>([]);

  const getList = async () => {
    await get(`${process.env.REACT_APP_GITHUB_API}`, undefined, { Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` }).then((res: any) => {
      if (res && res.data) {
        let thisList: any[] = [];
        res.data.forEach((data: any) => {
          const findIdx = thisList.findIndex((y: any) => y.title === data.owner.login);
          if (findIdx > -1) {
            thisList[findIdx].child.push({
              title: data.name,
              subTitle: data.description,
              rating: data.stargazers_count,
            });
          } else {
            thisList.push({
              title: data.owner.login,
              child: [{
                title: data.name,
                subTitle: data.description,
                rating: data.stargazers_count,
              }],
            })
          }
        });
        if (search) {
          thisList = thisList.filter((d: any) => d.title.toLowerCase().includes(search.toLowerCase()));
        }
        setList(thisList);
      }
      return;
    }).catch(() => {
      return;
    })
  };

  useEffect(() => {
    getList();
  }, []);

  const onClick = () => {
    setIsSearch(search ? true : false);
    getList();
  };

  return (
    <div className='flex flex-col w-full gap-2'>
      <Button onClick={onClick} />
      {isSearch && search && <span className='text-black-0 my-2'>Showing {'"'}{search}{'"'} repository</span>}
      <div className='flex gap-2 flex-col w-full'>
        <List list={list} />
      </div>
    </div>
  );
};
