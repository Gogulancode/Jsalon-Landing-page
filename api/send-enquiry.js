const emailjs = require('@emailjs/nodejs');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, city, budget, experience } = req.body;

  if (!name || !phone || !email || !city || !budget) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { name, phone, email, city, budget, experience },
      { privateKey: process.env.EMAILJS_PRIVATE_KEY }
    );
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('EmailJS error:', error);
    return res.status(500).json({ error: 'Failed to send enquiry' });
  }
};
