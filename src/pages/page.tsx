import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";
import { DataTable } from "@/components/datatable/data-table";
import { UserNav } from "@/components/datatable/user-nav";
import { taskSchema } from "@/data/schema";
import { columns } from "@/components/datatable/columns";
import { tasks } from "@/data/task";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

export default function page() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/03.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/03.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
