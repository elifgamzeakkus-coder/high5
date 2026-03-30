module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ choices: [{ message: { content: "INTRO: Merhaba!\nJSON:\n{\"shoes\":[],\"expertNote\":\"Test\"}" } }] });
};
