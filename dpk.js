const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

function hash(data) {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

function stringify(data) {
  if (typeof data !== "string") {
    return JSON.stringify(data);
  }
  return data;
}

exports.deterministicPartitionKey = (event) => {
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  const candidate = event.partitionKey
    ? event.partitionKey
    : hash(stringify(event) || TRIVIAL_PARTITION_KEY);

  return candidate.slice(0, MAX_PARTITION_KEY_LENGTH);
};
