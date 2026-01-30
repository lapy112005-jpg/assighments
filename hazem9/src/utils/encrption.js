import crypto from "crypto";

const algorithm = "aes-256-cbc";
const secretKey = Buffer.from(process.env.PHONE_SECRET); // 32 char
const ivLength = 16;

export const encryptPhone = (phone) => {
  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  let encrypted = cipher.update(phone, "utf8", "hex");
  encrypted += cipher.final("hex");

  return iv.toString("hex") + ":" + encrypted;
};

export const decryptPhone = (encryptedPhone) => {
  const [ivHex, content] = encryptedPhone.split(":");

  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(ivHex, "hex")
  );

  let decrypted = decipher.update(content, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};
