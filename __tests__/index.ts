import test from "ava";

const fn = async () => Promise.resolve("foo");
const fn2 = async () => Promise.resolve("bar");

const numberFunc = () => 20;

test("new test", async (t) => {
    t.is(await fn(), "foo");
});

test("second test", async (t) => {
    t.is(await fn2(), "bar");
});

test("a function returns 20", async (t) => {
    t.is(await numberFunc(), 20);
});

test("this function will fail", async (t) => {
    t.is(await numberFunc(), 10);
});
