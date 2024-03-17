"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { CheatSheetData } from "@/lib/data/cheatsheet/cheatsheet.data";

function FrontendToolsPage() {
  return (
    <div className="flex px-4 py-10 gap-3">
      {CheatSheetData &&
        CheatSheetData.map((item, index) => (
          <Card key={index} className="flex flex-col justify-between w-[12rem]">
            <CardHeader>
              <CardTitle className="py-2">
                <p className="text-[14px] font-bold">{item.name}</p>
                <div className="mt-3">
                  <p className="text-[12px] text-blue-500">
                    <span className=" text-slate-500">Category:</span>{" "}
                    {item.category ?? "Unknown"}
                  </p>
                </div>
              </CardTitle>
              {item.description && (
                <CardDescription className="text-[12px] pt-3">
                  {item.description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <Link
                href={item.href}
                target="_blank"
                className=" text-sky-600 text-sm hover:font-bold"
              >
                Open link
              </Link>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}

export default FrontendToolsPage;
