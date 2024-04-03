import { User } from "@/types/User";
import Image from "next/image";

type UserProps = {
    user: User;
};

export default function UserCard({ user }: UserProps) {
    return (
        <div className="bg-indigo-400 text-white rounded ">
            <div>{user.id}</div>
            <div>{user.product_name}</div>
            <Image
                src={`https://admin.parisbeautybd.com/storage/product/${user?.image[0]}`}
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <div>{user.regular_price}</div>
            <div>{user.discount}</div>
            <div>{user.product_serial}</div>
        </div>
    );
}
