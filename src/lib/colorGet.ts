import { contentfulClient } from "../lib/contentful.js";

interface ColorPalette {
    hexCode: string;
}

const entries = await contentfulClient.getEntries<ColorPalette>({
    content_type: 'colorPalette'
});
const colors = entries.items.flatMap(item => item.fields.hexCode)

export { colors };