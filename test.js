import Loader from "./src/lib/loader.js";
import Base64 from "base-64";

import { verify } from "./src/lib/verify.js";


const signedToken =
  "eyJzaWduYXR1cmUiOiI4NDU4NDZhMjAxMjc2NzYxNjQ2NDcyNjU3MzczNTgzOTAwZDAwNmViNzc4M2U4YzkzMTYwYjJiYWIyODdiYzhhNmYwNjllOWU2OTBjZDgyYmMwYjUyYThjMzE3MzBkODA1YjZhMmNmNjc5OThmMGZjZDA3MGNlMGI2ZTg1OTU3ZmQ3NThjZjBhZTM0OGQyNjVlYmExNjY2ODYxNzM2ODY1NjRmNDU4NDA1NzY1NjIzMzJkNTQ2ZjZiNjU2ZTJkNTY2NTcyNzM2OTZmNmUzYTIwMzEwYTQ1Nzg3MDY5NzI2NTJkNDQ2MTc0NjUzYTIwNTc2NTY0MmMyMDMyMzMyMDQ2NjU2MjIwMzIzMDMyMzIyMDMwMzkzYTMzMzkzYTMzMzMyMDQ3NGQ1NDU4NDBhYWU2OWIxMDIzYTJhZGUzZGZjMzI2ZGMxMTJjNGNjM2Q4Zjc2Njc3NDU3YmQzZGZlNzc5MzA1OTljODY4NTc2ODNiYjFjYWI3OWU5YjIwZjVlZTJkMmVmYTI4ODNjNGVlZTFlNjFjNTc2OTZkY2M1ZTMyOWY0NmE3MWVlMjEwYiIsImtleSI6ImE0MDEwMTAzMjcyMDA2MjE1ODIwZGM2YzIxY2I5ZjVmOTZjN2I5OTMyMjM3Nzc4ZTA1M2RjMjczYTE0ODRlYzA1Nzc1OTQ2YTQzOTczOWNlYjBlYSIsImJvZHkiOiJXZWIzLVRva2VuLVZlcnNpb246IDFcbkV4cGlyZS1EYXRlOiBXZWQsIDIzIEZlYiAyMDIyIDA5OjM5OjMzIEdNVCJ9";

// const signedToken_changed =
//   "ewoJImRhdGEiOiAid2hvIGNhcmVzIiwKCSJzaWduYXR1cmUiOiAiODQ1ODY5YTMwMTI3MDQ1ODIwNmY5Mzg5ZTQ1MzRlMWY1MjM0NjMwYWE0YmE5ZDg2ZDU0NDJlZWI0MzZkNzA2Njg5MmYwNjhlYmU2MmJkMDZiZjY3NjE2NDY0NzI2NTczNzM1ODM5MDA4OTQwMDAyM2UyMmVjZWEyY2ExMjI4M2JjNGM2NWI3ODcyMzkwNWJlMzMwNmQxNzE2ZTAzOTFmZDZjN2JiZjkzYzIyMDBkYTExMjYzMzRmY2RkNDY5OWM2YTEyN2Y4ZWZjMzJjOTk5NDQwYWE1YTc1YTE2NjY4NjE3MzY4NjU2NGY0NTg0MDU3NjU2MjMzMmQ1NDZmNmI2NTZlMmQ1NjY1NzI3MzY5NmY2ZTNhMjAzMTBhNDU3ODcwNjk3MjY1MmQ0NDYxNzQ2NTNhMjA1Mzc1NmUyYzIwMzAzODIwNDQ2NTYzMjAzMjMwMzIzMTIwMzAzNTNhMzIzNDNhMzAzMzIwNDc0ZDU0NTg0MDgxYjA2MGVhMDUxZjM0YTJiNWU2MjZkMTM2ODAzNDA5YTcwMGQwY2Y0ODQyNTdkMTZjYzNmNjBhNmViZTQ2NGFhNzFlOGZkZjg5YmQwZTc5MDQ5MGE5NWIwNGE4ODNiMTA0ZjEwN2E3OTcyNzJhNzYwYzk0NzY5ZmE5OTUyODAwIgp9Cgo=";

(async () => {



  // console.log(data)

  try {
    console.log(await verify(signedToken));
  } catch (error) {
    console.log(error);
  }

  // try {
  //   console.log(await verify(signedToken_changed));
  // } catch (err) {
  //   console.log(err);
  // }
})();
