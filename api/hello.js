export default async function handler(req, res) {
  const response = await fetch('https://railway.com/project/cd75dc8c-c711-4974-9469-b9ee019ed2ea?environmentId=6487b3a4-1f3e-4b62-a6bb-433772900712');
  const text = await response.text();
  res.status(200).send(text);
}