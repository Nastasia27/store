import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { Catagories } from "@/components/shared/catagories";
import { SortPopup } from "@/components/shared/sort-popup";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <main className=" min-h-screen bg-white rounded-3xl">
        
      <Container className="mt-5">
        <Title text="Всі товари" size="lg" className="font-black pl-24"/>
      </Container>
      <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
            <Container className="flex items-center justify-around">
                <Catagories />
                <SortPopup />
            </Container>
        </div>
        <Container className="mt-10 pb-14">
          <div className="flex gap-10">
            {/* Фільтрація */}
            <div className="w-[250px]">
              <Filters/>
            </div>
            {/* Список товарів */}
            <div className="flex-1">
                <div className="flex flex-col gap-16">
                <ProductsGroupList 
                  title={'Pizza'} 
                  ctagoryId={1} 
                  items={[
                    {
                      id:1,
                      name:'pizza chorizo',
                      imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                      price: 550,
                      items:[{price:550}]
                    },
                    {
                      id:1,
                      name:'pizza chorizo',
                      imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                      price: 550,
                      items:[{price:550}]
                    },
                    {
                      id:1,
                      name:'pizza chorizo',
                      imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                      price: 550,
                      items:[{price:550}]
                    },
                    {
                      id:1,
                      name:'pizza chorizo',
                      imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                      price: 550,
                      items:[{price:550}]
                    },
                    {
                      id:1,
                      name:'pizza chorizo',
                      imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                      price: 550,
                      items:[{price:550}]
                    }
                  ]} 
                                  />
                </div>
            </div>
          </div>
        </Container>

      <div>
        
        
      </div>
    </main>
  );
}
