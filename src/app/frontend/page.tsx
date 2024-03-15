"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Catgeory, Tools } from "../../lib/data/tools.data";
import Link from "next/link";

function FrontendToolsPage() {
  const renderCategory = (item: any) => {
    switch (item.category) {
      case Catgeory.Frontend:
        return (
          <span className="text-[12px] text-green-500">Category: Frontend</span>
        );
      case Catgeory.Backend:
        return (
          <span className="text-[12px] text-blue-500">Category: Backend</span>
        );
      default:
        <span className="text-sm">Unknown</span>;
    }
  };

  return (
    <div className="flex px-4 py-10 gap-3">
      {Tools &&
        Tools.map((tool, index) => (
          <Card key={index} className="flex flex-col justify-between w-[12rem]">
            <CardHeader>
              <CardTitle className="py-2">
                <h4>{tool.name}</h4>
                <div className="mt-2">{renderCategory(tool)}</div>
              </CardTitle>
              {tool.description && (
                <CardDescription className="text-[12px] pt-3">
                  {tool.description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <Link
                href={tool.href}
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
