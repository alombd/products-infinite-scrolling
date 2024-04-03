import ProductList from "@/components/ProductList";
import { getUsers } from "@/actions/getUsers";

const INITIAL_NUMBER_OF_USERS = 10;

export default async function Home() {
    const initialProducts = await getUsers(0, INITIAL_NUMBER_OF_USERS);

    return <ProductList initialProducts={initialProducts} />;
}
