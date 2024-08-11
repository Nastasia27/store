import React from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  items: any[];
  className?: string;
  ctagoryId: number;
  listClassName?:string;
}

export const ProductsGroupList: React.FC<Props> = ({ 
    title, 
    ctagoryId, 
    listClassName, 
    items, 
    className 
}) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((item, index) => (
          <ProductCard
            key={index}
            // id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
            // count={i % 2}
          />
        ))}
      </div>
    </div>
  );
};