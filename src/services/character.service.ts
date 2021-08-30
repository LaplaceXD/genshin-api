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

function parseCharacterStats() {
    const statsDataNode = document.querySelector("div.skilldmgwrapper");

    const statsHeaders = Array.from(
        statsDataNode!.querySelector("tr:first-child")!.querySelectorAll("td")
    ).map((cell) => cell.textContent);
    const statsData = Array.from(statsDataNode!.querySelectorAll("tr:not(:first-child)")).map((row) =>
        Array.from(row.querySelectorAll("td"))
            .map((cell, i) => [statsHeaders[i], cell.textContent])
            .filter((cell) => cell[0] !== statsHeaders[statsHeaders.length - 1])
    );

    return statsData.map((stats) => Object.fromEntries(stats));
}

function parseCharacterBio() {
    const bioDataNode = document.querySelector("table.item_main_table");

    // TODO: fix values of Element and Rarity
    const bio = Array.from(bioDataNode!.querySelectorAll("tr"))
        .map((row) => Array.from(row.querySelectorAll("td")).map((data) => data.textContent))
        .filter((data) => data[0] !== "");

    return Object.fromEntries(bio);
}

function parseCharacterPassives() {
    const passivesNode = document.querySelector("#scroll_passive_talent ~ .item_main_table");
    const passiveDescs = Array.from(passivesNode!.querySelectorAll("div.skill_desc_layout")).map(
        (data) => data.textContent
    );

    return Array.from(passivesNode!.querySelectorAll("tr:nth-child(odd)")).map((row, i) => ({
        name: row.querySelector("a")!.textContent,
        description: passiveDescs[i],
        imgPath: row.querySelector("img.itempic")!.getAttribute("src"),
    }));
}

// TODO: Add constellations, talents,

export interface ParseCharacter {
    bio: () => any;
    stats: () => any;
    passives: () => any;
}

export const parseCharacter: ParseCharacter = {
    bio: parseCharacterBio,
    stats: parseCharacterStats,
    passives: parseCharacterPassives,
};
