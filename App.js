const puppeteer = require('puppeteer');
const fetch = require('node-fetch');

(async () =>{
    const browser= await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://USERNAME:PASWORD@portal.giu-uni.de/GIUb/EXTStudent/CheckGrade_m.aspx");
    await page.waitForSelector('#ContentPlaceHolder1_lnk_Exams');
    await page.click('#ContentPlaceHolder1_lnk_Exams');
    await page.waitForSelector('#ContentPlaceHolder1_countLbl');
    let oldValue = await page.$eval('#ContentPlaceHolder1_countLbl', el => el.textContent);

        while(true)
        {
            let newValue = await page.$eval('#ContentPlaceHolder1_countLbl', el => el.textContent);
            if(newValue > oldValue)
            {
                const iftttUrl = `https://maker.ifttt.com/trigger/{Event name}/json/with/key/{Key}`;
                await fetch(iftttUrl, { method: 'POST' });
                console.log('Notification sent. Grades increased.');
                oldValue=newValue;
            }
            await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
        }
    // await browser.close();
})();