export default async function Country( {params}: { params : { id: string}} ){

    const countryName = await params.id
    const response = await fetch(`https://countryinfoapi.com/api/countries/name/${countryName}`)
    const country = await response.json()
    return (
        <div className="max-w-md mx-auto m-4">
             <div className="p-4 bg-white text-red-600 flex flex-col gap-4">
                <img src={country.flag} alt="" />
                <p className=" text-xl">Name: <span className="font-bold text-green-800">{country.name}</span></p>
                <p className=" text-xl">Capital: <span className="font-bold text-green-800">{country.capital}</span></p>
            </div>
        </div>
    )
} 