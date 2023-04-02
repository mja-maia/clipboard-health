const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  test('returns "0" when given no input', () => {
    expect(deterministicPartitionKey()).toBe("0");
  });

  test("returns the same partition key when given one", () => {
    const event = { partitionKey: "myPartitionKey" };
    expect(deterministicPartitionKey(event)).toBe("myPartitionKey");
  });

  test("generates a hash when given an event without a partition key", () => {
    const event = { foo: "bar" };
    expect(deterministicPartitionKey(event)).not.toBe("0");
  });

  test("returns a string of length <= 256 characters", () => {
    const event = { foo: "a".repeat(1000) };
    expect(deterministicPartitionKey(event).length).toBeLessThanOrEqual(256);
  });
});
