import React from "react";
import { MdInfo } from "react-icons/md";

interface NoteProps {
    children: React.ReactNode;
    type?: "info" | "warning" | "error";
}

export function Note({ children, type = "info" }: NoteProps) {
    const iconClass =
        type === "info"
            ? "text-blue-500"
            : type === "warning"
                ? "text-yellow-500"
                : "text-red-500";

    const bgColor =
        type === "info"
            ? "bg-blue-100"
            : type === "warning"
                ? "bg-yellow-100"
                : "bg-red-100";

    return (
        <div className={`flex items-center justify-start gap-2 rounded-md p-4 my-8 ${bgColor}`}>
            <MdInfo className={`text-2xl ${iconClass}`} />
            <div className="text-gray-800 break-words w-full">{children}</div>
        </div>
    );
}
