export default async function (context, command) {


  try {
    // We start by navigating to the login page.
    await command.measure.start('HomePage');
    await command.navigate('https://www.fust.ch/');
    await command.measure.stop();

    await command.measure.start('Search Action');
    await command.addText.byId('gaming', 'searchtext');
    await command.measure.stop();

    // Find the search button and click it and then wait
    // for the pageCompleteCheck to finish
    await command.measure.start('SearchSubmit');
    await command.navigate('https://www.fust.ch/de/search.html?searchtext=gaming')
    await command.measure.stop();

    await command.measure.start('ChooseElementDetail');
    await command.click.bySelectorAndWait('.product:nth-child(2) > .my-5 > .js-tealium-event-product-click');
    await command.measure.stop();

    await command.measure.start('AddToCart');
    await command.click.byIdAndWait('addbasket');
    await command.measure.stop();

    // await command.measure.start('Remove product added to the basket popup');
    // await command.click.byJsAndWait('document.getElementsByClassName("fancybox-item fancybox-close")[0]');
    // await command.measure.stop();

    await command.measure.start('checkCart');
    await command.click.byJsAndWait('document.getElementsByClassName("basketlink basket")[0]');
    await command.measure.stop();

    await command.measure.start('removeElementFromCart');
    await command.click.byJsAndWait('document.getElementsByClassName("btn btn--secondary btn--square ml-2@until-large ml-3@large fill-primary fill-primary-light-hover text-xxsmall m-0 delete")[0]');
    await command.measure.stop();
  } catch (e) {

    throw e;
  }
};
