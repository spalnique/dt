import dotenv from 'dotenv';

dotenv.config();

export default function (name: string, defaultValue?: string | number): string {
  const value = process.env[name];

  if (value) return value;

  if (defaultValue) return String(defaultValue);

  throw new Error(`Missing: process.env['${name}'].`);
}
