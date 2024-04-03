// export interface User {
//     id: number;
//     gender: string;
//     date_of_birth: string;
//     job: string;
//     city: string;
//     zipcode: string;
//     latitude: number;
//     profile_picture: string;
//     email: string;
//     last_name: string;
//     first_name: string;
//     phone: string;
//     street: string;
//     state: string;
//     country: string;
//     longitude: number;
// }

// export interface UserAPIResponse {
//     success: boolean;
//     message: string;
//     total_users: number;
//     offset: number;
//     limit: number;
//     users: User[];
// }

export interface Product {
    id: number;
    product_serial: number;
    product_variation_status: number;
    product_name: string;
    category_id: number[];
    regular_price: number;
    discount: number;
    sku: string;
    brand_id: number[];
    created_at: string;
    discount_type: "percent" | "fixed"; // Assuming discount type can be either "percent" or "fixed"
    sale_price: number;
    whole_sale_price: number | null; // Assuming wholesale price can be null
    image: string[];
    new_arrival_status: number | null; // Assuming new arrival status can be null
    featured_status: number;
    hot_product_status: number;
    showroom_id: number[];
    status: number;
    image_path: string;
    slug: string;
    product_variants: any[]; // Adjust type as per actual structure
    stock_products: {
        product_id: number;
        total: number;
    }[];
    wishlist: any[]; // Adjust type as per actual structure
}

export interface ProductAPIResponse {
    success: boolean;
    data: Product[];
}

// export interface Product {
//     id: number;
//     product_serial: number;
//     product_variation_status: number;
//     product_name: string;
//     category_id: number[];
//     regular_price: number;
//     discount: number;
//     sku: string;
//     brand_id: number[];
//     created_at: string;
//     discount_type: "percent" | "fixed"; // Assuming discount type can be either "percent" or "fixed"
//     sale_price: number;
//     whole_sale_price: number | null; // Assuming wholesale price can be null
//     image: string[];
//     new_arrival_status: number | null; // Assuming new arrival status can be null
//     featured_status: number;
//     hot_product_status: number;
//     showroom_id: number[];
//     status: number;
//     image_path: string;
//     slug: string;
//     product_variants: any[]; // Adjust type as per actual structure
//     stock_products: {
//         product_id: number;
//         total: number;
//     }[];
//     wishlist: any[]; // Adjust type as per actual structure
// }
