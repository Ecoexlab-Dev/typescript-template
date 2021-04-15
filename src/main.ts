const hello = process.env.HELLO;

function byPass(str: string): string {
    return str;
}

console.log(byPass(hello));