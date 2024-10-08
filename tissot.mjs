export default async function (context, command) {


    try {
        // We start by navigating to the login page.
        await command.measure.start('HomePage');
        await command.navigate('https://www.tissotwatches.com');
        await command.click.byXpathAndWait('//*[@id="onetrust-accept-btn-handler"]'); //removing the accept cookies popup
        await command.measure.stop();




        await command.measure.start('Search Action');
        await command.click.byXpathAndWait('//div[@id="menus-container"]/div/ul/li/button/span'); //removing the accept cookies popup
        await command.addText.byXpath('classic', '//input[@name="q"]');
        await command.measure.stop();

        
        await command.measure.start('SearchSubmit');
        await command.navigate('https://www.tissotwatches.com/en-en/catalogsearch/result/?q=classic');
        await command.measure.stop();

        // //choose product
        await command.measure.start('ChooseElementDetail');
        await command.click.byXpathAndWait('//img[@alt="Tissot Classic Dream"]');
        await command.measure.stop();


        //click on buy online
        await command.measure.start('ClickOnBuyOnline');
        await command.click.byXpathAndWait('//a[@id="buy-online-btn"]');
        await command.measure.stop();

        //click on location ( the process is a little different here )
        await command.measure.start('ChooseLocation');
        await command.click.byXpathAndWait('//div[@id="buy-online-pop-content"]/div/div/div/ul/li[10]/a/span[2]');
        await command.measure.stop();

        //the add to cart command takes directly to the basket in this website
        await command.measure.start('AddToCart');
        await command.click.byXpathAndWait("//button[@id='product-addtocart-button']");
        await command.measure.stop();


        await command.measure.start('removeElementFromCart');
        await command.click.byXpathAndWait('//*[@id="shopping-cart"]/div/div[1]/div[2]/div[1]/a');
        await command.measure.stop();
    } catch (e) {

        throw e;
    }
};

