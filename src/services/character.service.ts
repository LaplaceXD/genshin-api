export function parseCharactersPageData() {
    return Array.from(document.querySelectorAll("div.char_sea_cont")).map((node) => ({
        name: node.querySelector("span.sea_charname")!.textContent,
        imgPath: "/img/char/${character}_135.png",
        rarity: node.querySelectorAll("div.sea_char_stars_wrap")!.length,
        element: {
            imgPath: "/img/icons/element/${elemType}_35.png",
            type: node
                .querySelector("img.char_portrait_card_sea_element")!
                .getAttribute("src")!
                .split(/[\/\_]/)[4],
        },
        weapon: {
            imgPath: "/img/icons/weapon_type/${wepType}_70.png",
            type: node
                .querySelector("img.sea_weptype_element")!
                .getAttribute("src")!
                .split(/[\/\_]/)[5],
        },
    }));
}
