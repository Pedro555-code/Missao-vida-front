"use client"
import { DataTable } from "@/components/form/Grid";
import { columns, User } from "@/components/form/Grid/columns";
import { useEffect, useState } from "react";

export async function getUsers(): Promise<User[]> {
    const res = await fetch(
      'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
    )
    const data = await res.json()
    return data
  }

export function DashboardGrid({ idInterno, onDadosSalvos}: DashboardProps) {
    const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getUsers();
      setUserData(data);
    }
    fetchData();
  }, []);

  return (
    <section className='py-24 bg-dark flex justify-center items-center' style={{ backgroundColor: 'rgb(243, 244, 246)' }}>
      <div className='container bg-white p-8 rounded-lg text-black'>
        <DataTable columns={columns} data={userData} />
      </div>
    </section>
  )
}

export interface DashboardProps {
    idInterno?: string;
    onDadosSalvos?: (interno: any, isNovo: boolean) => void;
}