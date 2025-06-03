export default async function handler(req, res) {
  const response = await fetch('https://railway.com/project/ad061b3a-7c80-476e-bead-a657c1ed4789?environmentId=06cd2965-6a62-406b-9ece-5322c76a9a41');
  const text = await response.text();
  res.status(200).send(text);
}
