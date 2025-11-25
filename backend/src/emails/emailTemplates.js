export const createWelcomeEmailTemplate = (name, clientURL) => {
    return `
    <div style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: auto;
        padding: 20px;
        background: #f7f7f7;
        border-radius: 10px;
        border: 1px solid #e6e6e6;
    ">
        <div style="text-align: center;">
            <h2 style="color: #4F46E5;">Welcome to ChatApp 🎉</h2>
        </div>

        <p style="font-size: 16px; color: #333;">
            Hi <strong>${name}</strong>,
        </p>

        <p style="font-size: 15px; color: #444;">
            We're excited to have you join <strong>ChatApp</strong>!  
            You’re now part of a fast, secure, and modern messaging experience.
        </p>

        <p style="font-size: 15px; color: #444;">
            Click the button below to get started:
        </p>

        <div style="text-align: center; margin: 25px 0;">
            <a href="${clientURL}"
                style="
                    display: inline-block;
                    padding: 12px 22px;
                    background-color: #4F46E5;
                    color: white;
                    text-decoration: none;
                    border-radius: 6px;
                    font-size: 16px;
                "
            >
                Open ChatApp
            </a>
        </div>

        <p style="font-size: 14px; color: #555;">
            If the button doesn’t work, paste this link in your browser:
            <br />
            <a href="${clientURL}" style="color: #4F46E5;">${clientURL}</a>
        </p>

        <hr style="margin: 30px 0; opacity: 0.3;" />

        <p style="font-size: 13px; color: #777; text-align: center;">
            © ${new Date().getFullYear()} ChatApp — All rights reserved.
        </p>
    </div>
    `;
};
