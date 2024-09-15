import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const doctorList = [
  {
    id: 1,
    attributes: {
      About: "Looking for comfortable, confident, and convenient",
      Address: "547 Carrington Trace Drive, Cornelius",
      EndTime: "06:00:00.000",
      Name: "Dr. Tom Cook",
      Patients: "900+",
      Phone: null,
      Premium: null,
      StartTime: "08:00:00.000",
      Year_of_Experience: "20 Years",
      categories: {
        data: [
          {
            categories: "Дантист"
          }
        ]
      },
      createdAt: "2023-10-03T14:15:41.564Z",
      image: {
        data: {
          src: "/doctor_image/doctor_image.jpg"
        }
      }
    }
  },
  {
    id: 2,
    attributes: {
      About: "Looking for comfortable, confident, and convenient",
      Address: "547 Carrington Trace Drive, Cornelius",
      EndTime: "06:00:00.000",
      Name: "Dr. Tom Cook",
      Patients: "900+",
      Phone: null,
      Premium: null,
      StartTime: "08:00:00.000",
      Year_of_Experience: "20 Years",
      categories: {
        data: [
          {
            categories: "Дантист"
          }
        ]
      },
      createdAt: "2023-10-03T14:15:41.564Z",
      image: {
        data: {
          src: "/doctor_image/doctor_image.jpg"
        }
      }
    }
  },
  {
    id: 3,
    attributes: {
      About: "Looking for comfortable, confident, and convenient",
      Address: "547 Carrington Trace Drive, Cornelius",
      EndTime: "06:00:00.000",
      Name: "Dr. Tom Cook",
      Patients: "900+",
      Phone: null,
      Premium: null,
      StartTime: "08:00:00.000",
      Year_of_Experience: "20 Years",
      categories: {
        data: [
          {
            categories: "Дантист"
          }
        ]
      },
      createdAt: "2023-10-03T14:15:41.564Z",
      image: {
        data: {
          src: "/doctor_image/doctor_image.jpg"
        }
      }
    }
  },
  {
    id: 4,
    attributes: {
      About: "Looking for comfortable, confident, and convenient",
      Address: "547 Carrington Trace Drive, Cornelius",
      EndTime: "06:00:00.000",
      Name: "Dr. Tom Cook",
      Patients: "900+",
      Phone: null,
      Premium: null,
      StartTime: "08:00:00.000",
      Year_of_Experience: "20 Years",
      categories: {
        data: [
          {
            categories: "Дантист"
          }
        ]
      },
      createdAt: "2023-10-03T14:15:41.564Z",
      image: {
        data: {
          src: "/doctor_image/doctor_image.jpg"
        }
      }
    }
  },
  {
    id: 5,
    attributes: {
      About: "Looking for comfortable, confident, and convenient",
      Address: "547 Carrington Trace Drive, Cornelius",
      EndTime: "06:00:00.000",
      Name: "Dr. Tom Cook",
      Patients: "900+",
      Phone: null,
      Premium: null,
      StartTime: "08:00:00.000",
      Year_of_Experience: "20 Years",
      categories: {
        data: [
          {
            categories: "Дантист"
          }
        ]
      },
      createdAt: "2023-10-03T14:15:41.564Z",
      image: {
        data: {
          src: "/doctor_image/doctor_image.jpg"
        }
      }
    }
  },
  {
    id: 6,
    attributes: {
      About: "Looking for comfortable, confident, and convenient",
      Address: "547 Carrington Trace Drive, Cornelius",
      EndTime: "06:00:00.000",
      Name: "Dr. Tom Cook",
      Patients: "900+",
      Phone: null,
      Premium: null,
      StartTime: "08:00:00.000",
      Year_of_Experience: "20 Years",
      categories: {
        data: [
          {
            categories: "Дантист"
          }
        ]
      },
      createdAt: "2023-10-03T14:15:41.564Z",
      image: {
        data: {
          src: "/doctor_image/doctor_image.jpg"
        }
      }
    }
  },
  {
    id: 7,
    attributes: {
      About: "Looking for comfortable, confident, and convenient",
      Address: "547 Carrington Trace Drive, Cornelius",
      EndTime: "06:00:00.000",
      Name: "Dr. Tom Cook",
      Patients: "900+",
      Phone: null,
      Premium: null,
      StartTime: "08:00:00.000",
      Year_of_Experience: "20 Years",
      categories: {
        data: [
          {
            categories: "Дантист"
          }
        ]
      },
      createdAt: "2023-10-03T14:15:41.564Z",
      image: {
        data: {
          src: "/doctor_image/doctor_image.jpg"
        }
      }
    }
  },
  {
    id: 8,
    attributes: {
      About: "Looking for comfortable, confident, and convenient",
      Address: "547 Carrington Trace Drive, Cornelius",
      EndTime: "06:00:00.000",
      Name: "Dr. Tom Cook",
      Patients: "900+",
      Phone: null,
      Premium: null,
      StartTime: "08:00:00.000",
      Year_of_Experience: "20 Years",
      categories: {
        data: [
          {
            categories: "Дантист"
          }
        ]
      },
      createdAt: "2023-10-03T14:15:41.564Z",
      image: {
        data: {
          src: "/doctor_image/doctor_image.jpg"
        }
      }
    }
  },

];

function DoctorList() {
  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl">Popular Doctors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {doctorList && doctorList.map((item, index) => (
          <div className="border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm" key={index}>
            <Image 
              src={item.attributes?.image?.data?.src}
              alt="doctor"
              width={500}
              height={200}
              className="h-[200px] w-full object-cover rounded-lg"
            />
            <div className="mt-3 item-baseline flex flex-col">
              <h2 className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary">
                {item.attributes.categories.data[0].categories}
              </h2>
              <h2 className="font-bold">
                {item.attributes.Name}
              </h2>
              <h2 className="text-primary text-sm">
                {item.attributes.Year_of_Experience}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DoctorList;
