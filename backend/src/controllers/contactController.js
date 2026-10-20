
import Contact from "../models/contact.js";
import { sendContactNotification } from "../utils/mailer.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Preserve existing MongoDB persistence
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // Attempt to send email notification via NodeMailer
    let emailStatus = { success: false };
    try {
      emailStatus = await sendContactNotification({
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
        createdAt: contact.createdAt,
      });
    } catch (mailError) {
      console.error(
        "Unexpected error while attempting email dispatch:",
        mailError.message
      );
      emailStatus = { success: false, error: mailError.message };
    }

    // Provide an honest, safe message without breaking existing form states
    const responseMessage = emailStatus.success
      ? "Your message has been sent successfully!"
      : "Your message has been saved successfully!";

    return res.status(201).json({
      success: true,
      message: responseMessage,
      emailSent: emailStatus.success,
      data: {
        id: contact._id,
        name: contact.name,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    console.error("Contact submission error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to send your message. Please try again later.",
    });
  }
};
