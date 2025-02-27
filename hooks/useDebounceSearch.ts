import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {TSetState} from "@/types";

export const useDebouncedSearch = (setSearch : TSetState<string>,search: string, delay: number = 600) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        if (isFirstRender) {
            if(searchParams.get('search'))
                setSearch(searchParams.get('search') as string);
            setIsFirstRender(false);
            return;
        }

        const handler = setTimeout(() => {
            const params = new URLSearchParams(searchParams);
            if (search) {
                params.set("search", search);
            } else {
                params.delete("search");
            }
            router.push(`${pathname}?${params.toString()}`, { scroll: false });
        }, delay);

        return () => clearTimeout(handler);
    }, [search, delay]);

};
