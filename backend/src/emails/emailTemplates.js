// export const createWelcomeEmailTemplate = (name, CLIENT_URL) => {
//     return `
//     <div style="
//         font-family: Arial, sans-serif;
//         max-width: 600px;
//         margin: auto;
//         padding: 20px;
//         background: #f7f7f7;
//         border-radius: 10px;
//         border: 1px solid #e6e6e6;
//     ">
//         <div style="text-align: center;">
//             <h2 style="color: #4F46E5;">Welcome to ChatApp 🎉</h2>
//         </div>

//         <p style="font-size: 16px; color: #333;">
//             Hi <strong>${name}</strong>,
//         </p>

//         <p style="font-size: 15px; color: #444;">
//             We're excited to have you join <strong>ChatApp</strong>!  
//             You’re now part of a fast, secure, and modern messaging experience.
//         </p>

//         <p style="font-size: 15px; color: #444;">
//             Click the button below to get started:
//         </p>

//         <div style="text-align: center; margin: 25px 0;">
//             <a href="${CLIENT_URL}"
//                 style="
//                     display: inline-block;
//                     padding: 12px 22px;
//                     background-color: #4F46E5;
//                     color: white;
//                     text-decoration: none;
//                     border-radius: 6px;
//                     font-size: 16px;
//                 "
//             >
//                 Open ChatApp
//             </a>
//         </div>

//         <p style="font-size: 14px; color: #555;">
//             If the button doesn’t work, paste this link in your browser:
//             <br />
//             <a href="${CLIENT_URL}" style="color: #4F46E5;">${CLIENT_URL}</a>
//         </p>

//         <hr style="margin: 30px 0; opacity: 0.3;" />

//         <p style="font-size: 13px; color: #777; text-align: center;">
//             © ${new Date().getFullYear()} ChatApp — All rights reserved.
//         </p>
//     </div>
//     `;
// };


export const createWelcomeEmailTemplate = (name, CLIENT_URL) => {
  return `
  <div style="
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: auto;
      padding: 0;
      background: #ffffff;
      border-radius: 10px;
      border: 1px solid #e6e6e6;
      overflow: hidden;
  ">
    <!-- Header (gradient) -->
    <div style="
        background: linear-gradient(135deg, #6d28d9 0%, #4f46e5 50%, #06b6d4 100%);
        padding: 28px 20px;
        text-align: center;
        color: #ffffff;
    ">
      <div style="max-width: 520px; margin: 0 auto;">
        <h1 style="margin:0; font-size:22px; line-height:1.2; font-weight:700;">
          Welcome to ChatApp
        </h1>
        <p style="margin:8px 0 0; font-size:13px; opacity:0.95;">
          Fast. Secure. Friendly — your messaging, upgraded.
        </p>

        <!-- Decorative "chat bubbles" made with inline elements -->
        <div style="margin-top:16px; display:inline-block;">
          <span style="
              display:inline-block;
              width:32px; height:32px; border-radius:50%;
              background: rgba(255,255,255,0.18);
              margin-right:8px;
              vertical-align:middle;
              box-shadow: 0 2px 6px rgba(0,0,0,0.12);
          "></span>
          <span style="
              display:inline-block;
              width:22px; height:22px; border-radius:50%;
              background: rgba(255,255,255,0.22);
              margin-right:8px;
              vertical-align:middle;
              box-shadow: 0 2px 6px rgba(0,0,0,0.12);
          "></span>
          <span style="
              display:inline-block;
              width:14px; height:14px; border-radius:50%;
              background: rgba(255,255,255,0.28);
              vertical-align:middle;
              box-shadow: 0 2px 6px rgba(0,0,0,0.12);
          "></span>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div style="padding:20px; background: #f7f7f7;">
      <div style="background:#ffffff; border-radius:8px; padding:18px; border:1px solid #efefef;">
        <p style="margin:0 0 12px 0; font-size:16px; color:#333;">
          Hi <strong>${name}</strong>,
        </p>

        <p style="margin:0 0 12px 0; font-size:15px; color:#444;">
          We're excited to have you join <strong>ChatApp</strong>! You’re now part of a fast, secure,
          and modern messaging experience.
        </p>

        <p style="margin:0 0 18px 0; font-size:15px; color:#444;">
          Click the button below to get started:
        </p>

        <div style="text-align:center; margin-bottom:16px;">
          <a href="${CLIENT_URL}" target="_blank" style="
              display:inline-block;
              padding:12px 22px;
              background-color:#4F46E5;
              color:#ffffff;
              text-decoration:none;
              border-radius:6px;
              font-size:16px;
              font-weight:600;
          ">
            Open ChatApp
          </a>
        </div>

        <p style="margin:0 0 8px 0; font-size:14px; color:#666;">
          If the button doesn’t work, paste this link in your browser:
          <br/>
          <a href="${CLIENT_URL}" style="color:#4F46E5; word-break:break-all;">${CLIENT_URL}</a>
        </p>
      </div>

      <div style="margin-top:18px; font-size:13px; color:#777; text-align:center;">
        © ${new Date().getFullYear()} ChatApp — All rights reserved.
      </div>
    </div>
  </div>
  `;
};
