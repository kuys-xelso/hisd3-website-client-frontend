import { Card, CardHeader, CardContent, CardFooter } from "../../ui/card";
import type { Resource } from "@/hooks/useArticles";
import { DotIcon } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Link } from "@tanstack/react-router";

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className="flex flex-col h-full bg-white overflow-hidden hover:shadow-xl transition-all duration-500 border border-slate-200 group rounded-2xl hover:-translate-y-1 p-0 gap-0">
      {/* Image Section */}

      <div className="relative h-60 overflow-hidden">
        <Link
          to="/resources/$resourcesId"
          params={{ resourcesId: resource.id }}
          className="block h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <CardHeader className="p-0 mb-4">
          <div className="flex items-center text-md text-slate-500 mb-3 font-regular">
            {resource.date}
            <DotIcon className="w-7 h-7" />
            <Badge className="text-md font-regular bg-blue-50 text-primary px-2 py-1 rounded-md">
              {resource.category}
            </Badge>
          </div>
          <Link
            to="/resources/$resourcesId"
            params={{ resourcesId: resource.id }}
            className="block h-full"
          >
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
              {resource.title}
            </h3>
          </Link>
        </CardHeader>

        <CardContent className="p-0 flex-grow mb-6">
          <p className="text-slate-600 line-clamp-3 leading-relaxed">
            {resource.description}
          </p>
        </CardContent>
        <CardFooter className="p-0 mt-auto"></CardFooter>
      </div>
    </Card>
  );
};
