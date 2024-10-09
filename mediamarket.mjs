export default async function (context, command) {


    try {
        // We start by navigating to the login page.
        await command.measure.start('HomePage');
        await command.navigate('https://www.mediamarkt.ch/fr/');
        await command.measure.stop();

        await command.measure.start('02_Go_To_Ordinateurs-Logiciels');
        await command.click.byXpathAndWait('//*[@id="main-content"]/section/section[1]/div/div/div/div[2]/a');
        await command.measure.stop();

        // //choose product
        await command.measure.start('03_Go_To_Ordinateurs-Portable');
        await command.click.byXpathAndWait('//*[@id="main-content"]/div[1]/div/div[2]/div/section/section[2]/div/section/div[2]/div/div/div[2]/a');
        await command.measure.stop();


        //click on buy online
        //await command.measure.start('04_ClickOnLENOVO');
        //await command.click.byXpathAndWait('//*[@id="main-content"]/div[1]/div/div[2]/div/div[3]/div[1]/div/div/div/a');
        //await command.measure.stop();

        //click on location ( the process is a little different here )
        //await command.measure.start('05_ADD_TO_BASKET');
        //await command.click.byXpathAndWait('//*[@id="pdp-add-to-cart-button"]');
        //await command.measure.stop();

        
        //await command.measure.start('06_REFUSE_OFFERS');
        //await command.click.byXpathAndWait('//*[@id="mms-app-root"]/div[4]/div[2]/div[3]/div[2]/button[1]');
        //await command.measure.stop();



        //the add to cart command takes directly to the basket in this website
        //await command.measure.start('07_GO_TO_BASKET');
        //await command.click.byXpathAndWait('//*[@id="mms-app-root"]/div[4]/div[2]/div[3]/div[2]/button[2]');
        //await command.measure.stop();


        //await command.measure.start('08_REMOVE_FROM_BASKET');
        //await command.click.byXpathAndWait('//*[@id="main-content"]/div[2]/div[1]/div/div/div/div[1]/div[5]/div/div[1]/div/div/div/div[2]/div/button');
        //await command.measure.stop();
    } catch (e) {

        throw e;
    }
};


