import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import clsx from "clsx";

interface Props {
    className?: string;
}

const catagoriesArr = ['Паста', 'Віск', 'Доглядова', 'Інше'];
const activeIndex = 0;

export const Catagories: React.FC<Props> = ({className}) => {
    return(
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {catagoriesArr.map((item, index) => (
                <Link 
                    key={index} 
                    href={''}
                    className={clsx(
                        'inline-flex items-center font-bold h-11 p-2 rounded-2xl px-5,',
                        {
                          'bg-white shadow-md shadow-gray-200 text-primary': activeIndex === index,
                        },)}
                >
                        {item}
                </Link>
            ))}

        </div>
    )
}