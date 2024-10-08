"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = () => {
    GlobalApi.getDoctorList().then((resp) => {
      console.log(resp?.data.doctors);
      setDoctorList(resp?.data.doctors);
    });
  };

  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList doctorList={doctorList} />
    </div>
  );
}
