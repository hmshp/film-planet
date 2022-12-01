import * as db from "../database/database.js";

export async function createUser(userInfo) {
  const user = await db.createUser(userInfo);
  return user;
}

// username에 맞는 user 정보 리턴
export async function findByUsername(username) {
  const user = await db.findByUsername(username);
  return user;
}

// 토큰이 유효하다면(=유효한 사용자라면) token, username 리턴.
export async function findById(userId) {
  // const users = await db.getUserCollection();
  console.log("findById test 중");
}
