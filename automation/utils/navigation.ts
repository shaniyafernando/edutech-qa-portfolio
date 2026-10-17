import { Page, expect } from '@playwright/test';

export default class Navigation {
  
    constructor(private page: Page) {}

    async navItemLocator(pageName:string){
        switch(pageName){
            case "Home":
                return await this.page.getByRole("link", { name: "Home" });
                
            case "Settings":
                return await this.page.getByRole("link", { name: "Settings" });
                
            case "Profile":
                return await this.page.getByRole("listitem").nth(3);

            case "New Article":
                return await this.page.getByRole("link", { name: "New Article" });   

            case "Sign in":
                return await this.page.getByRole("link", { name: "Sign in" });
                
            case "Sign up":
                return await this.page.getByRole("link", { name: "Sign up" });

            default:
                throw new Error(`Unknown page name: ${pageName}`);
                        
        }
    }
    async navItemIsVisible(pageName: string){
        const navItem = await this.navItemLocator(pageName);
        await expect(navItem).toBeVisible();
    }

    async to(pageName: string){
        const navItem = await this.navItemLocator(pageName);
        await navItem.click();
    }
}