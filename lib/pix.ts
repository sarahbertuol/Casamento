function field(id: string, value: string): string {
  return `${id}${String(value.length).padStart(2, "0")}${value}`;
}

function crc16(str: string): number {
  let crc = 0xffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc;
}

export function generatePixCode(
  key: string,
  amount: number,
  merchantName: string,
  merchantCity: string
): string {
  const merchantAccountInfo =
    field("00", "br.gov.bcb.pix") + field("01", key);
  const additionalData = field("05", "***");

  const payload =
    field("00", "01") +
    field("01", "11") +
    field("26", merchantAccountInfo) +
    field("52", "0000") +
    field("53", "986") +
    field("54", amount.toFixed(2)) +
    field("58", "BR") +
    field("59", merchantName.slice(0, 25)) +
    field("60", merchantCity.slice(0, 15)) +
    field("62", additionalData) +
    "6304";

  return payload + crc16(payload).toString(16).toUpperCase().padStart(4, "0");
}
