"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const [data, setData] = useState<{
        email: string;
        password: string;
    }>({
        email: "",
        password: "",
    });

    const router = useRouter();

    const login = async () => {
        try {
            let { data: dataUser, error } =
                await supabase.auth.signInWithPassword({
                    email: data.email,
                    password: data.password,
                });

            if (dataUser) {
                router.refresh();
            }
        } catch (error) {}
    };

    const handelChange = (e: any) => {
        const { name, value } = e.target;

        setData((pre: any) => ({
            ...pre,
            [name]: value,
        }));
    };

    return (
        <div className="container mx-auto w-[400px]">
            <div className="grid">
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={data?.email}
                    onChange={handelChange}
                />
            </div>
            <div className="grid">
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={data?.password}
                    onChange={handelChange}
                />
            </div>
            <div>
                <button onClick={login}>Login</button>
            </div>
        </div>
    );
}
