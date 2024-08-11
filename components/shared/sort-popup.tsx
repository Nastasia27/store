import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import React from "react";

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({className}) => {
    return(
        <div className={className}>
            <div
                className={cn(
                    'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
                    className,
                )}>
                <ArrowUpDown className="w-4 h-4" />
                <b>Cортувати:</b>
                <b className="text-primary">популярне</b>
            </div>
        </div>
    )
}