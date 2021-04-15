const hello = process.env.HELLO;

export function byPass(str: string): string {
    return str;
}

console.log(byPass(hello));