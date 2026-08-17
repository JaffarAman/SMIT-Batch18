export const welcomeUserTemplate = (user) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome</title>
</head>

<body style="margin:0; padding:0; background-color:#f4f7fb; font-family:Arial, Helvetica, sans-serif; color:#333333;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f7fb; padding:40px 15px;">
    <tr>
      <td align="center">

        <!-- Email Container -->
        <table width="600" cellpadding="0" cellspacing="0" border="0"
          style="max-width:600px; width:100%; background-color:#ffffff; border-radius:12px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td align="center" style="background-color:#2563eb; padding:35px 25px;">
              <h1 style="margin:0; color:#ffffff; font-size:30px;">
                Welcome!
              </h1>

              <p style="margin:10px 0 0; color:#dbeafe; font-size:16px;">
                We're happy to have you with us.
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:40px 35px;">

              <h2 style="margin:0 0 20px; color:#111827; font-size:22px;">
                Hello ${user.fullName},
              </h2>

              <p style="margin:0 0 18px; font-size:16px; line-height:1.7; color:#4b5563;">
                Welcome to <strong>HiringMine</strong>! Your account has been
                successfully created, and you're ready to get started.
              </p>

              <p style="margin:0 0 30px; font-size:16px; line-height:1.7; color:#4b5563;">
                We’re excited to have you here. Click the button below to access
                your account and explore everything we have to offer.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" border="0" align="center">
                <tr>
                  <td align="center" bgcolor="#2563eb" style="border-radius:8px;">
                    <a href="{{login_url}}"
                      style="display:inline-block; padding:14px 28px; font-size:16px;
                      font-weight:bold; color:#ffffff; text-decoration:none;">
                      Get Started
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:30px 0 0; font-size:14px; line-height:1.6; color:#6b7280;">
                If you have any questions, feel free to contact our support team.
                We're always happy to help.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center"
              style="padding:25px; background-color:#f9fafb; border-top:1px solid #e5e7eb;">

              <p style="margin:0 0 8px; font-size:13px; color:#6b7280;">
                © ${new Date().getFullYear()} HiringMine. All rights reserved.
              </p>

              <p style="margin:0; font-size:13px;">
                <a href="{{support_url}}" style="color:#2563eb; text-decoration:none;">
                  Contact Support
                </a>
                &nbsp; | &nbsp;
                <a href="{{website_url}}" style="color:#2563eb; text-decoration:none;">
                  Visit Website
                </a>
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`
}


export const sendOTPTemplate = (user, otp) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Verification Code</title>
</head>

<body style="margin:0; padding:0; background-color:#f4f7fb; font-family:Arial, Helvetica, sans-serif; color:#333333;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background-color:#f4f7fb; padding:40px 15px;">
    <tr>
      <td align="center">

        <!-- Email Container -->
        <table width="600" cellpadding="0" cellspacing="0" border="0"
               style="max-width:600px; width:100%; background-color:#ffffff;
                      border-radius:12px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td align="center"
                style="background-color:#2563eb; padding:35px 25px;">

              <h1 style="margin:0; color:#ffffff; font-size:28px;">
                Verify Your Email
              </h1>

              <p style="margin:10px 0 0; color:#dbeafe; font-size:15px;">
                Use the code below to continue
              </p>

            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:40px 35px;">

              <h2 style="margin:0 0 18px; color:#111827; font-size:21px;">
                Hello ${user.fullName},
              </h2>

              <p style="margin:0 0 25px; color:#4b5563;
                        font-size:16px; line-height:1.6;">
                We received a request to verify your email address.
                Please use the following one-time password:
              </p>

              <!-- OTP -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center"
                      style="background-color:#f3f4f6; border:1px solid #e5e7eb;
                             border-radius:10px; padding:22px;">

                    <div style="font-size:32px; font-weight:bold;
                                letter-spacing:8px; color:#111827;">
                      ${otp}
                    </div>

                  </td>
                </tr>
              </table>

              <p style="margin:25px 0 10px; text-align:center;
                        color:#6b7280; font-size:14px;">
                This code will expire in
                <strong>{{otp_expiry}} minutes</strong>.
              </p>

              <p style="margin:25px 0 0; color:#6b7280;
                        font-size:14px; line-height:1.6;">
                If you didn't request this code, you can safely ignore
                this email. For your security, never share your OTP with anyone.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center"
                style="padding:25px; background-color:#f9fafb;
                       border-top:1px solid #e5e7eb;">

              <p style="margin:0 0 8px; color:#6b7280; font-size:13px;">
                © {{year}} {{company_name}}. All rights reserved.
              </p>

              <p style="margin:0; color:#9ca3af; font-size:12px;">
                This is an automated email. Please do not reply.
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`
}