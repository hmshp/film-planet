import * as db from "../database/database.js";

export async function createUser(userInfo) {
  const user = await db.createUser(userInfo);
  return user;
}

// username에 맞는 user 정보 리턴
export async function findByUsername(username) {
  const users = await db.getUserCollection();
  const user = users.findOne({ username }).then((data) => {
    return data;
  });
  return user;
}
