import dotenv from "dotenv";
dotenv.config();

// 아래 config에서 오타 방지하기 위해 required 함수 만들었음
function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

export const config = {
  jwt: {
    secretKey: required('JWT_SECRET'),
    expiresInSec: required('JWT_EXPIRES_SEC', 172800),
  },
  bcrypt: {
    saltRounds: parseInt(required('BCRYPT_SALT_ROUNDS', 12)),
  },
  host: {
    port: required('HOST_PORT', 8080)
  },
  db: {
    host: required('DB_HOST')
  }
}; 
