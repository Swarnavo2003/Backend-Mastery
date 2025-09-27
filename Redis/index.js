import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config({ quiet: true });

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

redis.subscribe("user-notification", "system-alerts");
redis.on("message", (channel, message) => {
  console.log(`Message received on channel ${channel}: ${message}`);
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
  // await redis.hset(
  //   "user:1000",
  //   "name",
  //   "Alice",
  //   "age",
  //   "30",
  //   "city",
  //   "New York"
  // );

  //* Streams
  // const entryId = await redis.xadd(
  //   "user-events",
  //   "*",
  //   "userId",
  //   "123",
  //   "action",
  //   "purchased",
  //   "productId",
  //   "123",
  //   "product",
  //   "laptop",
  //   "amount",
  //   "999.99"
  // );
  // console.log("Entry ID:", entryId);

  const entries = await redis.xread("STREAMS", "user-events", "0");
  // console.log("Entries:", JSON.stringify(entries));

  // entries[0][1].forEach(([id, fields]) => {
  //   const data = {};
  //   for (let i = 0; i < fields.length; i += 2) {
  //     data[fields[i]] = fields[i + 1];
  //   }
  //   console.log(`Entry ${id}:`, data);
  // });

  // const recentEntries = await redis.xrevrange(
  //   "user-events",
  //   "+",
  //   "-",
  //   "COUNT",
  //   "10"
  // );
  // console.log("Recent Entries:", JSON.stringify(recentEntries));

  // const rangeEntries = await redis.xrange(
  //   "user-events",
  //   "1758952796953-0",
  //   "1758952787458-0"
  // );
  // console.log("Range Entries:", JSON.stringify(rangeEntries));

  // await redis.geoadd("users", -74.006, 40.7129, "user:123");
}
main();
