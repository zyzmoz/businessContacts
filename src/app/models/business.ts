export interface Business {
    $key?: string;
    company?: string;
    description?: string;
    category: string;
    years_in_business?: number;
    email: string;
    street_address?: string;
    city: string;
    state?: string;
    zipcode?: string;
    phone?: string;
    created_at: string;  

}

// $ tells that the var is a PK
//? tells that this var is mandatory

