'use client';
import React from "react";
import { cn } from "@/lib/utils";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { title } from "process";
import { Input } from "../ui/input";

type Item = FilterChecboxProps;

interface Props {
    title:string;
    items: Item[];
    defaultItems: Item[];
    limit: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}



export const CheckboxFilterGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit,
    searchInputPlaceholder,
    onChange,
    defaultValue,
    className,

}) => {
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    
    const handleSearchInput = (value:string) => {
        setSearchValue(value);
    }

    const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())) : defaultItems?.slice(0,limit);

    return(
        <div className={cn('', className)}>
            <p className="font-bold mb-3">{title}</p>

            {showAll && (
                <div className="mb-5">
                <Input 
                    onChange={(e) => handleSearchInput(e.target.value)}
                    placeholder={searchInputPlaceholder} 
                    className="bg-gray-50 border-none" 
                />
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
            {list.map((item, index) => (
                <FilterCheckbox
                    key={index}
                    text={item.text}
                    value={item.value}
                    endAdornment={item.endAdornment}
                    checked={false}
                    onCheckedChange={(ids) => console.log(ids)}
                />
                
            ))}
            </div>
            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                        {showAll ? 'Сховати' : '+ Показати все'}
                    </button>
                </div>
            )}

        </div>
    )
}