function greet(name) {
    console.log(`hello ${name}`);
}

function greetMan(greetFn) {
    const name = 'nam';

    greetFn(name);
}

greetMan(greet);