export default (...args) => {
    console.log(...args);
    return new Response('Hello World');
}

export const config = {
    path: "/test"
}