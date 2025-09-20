import Redis from "ioredis";

const redis = new Redis({
  host: "localhost",
  port: 6379,
});

redis.on("connect", () => {
  console.log("Redis Connected");
});

export default redis;
