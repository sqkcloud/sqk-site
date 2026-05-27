import { promises as fs } from 'fs';
import path from 'path';

export const runtime = 'nodejs';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
  phone?: string;
  message?: string;
  locale?: string;
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const company = body.company?.trim() ?? '';
    const interest = body.interest?.trim() ?? '';
    const phone = body.phone?.trim() ?? '';
    const message = body.message?.trim() ?? '';
    const locale = body.locale?.trim() ?? 'en';

    if (!name || !email || !company || !interest || !message) {
      return Response.json({ ok: false, error: 'All fields are required.' }, { status: 400 });
    }

    if (!validateEmail(email)) {
      return Response.json({ ok: false, error: 'A valid email address is required.' }, { status: 400 });
    }

    const submission = {
      submittedAt: new Date().toISOString(),
      name,
      email,
      company,
      interest,
      phone,
      message,
      locale,
      source: 'sqk_photonic_site_v4',
    };

    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'contact-submissions.ndjson');
    await fs.mkdir(dataDir, { recursive: true });
    await fs.appendFile(filePath, `${JSON.stringify(submission)}\n`, 'utf8');

    return Response.json({ ok: true, message: 'Inquiry received successfully.' });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return Response.json({ ok: false, error: 'Failed to process inquiry.' }, { status: 500 });
  }
}
