import {Page} from '@playwright/test'; 

class DeconnexionElementsPage {
    
    finishButton(page: Page){
        return page.locator('a.btn_action.cart_button')
    }

    thanks(page: Page){
        return page.locator('h2.complete-header')
    }


}
export default DeconnexionElementsPage;