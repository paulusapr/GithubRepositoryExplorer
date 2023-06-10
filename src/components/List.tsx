import React, { useState, Fragment} from 'react';

export type ChildType = {
  title: string;
  subTitle: string;
  rating: number;
};

export type ListType = {
  title: string;
  child?: ChildType[];  
};

type ListProps = {
  list: ListType[];
};

export const List = (props: ListProps) => {
  const { list } = props;
  const [show, setShow] = useState<number | undefined>(undefined);

  return (
    <div className='flex flex-col w-full'>
      {list.map((data: ListType, idx: number) => {
        return (
          <Fragment key={data.title}>
            <div className={`flex flex-row justify-between items-center p-2 bg-grey-2 mb-2 ${idx > 0 ? 'mt-2' : ''}`}>
              {data.title}
              <button className='outline-none' onClick={() => { setShow(show !== idx ? idx : undefined); }} type='button'>
                <i className={`icon ${show === idx ? 'ion-ios-arrow-up' : 'ion-ios-arrow-down'} text-xl laptop:text-2xl`} />
              </button>
            </div>
            {data.child && data.child.length > 0 && show === idx && <div className='flex flex-col w-full pl-4 laptop:pl-8 gap-2'>
              {data?.child?.map((child: ChildType) => {
                return (
                  <div key={child.title+child.subTitle} className='flex justify-between flex-row bg-grey-1 p-2'>
                    <div className='flex flex-col'>
                      <span className='font-bold text-base'>{child.title}</span>
                      <span className='text-xs'>{child.subTitle}</span>
                    </div>
                    <div className='flex flex-row items-center gap-2 font-bold'>
                      <span>{child.rating}</span>
                      <i className='icon ion-ios-star'/>
                    </div>
                  </div>
                );
              })}
            </div>}
          </Fragment>
        );
      })}
    </div>
  );
};
