import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

// const doctorList = [
//   {
//     id: 1,
//     attributes: {
//       About: "Looking for comfortable, confident, and convenient",
//       Address: "547 Carrington Trace Drive, Cornelius",
//       EndTime: "06:00:00.000",
//       Name: "Dr. Tom Cook",
//       Patients: "900+",
//       Phone: null,
//       Premium: null,
//       StartTime: "08:00:00.000",
//       Year_of_Experience: "20 Years",
//       categories: {
//         data: [
//           {
//             categories: "Дантист",
//           },
//         ],
//       },
//       createdAt: "2023-10-03T14:15:41.564Z",
//       image: {
//         data: {
//           src: "/doctor_image/doctor_image.jpg",
//         },
//       },
//     },
//   },
//   {
//     id: 2,
//     attributes: {
//       About: "Looking for comfortable, confident, and convenient",
//       Address: "547 Carrington Trace Drive, Cornelius",
//       EndTime: "06:00:00.000",
//       Name: "Dr. Tom Cook",
//       Patients: "900+",
//       Phone: null,
//       Premium: null,
//       StartTime: "08:00:00.000",
//       Year_of_Experience: "20 Years",
//       categories: {
//         data: [
//           {
//             categories: "Дантист",
//           },
//         ],
//       },
//       createdAt: "2023-10-03T14:15:41.564Z",
//       image: {
//         data: {
//           src: "/doctor_image/doctor_image.jpg",
//         },
//       },
//     },
//   },
//   {
//     id: 3,
//     attributes: {
//       About: "Looking for comfortable, confident, and convenient",
//       Address: "547 Carrington Trace Drive, Cornelius",
//       EndTime: "06:00:00.000",
//       Name: "Dr. Tom Cook",
//       Patients: "900+",
//       Phone: null,
//       Premium: null,
//       StartTime: "08:00:00.000",
//       Year_of_Experience: "20 Years",
//       categories: {
//         data: [
//           {
//             categories: "Дантист",
//           },
//         ],
//       },
//       createdAt: "2023-10-03T14:15:41.564Z",
//       image: {
//         data: {
//           src: "/doctor_image/doctor_image.jpg",
//         },
//       },
//     },
//   },
//   {
//     id: 4,
//     attributes: {
//       About: "Looking for comfortable, confident, and convenient",
//       Address: "547 Carrington Trace Drive, Cornelius",
//       EndTime: "06:00:00.000",
//       Name: "Dr. Tom Cook",
//       Patients: "900+",
//       Phone: null,
//       Premium: null,
//       StartTime: "08:00:00.000",
//       Year_of_Experience: "20 Years",
//       categories: {
//         data: [
//           {
//             categories: "Дантист",
//           },
//         ],
//       },
//       createdAt: "2023-10-03T14:15:41.564Z",
//       image: {
//         data: {
//           src: "/doctor_image/doctor_image.jpg",
//         },
//       },
//     },
//   },
//   {
//     id: 5,
//     attributes: {
//       About: "Looking for comfortable, confident, and convenient",
//       Address: "547 Carrington Trace Drive, Cornelius",
//       EndTime: "06:00:00.000",
//       Name: "Dr. Tom Cook",
//       Patients: "900+",
//       Phone: null,
//       Premium: null,
//       StartTime: "08:00:00.000",
//       Year_of_Experience: "20 Years",
//       categories: {
//         data: [
//           {
//             categories: "Дантист",
//           },
//         ],
//       },
//       createdAt: "2023-10-03T14:15:41.564Z",
//       image: {
//         data: {
//           src: "/doctor_image/doctor_image.jpg",
//         },
//       },
//     },
//   },
//   {
//     id: 6,
//     attributes: {
//       About: "Looking for comfortable, confident, and convenient",
//       Address: "547 Carrington Trace Drive, Cornelius",
//       EndTime: "06:00:00.000",
//       Name: "Dr. Tom Cook",
//       Patients: "900+",
//       Phone: null,
//       Premium: null,
//       StartTime: "08:00:00.000",
//       Year_of_Experience: "20 Years",
//       categories: {
//         data: [
//           {
//             categories: "Дантист",
//           },
//         ],
//       },
//       createdAt: "2023-10-03T14:15:41.564Z",
//       image: {
//         data: {
//           src: "/doctor_image/doctor_image.jpg",
//         },
//       },
//     },
//   },
//   {
//     id: 7,
//     attributes: {
//       About: "Looking for comfortable, confident, and convenient",
//       Address: "547 Carrington Trace Drive, Cornelius",
//       EndTime: "06:00:00.000",
//       Name: "Dr. Tom Cook",
//       Patients: "900+",
//       Phone: null,
//       Premium: null,
//       StartTime: "08:00:00.000",
//       Year_of_Experience: "20 Years",
//       categories: {
//         data: [
//           {
//             categories: "Дантист",
//           },
//         ],
//       },
//       createdAt: "2023-10-03T14:15:41.564Z",
//       image: {
//         data: {
//           src: "/doctor_image/doctor_image.jpg",
//         },
//       },
//     },
//   },
//   {
//     id: 8,
//     attributes: {
//       About: "Looking for comfortable, confident, and convenient",
//       Address: "547 Carrington Trace Drive, Cornelius",
//       EndTime: "06:00:00.000",
//       Name: "Dr. Tom Cook",
//       Patients: "900+",
//       Phone: null,
//       Premium: null,
//       StartTime: "08:00:00.000",
//       Year_of_Experience: "20 Years",
//       categories: {
//         data: [
//           {
//             categories: "Дантист",
//           },
//         ],
//       },
//       createdAt: "2023-10-03T14:15:41.564Z",
//       image: {
//         data: {
//           src: "/doctor_image/doctor_image.jpg",
//         },
//       },
//     },
//   },
// ];

function DoctorList({ doctorList }) {
  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl">Popular Doctors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {doctorList.length > 0
          ? doctorList.map((item, index) => (
              <div
                className="border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out"
                key={index}
              >
                <Image
                  src={item?.image}
                  alt="doctor"
                  width={500}
                  height={200}
                  className="h-[200px] w-full object-cover rounded-lg"
                />
                <div className="mt-3 items-baseline flex flex-col gap-2">
                  <h2 className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary">
                    {item.category.name}
                  </h2>
                  <h2 className="font-bold">{item.name}</h2>
                  <h2 className="text-primary text-sm">{item.experience}</h2>
                  <h2 className="text-gray-500 text-sm">{item.address}</h2>
                  <h2 className="p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white">
                    Book Now
                  </h2>
                </div>
              </div>
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div className="h-[220px] bg-slate-100 w-full rounded-lg animate-pulse"></div>
            ))}
      </div>
    </div>
  );
}
export default DoctorList;
