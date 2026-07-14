"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { Locale, LocalizedText } from "@/data/siteContent";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgogegzv";

type InquiryFormProps = {
  locale: Locale;
};

type FormFields = {
  name: string;
  organization: string;
  email: string;
  interest: string;
  message: string;
  referral: string;
  website: string;
};

type FormErrors = Partial<Record<keyof Pick<FormFields, "name" | "email" | "message">, string>>;

type SelectOption = {
  value: string;
  label: LocalizedText;
};

const initialFields: FormFields = {
  name: "",
  organization: "",
  email: "",
  interest: "",
  message: "",
  referral: "",
  website: ""
};

const labels: Record<string, LocalizedText> = {
  name: {
    ja: "お名前",
    en: "Name"
  },
  organization: {
    ja: "会社名・団体名（任意）",
    en: "Company / Organization (optional)"
  },
  email: {
    ja: "メールアドレス",
    en: "Email"
  },
  interest: {
    ja: "ご興味のある内容",
    en: "I’m interested in"
  },
  message: {
    ja: "メッセージ",
    en: "Message"
  },
  referral: {
    ja: "このサイトを何で知りましたか？",
    en: "How did you hear about this?"
  },
  submit: {
    ja: "問い合わせを送信する",
    en: "Send inquiry"
  },
  sending: {
    ja: "送信中...",
    en: "Sending..."
  },
  selectPlaceholder: {
    ja: "選択してください",
    en: "Please select"
  }
};

const messages: Record<string, LocalizedText> = {
  success: {
    ja: "お問い合わせありがとうございます。内容を確認のうえ、通常2営業日以内にご連絡いたします。",
    en: "Thank you for getting in touch. I’ll review your message and normally respond within two business days."
  },
  error: {
    ja: "送信できませんでした。時間をおいて再度お試しいただくか、LinkedInからご連絡ください。",
    en: "Your message could not be sent. Please try again later or contact me through LinkedIn."
  },
  required: {
    ja: "この項目は必須です。",
    en: "This field is required."
  },
  email: {
    ja: "有効なメールアドレスを入力してください。",
    en: "Please enter a valid email address."
  },
  bot: {
    ja: "送信できませんでした。時間をおいて再度お試しください。",
    en: "Your message could not be sent. Please try again later."
  }
};

const placeholders: Record<string, LocalizedText> = {
  message: {
    ja: "開催時期、人数、オンライン／対面のご希望など、分かる範囲でお知らせください。",
    en: "Please share any details you already know, such as preferred timing, team size, and whether you are considering an online or in-person session."
  }
};

const interestOptions: SelectOption[] = [
  {
    value: "reset-your-workday",
    label: {
      ja: "Reset Your Workday",
      en: "Reset Your Workday"
    }
  },
  {
    value: "movement-team-building",
    label: {
      ja: "Movement & Team Building",
      en: "Movement & Team Building"
    }
  },
  {
    value: "not-sure",
    label: {
      ja: "まだ決まっていない／相談したい",
      en: "Not sure yet / I’d like to discuss"
    }
  },
  {
    value: "other",
    label: {
      ja: "その他",
      en: "Other"
    }
  }
];

const referralOptions: SelectOption[] = [
  {
    value: "linkedin",
    label: {
      ja: "LinkedIn",
      en: "LinkedIn"
    }
  },
  {
    value: "facebook",
    label: {
      ja: "Facebook",
      en: "Facebook"
    }
  },
  {
    value: "instagram",
    label: {
      ja: "Instagram",
      en: "Instagram"
    }
  },
  {
    value: "referral",
    label: {
      ja: "紹介",
      en: "Referral"
    }
  },
  {
    value: "world-wellness-weekend",
    label: {
      ja: "World Wellness Weekend",
      en: "World Wellness Weekend"
    }
  },
  {
    value: "other",
    label: {
      ja: "その他",
      en: "Other"
    }
  }
];

function validate(fields: FormFields, locale: Locale): FormErrors {
  const nextErrors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!fields.name.trim()) {
    nextErrors.name = messages.required[locale];
  }

  if (!fields.email.trim()) {
    nextErrors.email = messages.required[locale];
  } else if (!emailPattern.test(fields.email.trim())) {
    nextErrors.email = messages.email[locale];
  }

  if (!fields.message.trim()) {
    nextErrors.message = messages.required[locale];
  }

  return nextErrors;
}

