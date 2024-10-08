export default async function (context, command) {


  try {
    // We start by navigating to the Home page.
    await command.measure.start('HomePage');
    await command.navigate('http://front-end-autoinstrument-smetest.apps.aps.lab');
    await command.measure.stop();

    await command.measure.start('Category page');
    await command.click.byXpathAndWait('//*[@id="tabCatalogue"]/ul/li/div/div/div[3]/ul/li[1]/a');
    await command.measure.stop();

    await command.measure.start('View detail');
    await command.click.byXpathAndWait('//*[@id="products"]/div[1]/div/div[2]/p[2]/a[1]');
    await command.measure.stop();

    await command.measure.start('Add to cart');
    await command.click.byXpathAndWait('//*[@id="buttonCart"]');
    await command.measure.stop();

    await command.measure.start('View basket');
    await command.click.byXpathAndWait('//*[@id="basket-overview"]/a');
    await command.measure.stop();

  } catch (e) {

    throw e;
  }
};
