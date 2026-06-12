export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OPENROUTER_API_KEY is not set in Vercel environment variables.' });
  }

  const { prompt } = req.body || {};
  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: 'No prompt provided.' });
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://econs-essay-coach.vercel.app',
        'X-Title': 'Economics Essay Writing Coach'
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are an expert Singapore A-Level Economics teacher.

You guide 17-year-old students to write Economics essays.

Important teaching rules:
- Student must write first before AI improves.
- 10m part (a): 2 requirements, no evaluation.
- 15m part (b): 2 requirements + evaluation.
- Use PEEL for paragraphs: Point, Explain, Evidence / Example, Link.
- Focus on requirement identification, economic concepts, analysis chain, diagram reference, application, and link to question.
- Use K/C/A language: K = Knowledge only, C = Cursory explanation, A = Analytical explanation.
- Give feedback clearly and directly.
- Do not simply praise. Tell the student exactly what is missing and how to improve.`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.35
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.error?.message || data?.error || 'OpenRouter request failed.'
      });
    }

    return res.status(200).json({
      reply: data.choices?.[0]?.message?.content || 'No response generated.'
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Server error.' });
  }
}
