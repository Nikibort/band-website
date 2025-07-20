import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { song, email } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Driftwood Band <onboarding@resend.dev>',
      to: ['nbortnichek@gmail.com'],
      subject: 'New Song Suggestion for Driftwood',
      html: `
        <h2>New Song Suggestion</h2>
        <p><strong>Song:</strong> ${song}</p>
        <p>This song was suggested by a visitor to your website.</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return Response.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return Response.json({ success: true, message: 'Song suggestion sent!' });
  } catch (error) {
    console.error('Error submitting song suggestion:', error);
    return Response.json({ success: false, message: 'Failed to submit song suggestion' }, { status: 500 });
  }
} 