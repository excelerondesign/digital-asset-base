import { useSanityClient } from "astro-sanity";

export interface ColorData {
    colors: string[]
}

const [{
    name,
    address
 }] = await useSanityClient().fetch('*[_type == "company"]');
// let address = null;

const colorsData = await useSanityClient().fetch('*[_type == "palette"]');
const colors = Object.assign(
    //@ts-ignore
    ...(
        colorsData.map((item: ColorData) => item.colors)
    )
);

export const data = {
    name,
    colors,
    address
}