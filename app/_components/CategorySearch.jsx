import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
/*import {category} from "../public/category.jsx"*/

const category = [
  {
    index: 1,
    data:
    {
      category: 'Дантист',
      image: '/category_image/dentist.png'
    }
    // ссылка на изображение дантиста
  },
  {
    index: 2,
    data:
    {
      category: 'Кардиолог',
      image: '/category_image/cardiologist.png', // ссылка на изображение кардиолога
    }
  },
  {
    index: 3,
    data:
    {
      category: 'Ортопед',
      image: '/category_image/orthopedist.png', // ссылка на изображение ортопеда
    }
  },
  {
    index: 4,
    data:
    {
      category: 'Невролог',
      image: '/category_image/neurosurgeon.png', // ссылка на изображение невролога
    }
  },
  {
    index: 5,
    data:
    {
      category: 'Лор',
      image: '/category_image/otolaryngologist.png', // ссылка на изображение ЛОРа
    }
  },
  {
    index: 6,
    data:
    {
      category: 'Главный доктор',
      image: '/category_image/general_doctor.png',
    }
  }
];

function CategorySearch() {

  return (
    <div className="mb-10 px-5 items-center flex flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-gray-400 text-xl">
        Search Your Doctor and book Appointment in one click
      </h2>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          {" "}
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      <div className="mt-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {category.map((item, index) => (
          <div key={index} className='flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-2 hover:scale-110 transition-all ease-in-out cursor-pointer' >
            <Image src={item.data.image}
              alt='icon'
              width={40}
              height={40} />
            <label className="text-green-600 text-sm">{item.data.category}</label>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CategorySearch;
