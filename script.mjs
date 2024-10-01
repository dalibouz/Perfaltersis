export default async function (context, commands) {
//await commands.measure.start('http://front-end-autoinstrument-smetest.apps.aps.lab/index.html');
//await commands.navigate('http://front-end-autoinstrument-smetest.apps.aps.lab/index.html');

//await commands.wait.byCssSelector('#login', 30000);
//await commands.click.byIdAndWait('login');

//await commands.addText.byId('dali', 'username');
//await commands.addText.byId('dali', 'password');

//await commands.js.run(`document.querySelector('.text-center:nth-child(3) > .btn').click();`);
//await commands.click.byClassName('gf-timepicker-nav-btn');

await commands.measure.start('http://front-end-autoinstrument-smetest.apps.aps.lab/index.html');
await commands.measure.start('http://front-end-autoinstrument-smetest.apps.aps.lab/category.html');
await commands.measure.start('http://front-end-autoinstrument-smetest.apps.aps.lab/detail.html?id=03fef6ac-1896-4ce8-bd69-b798f85c6e0b');


return commands.measure.start('http://front-end-autoinstrument-smetest.apps.aps.lab/basket.html');
};
