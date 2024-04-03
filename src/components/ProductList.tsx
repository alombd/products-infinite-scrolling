"use client";
import { Product } from "@/types/Product";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { getUsers } from "@/actions/getUsers";
import { useInView } from "react-intersection-observer";

type ProductListProps = {
    initialProducts: Product[];
};

const NUMBER_OF_USERS_TO_FETCH = 10;

export default function ProductList({ initialProducts }: ProductListProps) {
    const [offset, setOffset] = useState(1);
    const [users, setUsers] = useState<Product[]>(initialProducts);
    const { ref, inView } = useInView();

    const loadMoreUsers = async () => {
        const apiUsers = await getUsers(offset, NUMBER_OF_USERS_TO_FETCH);
        setUsers([...users, ...apiUsers]);
        //setOffset(offset + NUMBER_OF_USERS_TO_FETCH);
        setOffset(offset + 1);
    };

    useEffect(() => {
        if (inView) {
            loadMoreUsers();
        }
    }, [inView]);
    

    return (
        <div className="grid grid-cols-5 gap-3">
            {users.map((user) => (
                <ProductCard key={user.id} user={user} />
            ))}
            <div ref={ref}>Loading...</div>
            {/* <button onClick={loadMoreUsers}>Load more</button> */}
        </div>
    );
}
