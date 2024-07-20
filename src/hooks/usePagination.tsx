import { useState } from "react";

export const usePagination = (totalItems: number, pageSize: number) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / pageSize);
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return {
        currentPage,
        setCurrentPage,
        totalPages,
        start,
        end
    };
};