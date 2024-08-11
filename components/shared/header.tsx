import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui/button";
import { SearchInput } from "./search-input";
import { ArrowRight, ShoppingCart } from "lucide-react";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return(
        <header className={cn('border border-b border-gray-100 w-screen', className)}>
            <Container className="flex items-center justify-between py-8">
                <div className="flex items-center gap-4">
                    {/* <Image src="/logo.png" width={35} height={35} alt="Logo" /> */}
                    <div>
                        <h1 className="text-2xl uppercase font-black">Store</h1>
                        <p className="text-sm text-gray-400 leading-3">найкращий магазин</p>
                    </div>
                    <div className="mx-10 flex-1">
                        <SearchInput />
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="outline">Увійти</Button>
                    </div>
                    <div>
                        <Button className="group relative gap-2">
                            <b>520 грн</b>
                            <span className="h-full w-[1px] bg-white/50"></span>
                            <div className="flex gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2}/>
                                <b>3</b>
                            </div>
                            <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-2"/>
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}