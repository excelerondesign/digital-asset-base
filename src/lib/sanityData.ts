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

const assetData = await useSanityClient().fetch(`*[_type == "assets"]{
    logos,
    stock,
    other
}`)
console.log(assetData);
const assets = assetData.map(assetObject => {
    const categories = Object.keys(assetObject).filter(name => name.indexOf('_') !== 0);

    const data = [];
    for(const c of categories) {
        console.log(JSON.stringify(assetObject[c]));
        data.push({
            name: c,
            files: assetObject[c]
        });
    }

    console.log(data);
    return [];
})

export const data = {
    name,
    colors,
    address,
    assets
}