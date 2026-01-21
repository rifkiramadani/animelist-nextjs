export const getAnimeReponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await response.json();
    return anime;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeReponse(resource);
    //ambil mapping nested data entry nya saja
    return response.data.flatMap(item => item[objectProperty]);
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1);  // 0.5 * (200 - 5) //menghindari batas length data
    const last = first + gap;

    const response = {
        data: data.slice(first, last)
    }

    return response;
}