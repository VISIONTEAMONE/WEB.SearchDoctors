"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import GlobalApi from "../_utils/GlobalApi";
import Link from "next/link";

/*import {category} from "../public/category.jsx"*/

// const category = [
//   {
//     index: 1,
//     data: {
//       category: "Дантист",
//       image: "/category_image/dentist.png",
//     },
//     // ссылка на изображение дантиста
//   },
//   {
//     index: 2,
//     data: {
//       category: "Кардиолог",
//       image: "/category_image/cardiologist.png", // ссылка на изображение кардиолога
//     },
//   },
//   {
//     index: 3,
//     data: {
//       category: "Ортопед",
//       image: "/category_image/orthopedist.png", // ссылка на изображение ортопеда
//     },
//   },
//   {
//     index: 4,
//     data: {
//       category: "Невролог",
//       image: "/category_image/neurosurgeon.png", // ссылка на изображение невролога
//     },
//   },
//   {
//     index: 5,
//     data: {
//       category: "Лор",
//       image: "/category_image/otolaryngologist.png", // ссылка на изображение ЛОРа
//     },
//   },
//   {
//     index: 6,
//     data: {
//       category: "Главный доктор",
//       image: "/category_image/general_doctor.png",
//     },
//   },
// ];

function CategorySearch() {
  const [categoryList, setCategoyList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log("CATEGORYLIST",resp.data.categories);
      setCategoyList(resp.data.categories);
    });
  };

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
        {categoryList.length > 0
          ? categoryList.map((item, index) => (
              <Link
              href={"/search/" + item.name}
                key={index}
                className="flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-2 cursor-pointer hover:scale-110 transition-all ease-in-out "
              >
                <Image src={item?.icon} alt="icon" width={40} height={40} />
                <label className="text-blue-600 text-sm">{item?.name}</label>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div className="bg-slate-200 m-2 w-[100px] h-[100px] rounded-lg animate-pulse"></div>
            ))}
      </div>
    </div>
  );
}

export default CategorySearch;
