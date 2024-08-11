import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFilterGroup } from "./checkbox-filters-group";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
    
    return(
        <div className={className}>
            <Title text="Фільтрація" size="sm" className="mb-5 font-bold" />
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Зібрати" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Ціна від та до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0} />
                    <Input type="number" min={100} max={30000} placeholder="30000" />
                </div>
                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
            </div>
            <CheckboxFilterGroup
                title="Ingridients"
                className="mt-5"
                limit={6}
                defaultItems={[
                    {
                        text: 'Сирний соус',
                        value:'1',
                    },
                    {
                        text: 'Мацарела',
                        value:'2',
                    },
                    {
                        text: 'Часник',
                        value:'3',
                    },
                    {
                        text: 'Салямі',
                        value:'4',
                    },
                    {
                        text: 'Помідори',
                        value:'5',
                    },
                ]}
                items={[
                    {
                        text: 'Сирний соус',
                        value:'1',
                    },
                    {
                        text: 'Мацарела',
                        value:'2',
                    },
                    {
                        text: 'Часник',
                        value:'3',
                    },
                    {
                        text: 'Салямі',
                        value:'4',
                    },
                    {
                        text: 'Помідори',
                        value:'5',
                    },
                    {
                        text: 'Огірки',
                        value:'6',
                    },
                    {
                        text: 'Цибуля',
                        value:'7',
                    },
                    {
                        text: 'Ананас',
                        value:'8',
                    },
                    {
                        text: 'Салямі',
                        value:'4',
                    },
                    {
                        text: 'Помідори',
                        value:'5',
                    },
                    {
                        text: 'Огірки',
                        value:'6',
                    },
                    {
                        text: 'Цибуля',
                        value:'7',
                    },
                    {
                        text: 'Ананас',
                        value:'8',
                    },
                ]}
                searchInputPlaceholder={'Пошук'}
            />

        </div>
    )
}