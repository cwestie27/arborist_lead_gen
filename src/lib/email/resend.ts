import { Resend } from "resend";

// Lazy-initialize Resend client (only when needed)
let resendClient: Resend | null = null;

function getResendClient(): Resend | null {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

export interface SendReportEmailParams {
  to: string;
  treeId: string;
  structuralValue: number;
  ecoValue: number;
  speciesName: string;
}

export async function sendTreeReportEmail(
  params: SendReportEmailParams
): Promise<{ success: boolean; error?: string }> {
  const resend = getResendClient();

  if (!resend) {
    return { success: false, error: "Email service not configured" };
  }

  const { to, treeId, structuralValue, ecoValue, speciesName } = params;

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const reportUrl = `${appUrl}/report/${treeId}`;

  // Tracked affiliate links
  const arboristLink = `${appUrl}/api/redirect?target=arborist&tree_id=${treeId}&uid=${encodeURIComponent(to)}`;
  const pruningLink = `${appUrl}/api/redirect?target=pruning&tree_id=${treeId}&uid=${encodeURIComponent(to)}`;

  try {
    const { error } = await resend.emails.send({
      from: "TreeValue Pro <reports@treevalue.pro>",
      to: [to],
      subject: `Your ${speciesName} Tree is Worth $${structuralValue.toLocaleString()}!`,
      html: generateEmailHtml({
        structuralValue,
        ecoValue,
        speciesName,
        reportUrl,
        arboristLink,
        pruningLink,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Email send error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

interface EmailHtmlParams {
  structuralValue: number;
  ecoValue: number;
  speciesName: string;
  reportUrl: string;
  arboristLink: string;
  pruningLink: string;
}

function generateEmailHtml(params: EmailHtmlParams): string {
  const {
    structuralValue,
    ecoValue,
    speciesName,
    reportUrl,
    arboristLink,
    pruningLink,
  } = params;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Tree Valuation Report</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #fafaf5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #fafaf5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #15803d 0%, #166534 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0 0 8px 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                Your Tree Wealth Report
              </h1>
              <p style="margin: 0; color: #bbf7d0; font-size: 16px;">
                TreeValue Pro Valuation Certificate
              </p>
            </td>
          </tr>

          <!-- Main Value -->
          <tr>
            <td style="padding: 40px 30px; text-align: center; border-bottom: 1px solid #e4e4e7;">
              <p style="margin: 0 0 8px 0; color: #71717a; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                Your ${speciesName} Tree is Worth
              </p>
              <p style="margin: 0; color: #15803d; font-size: 48px; font-weight: 700; font-family: 'Courier New', monospace;">
                $${structuralValue.toLocaleString()}
              </p>
              <p style="margin: 16px 0 0 0; color: #71717a; font-size: 14px;">
                Replacement value based on CTLA Trunk Formula Method
              </p>
            </td>
          </tr>

          <!-- Eco Value -->
          <tr>
            <td style="padding: 30px; background-color: #f0fdf4; border-bottom: 1px solid #bbf7d0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 8px 0; color: #15803d; font-size: 14px; font-weight: 600;">
                      Annual Ecosystem Benefits
                    </p>
                    <p style="margin: 0; color: #166534; font-size: 28px; font-weight: 700; font-family: 'Courier New', monospace;">
                      $${ecoValue.toLocaleString()}/year
                    </p>
                    <p style="margin: 8px 0 0 0; color: #15803d; font-size: 13px;">
                      Carbon capture, stormwater management, and energy savings
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- View Full Report Button -->
          <tr>
            <td style="padding: 30px; text-align: center;">
              <a href="${reportUrl}" style="display: inline-block; padding: 16px 32px; background-color: #15803d; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 8px;">
                View Full Report
              </a>
            </td>
          </tr>

          <!-- CTA Section -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #fafaf5; border-radius: 12px; padding: 24px;">
                <tr>
                  <td style="padding: 20px; text-align: center;">
                    <p style="margin: 0 0 16px 0; color: #27272a; font-size: 18px; font-weight: 600;">
                      Protect Your $${structuralValue.toLocaleString()} Asset
                    </p>
                    <p style="margin: 0 0 20px 0; color: #71717a; font-size: 14px;">
                      Regular professional care maintains your tree's value and health
                    </p>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                      <tr>
                        <td style="padding: 0 8px;">
                          <a href="${arboristLink}" style="display: inline-block; padding: 12px 20px; background-color: #15803d; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 500; border-radius: 6px;">
                            Find an Arborist
                          </a>
                        </td>
                        <td style="padding: 0 8px;">
                          <a href="${pruningLink}" style="display: inline-block; padding: 12px 20px; background-color: #ffffff; color: #15803d; text-decoration: none; font-size: 14px; font-weight: 500; border-radius: 6px; border: 2px solid #15803d;">
                            Get a Quote
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background-color: #27272a; text-align: center;">
              <p style="margin: 0 0 8px 0; color: #d4d4d8; font-size: 12px;">
                This valuation is an estimate based on the CTLA Trunk Formula Method.
              </p>
              <p style="margin: 0 0 16px 0; color: #d4d4d8; font-size: 12px;">
                For official appraisals, please consult a certified arborist.
              </p>
              <p style="margin: 0; color: #a1a1aa; font-size: 11px;">
                &copy; ${new Date().getFullYear()} TreeValue Pro. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
