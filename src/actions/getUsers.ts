"use server";
import { ProductAPIResponse } from "@/types/Product";

export const getUsers = async (offset: number, limit: number) => {
    try {
        //const url = `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${limit}`;
        const url = `https://apiparis.parisbeautybd.com/api/featured-products/new-arrival?page=${offset}`;
        console.log("page number", offset);
        const response = await fetch(url);
        const data = (await response.json()) as any;
        //console.log("projects", data.data.data);
        return data.data?.data;
    } catch (error: unknown) {
        console.log(error);
        throw new Error(`An error happened: ${error}`);
    }

    // try {
    //     //const url = `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${limit}`;
    //     const url = `https://apiparis.parisbeautybd.com/api/featured-products/new-arrival?page=${offset}`;
    //     const response = await fetch(url);
    //     const data = (await response.json()) as UserAPIResponse;
    //     return data.users;
    // } catch (error: unknown) {
    //     console.log(error);
    //     throw new Error(`An error happened: ${error}`);
    // }
};
