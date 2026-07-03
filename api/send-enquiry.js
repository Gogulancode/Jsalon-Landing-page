const EMAILJS_API = 'https://api.emailjs.com/api/v1.0/email/send';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, city, budget, experience } = req.body;

  if (!name || !phone || !email || !city || !budget) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch(EMAILJS_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: { name, phone, email, city, budget, experience },
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    }

    const errorText = await response.text();
    console.error('EmailJS error:', errorText);
    return res.status(500).json({ error: 'Failed to send enquiry' });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Failed to send enquiry' });
  }
};
