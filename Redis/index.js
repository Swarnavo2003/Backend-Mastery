import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config({ quiet: true });

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

async function main() {
  // 1. List

  //*. LPUSH
  // await redis.lpush("myList:1", "a", "b", "c");

  //*. RPUSH
  // await redis.rpush("myList:1", "a", "b", "c");

  //*. LPOP
  // const lpopResult = await redis.lpop("myList:1");
  // console.log("LPOP Result:", lpopResult);

  //*. RPOP
  // const rpopResult = await redis.rpop("myList:1");
  // console.log("RPOP Result:", rpopResult);

  //*. LLEN
  // const length = await redis.llen("myList:1");
  // console.log("Length of myList:1:", length);

  //*. LRANGE
  // const range = await redis.lrange("myList:1", 0, -1);
  // console.log("Elements in myList:1:", range);

  // 2. Set
  //*. SADD
  // const added = await redis.sadd("myset:1", "a", "b", "c", "a");
  // console.log("Number of elements added to myset:1:", added);

  // *. SMEMBERS
  // const members = await redis.smembers("myset:1");
  // console.log("Members of myset:1:", members);

  // *. SREM
  // const removed = await redis.srem("myset:1", "b", "x");
  // console.log("Number of elements removed from myset:1:", removed);

  // 3. Hashmap
  await redis.hset(
    "user:1000",
    "name",
    "Alice",
    "age",
    "30",
    "city",
    "New York"
  );
}
main();
