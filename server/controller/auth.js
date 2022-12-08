import {} from "express-async-errors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as userRepository from "../model/auth.js";
import { config } from "../config.js";

const bcryptSaltRounds = config.bcrypt.saltRounds;
const jwtSecretKey = config.jwt.secretKey;
const expiresInSec = config.jwt.expiresInSec;

export async function checkUsernameAvailibility(req, res, next) {
  const found = await userRepository.findByUsername(req.body.username);
  const availibility = found ? false : true;
  res.status(200).json(availibility);
}

export async function signup(req, res) {
  const { username, password, name, email } = req.body;

  // 기존에 있는 username인지 확인하기!
  const found = await userRepository.findByUsername(username);
  console.log(found);
  if (found) {
    return res
      .status(409)
      .json({ message: `${username}: 다른 사용자가 이미 사용 중입니다.` });
  }

  const hashed = await bcrypt.hash(password, bcryptSaltRounds);
  const user = await userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
  });

  res.status(201).json(user);
}

export async function login(req, res) {
  console.log("controller/login");
  const { username, password } = req.body;
  // 존재하는 아이디인지 확인하기 (존재하지 않으면 에러코드 보내기)
  const user = await userRepository.findByUsername(username);

  if (!user) {
    return res.status(401).json("아이디 또는 비밀번호가 유효하지 않습니다.");
  }
  // 비밀번호 일치하는지 확인하기 (일치하지 않으면 에러코드 보내기)

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json("아이디 또는 비밀번호가 유효하지 않습니다.");
  }

  const mappedUser = mapUser(user);

  const token = createJwtToken(mappedUser.id);
  console.log(`token: ${token}`);

  res.status(200).json({ token, username });
}

export async function me(req, res) {
  console.log(req.body);
  const user = await userRepository.findById(req.body.userId);
  // isAuth에서 유효한 사용자인지 체크하긴 하지만 여기서 한 번 더 해 줬다
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ username: user.username });
}

function createJwtToken(id) {
  console.log(expiresInSec);
  console.log(typeof expiresInSec);
  const token = jwt.sign({ id }, jwtSecretKey, { expiresIn: expiresInSec });
  return token;
}

// 앱에서는 '_id' 가 아니가 'id' 형태로 사용하므로 변환하는 게 좋은 듯
function mapUser(user) {
  return { ...user, id: user._id };
}
