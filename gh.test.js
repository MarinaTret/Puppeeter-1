let page;

beforeEach(async () => {
  page = await browser.newPage();
  //await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 5000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 5000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 5000);
});

describe("3 tests", () => {

  test("Header of Codespaces", async () => {
    await page.goto("https://github.com/features/codespaces");
    const title = await page.title();
    expect(title).toContain("GitHub Codespaces · GitHub");
  }, 3000);

  test("Header of Marketplace", async () => {
    await page.goto("https://github.com/marketplace");
    const actual = await page.title();
    expect(actual).toContain("Marketplace · Tools to improve your workflow · GitHub");
  }, 3000);
  
  test("Header of actions", async () => {
    await page.goto("https://github.com/features/actions");
    const actual = await  page.title();
    expect(actual).toEqual("Features • GitHub Actions · GitHub");
  }, 3000);
});