export default function InquiryForm({ locale }: InquiryFormProps) {
  const t = locale;
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = (field: keyof FormFields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field as keyof FormErrors]) {
        return current;
      }
      const { [field as keyof FormErrors]: _ignored, ...rest } = current;
      return rest;
    });
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") {
      return;
    }

    if (fields.website.trim()) {
      setStatus("error");
      setStatusMessage(messages.bot[t]);
      return;
    }

    const nextErrors = validate(fields, t);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    const formData = new FormData();
    formData.append("name", fields.name.trim());
    formData.append("organization", fields.organization.trim());
    formData.append("email", fields.email.trim());
    formData.append("interest", fields.interest);
    formData.append("message", fields.message.trim());
    formData.append("referral", fields.referral);
    formData.append("locale", t);
    formData.append("_subject", "Corporate Wellness Website Inquiry");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFields(initialFields);
      setErrors({});
      setStatus("success");
      setStatusMessage(messages.success[t]);
    } catch {
      setStatus("error");
      setStatusMessage(messages.error[t]);
    }
  };

  return (
    <form
      className="cw-inquiry-form"
      id="inquiry-form"
      onSubmit={submitForm}
      noValidate
    >
      <div className="cw-inquiry-field">
        <label htmlFor="inquiry-name">{labels.name[t]}</label>
        <input
          id="inquiry-name"
          name="name"
          type="text"
          value={fields.name}
          onChange={(event) => updateField("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "inquiry-name-error" : undefined}
          autoComplete="name"
        />
        {errors.name ? (
          <p className="cw-inquiry-error" id="inquiry-name-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="cw-inquiry-field">
        <label htmlFor="inquiry-organization">{labels.organization[t]}</label>
        <input
          id="inquiry-organization"
          name="organization"
          type="text"
          value={fields.organization}
          onChange={(event) => updateField("organization", event.target.value)}
          autoComplete="organization"
        />
      </div>

      <div className="cw-inquiry-field">
        <label htmlFor="inquiry-email">{labels.email[t]}</label>
        <input
          id="inquiry-email"
          name="email"
          type="email"
          value={fields.email}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "inquiry-email-error" : undefined}
          autoComplete="email"
        />
        {errors.email ? (
          <p className="cw-inquiry-error" id="inquiry-email-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="cw-inquiry-field">
        <label htmlFor="inquiry-interest">{labels.interest[t]}</label>
        <select
          id="inquiry-interest"
          name="interest"
          value={fields.interest}
          onChange={(event) => updateField("interest", event.target.value)}
        >
          <option value="">{labels.selectPlaceholder[t]}</option>
          {interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label[t]}
            </option>
          ))}
        </select>
      </div>

      <div className="cw-inquiry-field cw-inquiry-field-wide">
        <label htmlFor="inquiry-message">{labels.message[t]}</label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder={placeholders.message[t]}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "inquiry-message-error" : undefined}
        />
        {errors.message ? (
          <p className="cw-inquiry-error" id="inquiry-message-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="cw-inquiry-field cw-inquiry-field-wide">
        <label htmlFor="inquiry-referral">{labels.referral[t]}</label>
        <select
          id="inquiry-referral"
          name="referral"
          value={fields.referral}
          onChange={(event) => updateField("referral", event.target.value)}
        >
          <option value="">{labels.selectPlaceholder[t]}</option>
          {referralOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label[t]}
            </option>
          ))}
        </select>
      </div>

      <div className="cw-honeypot" aria-hidden="true">
        <label htmlFor="inquiry-website">Website</label>
        <input
          id="inquiry-website"
          name="_gotcha"
          type="text"
          value={fields.website}
          onChange={(event) => updateField("website", event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="cw-inquiry-footer">
        <button className="button primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? labels.sending[t] : labels.submit[t]}
        </button>
        {statusMessage ? (
          <p
            className={`cw-inquiry-status cw-inquiry-status-${status}`}
            role={status === "success" ? "status" : "alert"}
          >
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
