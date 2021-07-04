const text = [
    `I'm baby pabst banh mi gentrify cold-pressed migas kale chips, street art disrupt man bun snackwave air plant raclette offal jean shorts cronut. Cliche tumblr woke af cred mlkshk organic coloring book tousled kickstarter you probably haven't heard of them tilde activated charcoal. Tattooed synth copper mug asymmetrical iceland, cliche thundercats fixie disrupt hella letterpress pabst. Normcore pabst chia, organic affogato polaroid aesthetic keytar distillery blog ugh gochujang. Chia fam cardigan, bushwick flexitarian raw denim typewriter 3 wolf moon mixtape disrupt.`,
    `Kogi raw denim live-edge hella hashtag, distillery blue bottle tumblr single-origin coffee cloud bread kitsch vegan. Mustache 8-bit semiotics green juice, franzen chicharrones hell of subway tile distillery polaroid activated charcoal. Vice bicycle rights deep v irony freegan raw denim. Banh mi selfies wayfarers artisan typewriter neutra aesthetic kogi echo park. Shabby chic lyft 8-bit mlkshk williamsburg iPhone, flannel tumblr meggings. Tumblr distillery pug green juice, migas taiyaki stumptown tattooed man bun waistcoat brunch trust fund thundercats cornhole.`,
    `Heirloom austin cred ennui kickstarter, distillery actually salvia. Quinoa literally brunch swag XOXO everyday carry jean shorts pickled cornhole kombucha sriracha. Everyday carry pok pok banjo quinoa sriracha kogi lomo neutra af synth tbh crucifix. Kogi fingerstache glossier ramps plaid everyday carry gentrify master cleanse.`,
    `Live-edge stumptown ramps brunch lumbersexual plaid +1, knausgaard hashtag authentic leggings drinking vinegar pug vexillologist. Stumptown four dollar toast mixtape semiotics, XOXO tumeric hella. Fingerstache cray palo santo marfa williamsburg. Tattooed meh butcher 8-bit microdosing. Chillwave blue bottle kogi 3 wolf moon, cray plaid fanny pack. Activated charcoal shaman bicycle rights hot chicken direct trade cronut four dollar toast hammock ethical everyday carry narwhal. Cred semiotics hammock paleo stumptown, tote bag blog enamel pin beard.`,
    `Cold-pressed lomo four dollar toast bitters before they sold out drinking vinegar. Sustainable vaporware brooklyn brunch direct trade, tacos wayfarers ennui tbh neutra sriracha truffaut. Yr bicycle rights wayfarers, paleo truffaut prism listicle kale chips whatever readymade sriracha bushwick +1 tacos activated charcoal. Pop-up art party biodiesel vaporware offal narwhal. Affogato asymmetrical godard blog occupy sriracha iPhone subway tile.`,
    `Jean shorts bespoke venmo, church-key green juice migas fingerstache. Offal la croix next level letterpress. Paleo austin kogi, dreamcatcher fingerstache godard seitan sustainable. Locavore chia stumptown whatever tbh quinoa knausgaard DIY pok pok fam keytar. Vaporware gentrify aesthetic readymade try-hard, kinfolk bushwick lomo blog letterpress woke. Fixie tattooed retro, poutine kickstarter before they sold out kinfolk migas lomo lumbersexual chicharrones photo booth marfa. Copper mug prism plaid, try-hard crucifix man braid pok pok neutra venmo offal single-origin coffee shaman austin tilde.`,
    `Godard thundercats chicharrones gluten-free slow-carb vape 3 wolf moon banjo tattooed ramps austin leggings hell of. Intelligentsia jean shorts synth cray, coloring book post-ironic vape man braid marfa salvia vegan. Trust fund cliche pug, subway tile chia humblebrag shabby chic pickled gastropub lo-fi butcher chartreuse craft beer green juice. Vinyl iPhone sriracha godard succulents sartorial stumptown unicorn shoreditch raw denim. Microdosing intelligentsia lyft synth knausgaard chia cold-pressed health goth. Brunch butcher salvia snackwave, health goth shabby chic umami viral literally fixie. Pickled godard occupy edison bulb semiotics, flexitarian trust fund meh kogi biodiesel waistcoat fingerstache green juice raw denim.`,
    `Church-key squid artisan selfies, raw denim organic sartorial pabst man bun hoodie intelligentsia butcher lomo jean shorts. Hella disrupt fixie humblebrag viral, adaptogen man bun lo-fi vegan. Roof party leggings PBR&B, lo-fi green juice literally authentic bushwick chicharrones knausgaard. Fanny pack viral 8-bit, wolf before they sold out flannel green juice hammock. Small batch etsy tilde ramps, yuccie cred quinoa copper mug typewriter. La croix organic tousled flexitarian pour-over knausgaard glossier vaporware art party paleo selvage. Brooklyn salvia ennui fanny pack.`,
    `Celiac gochujang wayfarers mixtape chartreuse glossier blog meditation dreamcatcher organic. Yr whatever distillery freegan chartreuse live-edge, enamel pin coloring book direct trade knausgaard blog. Vice sriracha pitchfork taiyaki, leggings wayfarers cliche skateboard gastropub humblebrag activated charcoal. PBR&B actually hashtag lumbersexual pork belly tumeric. Fam butcher taiyaki tote bag, venmo cred shoreditch coloring book vaporware twee gochujang.`,
];

// Binding DOM elements
const btnCopy = document.getElementById('btn-copy');
const input = document.getElementById('input');
const templateContainer = document.getElementById('template-container');
const btnCloseModal = document.getElementById('close-modal')
const btnGenerate = document.getElementById('btn-generate')

// Helper functions
const getRandomIndex = () => Math.floor(Math.random() * text.length);
const clearInput = () => (input.value = '');
const toggleModal = () => document.getElementById('modal').classList.toggle('hidden');

const createTextElement = text => {
    return `<p class='mb-4 max-w-2xl mx-auto'>${text}</p>`;
};

const render = tempText => {
    if (tempText) {
        templateContainer.innerHTML = tempText;
    } else {
        templateContainer.innerHTML = createTextElement(text[getRandomIndex()]);
    }
};

// Launch APP
document.addEventListener('DOMContentLoaded', () => {
    render();
});

// Listeners 
input.addEventListener('focus', clearInput);

btnCloseModal.addEventListener('click', toggleModal);

btnGenerate.addEventListener('click', () => {
    const value = parseInt(input.value);
    if (isNaN(value) || value > 9 || value < 0) {
        clearInput();
        toggleModal();
    } else if (value === 1) {
        render();
    } else {
        let tempText = text
            .slice(0, value)
            .map(item => createTextElement(item))
            .join('');
        render(tempText);
    }
});

btnCopy.addEventListener('click', () => {
    navigator.clipboard
        .writeText(templateContainer.outerText)
        .then(copiedText => copiedText);
    btnCopy.innerText = 'Copied !';
    setTimeout(() => (btnCopy.innerText = 'Copy'), 900);
});
