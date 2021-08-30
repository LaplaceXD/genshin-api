import puppeteer, { EvaluateFn } from "puppeteer";

export async function scraper(url: string, cb: EvaluateFn<any>): Promise<any> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const scrapedData = await page.evaluate(cb);

    await browser.close();
    return scrapedData;
}
