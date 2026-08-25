import { chromium } from 'playwright';
const browser = await chromium.launch();
for (const vp of [{width:390,height:844,name:'iPhone13'},{width:1440,height:900,name:'Desktop'}]) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  const markFS = await page.locator('header > div span').first().evaluate(el => getComputedStyle(el).fontSize);
  const h1FS = await page.locator('header h1').first().evaluate(el => getComputedStyle(el).fontSize);
  console.log(`${vp.name}: mark font-size=${markFS} vs h1 font-size=${h1FS}`);
  await page.screenshot({ path: `/private/tmp/claude-502/-Users-enes-well-source-enes-rnd-digital-portfolio/b763497b-4e24-47ba-a764-36297f929cb9/scratchpad/size-${vp.name}.png` });
  await page.close();
}
await browser.close();
