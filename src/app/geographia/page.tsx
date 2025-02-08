"use client"
import Link from "next/link";
import Country from "./[id]/page";
import { useState } from "react";


type Country = {
    name: string
}

// export async function getData(){

//     const response = await fetch('https://countryinfoapi.com/api/countries/');
//     let countries = await response.json()
//     const [ search, setSearch ] = useState(" ");
//     const filteredItems = await countries.filter((country : Country) => country.name.toLowerCase().includes(search.toLowerCase()))
//     return { props: { filteredItems } }
// }


export default async function Geo(){
    const response = await fetch('https://countryinfoapi.com/api/countries/');
    let countries = await response.json()

    // const router = useRouter()
    return (
        <>
        <div className=" max-w-sm mx-auto justify-center p-5">
            <div className="flex flex-row gap-2">
                <input className="px-4 py-2 rounded-md text-black bg-white" name="country" type="text"/>
                <button type="submit" className="p-2 bg-blue-600 rounded-md"> Get Info </button>
            </div>
        </div>
        <ul className="space-y-4 p-4 flex flex-col">
            {countries.map((country: Country)=>(
            <Link href={`geographia/${country.name}`}>
                <li
                className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                >
                {country.name}
                </li>

            </Link>
            ))}
        </ul>
        {/* <ul className="space-y-4 p-4 flex flex-col">
            {filteredItems.map((country: Country)=>(
            <Link href={`geographia/${country.name}`}>
                <li
                className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                >
                {country.name}
                </li>

            </Link>
            ))}
        </ul> */}
        </>
    )
}
