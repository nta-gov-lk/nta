import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, CheckCircle2, ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { z } from "zod";
import { PageHero, Section } from "@/components/site/ui-bits";
import { courses } from "@/data/site";

export const Route = createFileRoute("/apply")({
  validateSearch: (search: Record<string, unknown>): { course?: string } =>
    typeof search["course"] === "string" ? { course: search["course"] } : {},
  head: () => ({
    meta: [
      { title: "Apply Online | National Television Academy" },
      {
        name: "description",
        content:
          "Submit your application to the National Television Academy in six guided steps: personal details, course, background, contact, documents and review.",
      },
      { property: "og:title", content: "Apply — National Television Academy" },
      {
        property: "og:description",
        content: "Start your application to train in television and media.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApplyPage,
});

const steps = [
  "Personal Information",
  "Course Selection",
  "Educational & Media Background",
  "Contact Information",
  "Document Upload",
  "Review & Submit",
];

const schemas = [
  z.object({
    fullName: z.string().trim().min(2, "Enter your full name").max(100),
    nic: z.string().trim().min(5, "Enter your NIC or passport number").max(30),
    dob: z.string().min(1, "Select your date of birth"),
    gender: z.string().min(1, "Select an option"),
  }),
  z.object({
    course: z.string().min(1, "Choose a programme"),
    language: z.string().min(1, "Choose a language stream"),
  }),
  z.object({
    education: z.string().trim().min(2, "Enter your highest qualification").max(150),
    experience: z.string().trim().max(1000).optional().or(z.literal("")),
    motivation: z.string().trim().min(20, "Please write at least 20 characters").max(1000),
  }),
  z.object({
    email: z.string().trim().email("Enter a valid email address").max(255),
    phone: z.string().trim().min(7, "Enter a contact number").max(30),
    address: z.string().trim().min(5, "Enter your address").max(300),
    city: z.string().trim().min(2, "Enter your city").max(100),
  }),
  z.object({}),
  z.object({}),
];

type FieldName =
  | "fullName"
  | "nic"
  | "dob"
  | "gender"
  | "course"
  | "language"
  | "education"
  | "school"
  | "experience"
  | "motivation"
  | "email"
  | "phone"
  | "address"
  | "city"
  | "district";

type FormState = Partial<Record<FieldName, string>>;

const field =
  "mt-1 w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25";

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  as,
  options,
  maxLength = 150,
}: {
  label: string;
  name: FieldName;
  value: string;
  onChange: (name: FieldName, value: string) => void;
  error?: string | undefined;
  type?: string | undefined;
  placeholder?: string | undefined;
  as?: "textarea" | "select" | undefined;
  options?: { value: string; label: string }[] | undefined;
  maxLength?: number | undefined;
}) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      {as === "textarea" ? (
        <textarea
          rows={4}
          maxLength={maxLength}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          className={field}
        />
      ) : as === "select" ? (
        <select value={value} onChange={(e) => onChange(name, e.target.value)} className={field}>
          <option value="">Select…</option>
          {options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          maxLength={maxLength}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          className={field}
        />
      )}
      {error && <span className="mt-1 block text-xs font-medium text-destructive">{error}</span>}
    </label>
  );
}

function ApplyPage() {
  const { course: preselected } = Route.useSearch();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>({ course: preselected ?? "" });
  const [errors, setErrors] = useState<FormState>({});
  const [submitted, setSubmitted] = useState(false);
  const [uploadFileName, setUploadFileName] = useState<string | null>(null);

  useEffect(() => {
    if (!uploadFileName) return;
    const timeout = window.setTimeout(() => setUploadFileName(null), 3500);
    return () => window.clearTimeout(timeout);
  }, [uploadFileName]);

  const set = (name: FieldName, value: string) => setData((d) => ({ ...d, [name]: value }));

  function next() {
    const parsed = schemas[step]!.safeParse(data);
    if (!parsed.success) {
      const next: FormState = {};
      for (const issue of parsed.error.issues) next[issue.path[0] as FieldName] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    if (step === steps.length - 1) setSubmitted(true);
    else setStep((s) => s + 1);
  }

  if (submitted) {
    return (
      <Section>
        <div className="mx-auto max-w-xl rounded-xl border border-border bg-card p-10 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-primary" aria-hidden />
          <h1 className="mt-5 text-2xl font-extrabold">Application submitted</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Thank you, {data.fullName}. Your application to the National Television Academy has been
            received. The admissions office will contact you by email with next steps and your
            assessment date.
          </p>
          {/* <p className="mt-4 rounded-md bg-gold-soft px-4 py-3 text-xs text-foreground/75">
            Reference number: [PLACEHOLDER — generated on submission]
          </p> */}
          <Link
            to="/"
            className="mt-6 inline-flex rounded-md border-2 border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Back to home
          </Link>
        </div>
      </Section>
    );
  }

  const selectedCourse = courses.find((c) => c.id === data.course);

  return (
    <>
      {uploadFileName && (
        <div
          role="alert"
          className="fixed right-5 top-5 z-50 flex max-w-sm items-center gap-3 rounded-lg border border-emerald-200 bg-white px-4 py-3 text-sm text-foreground shadow-xl"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="h-5 w-5" aria-hidden />
          </span>
          <span>
            <strong className="block font-bold text-emerald-800">Image accepted</strong>
            <span className="text-muted-foreground">Your image has been added successfully.</span>
          </span>
        </div>
      )}
      <PageHero
        eyebrow="Application"
        title="Apply to the academy"
        intro="Six short steps. Your answers stay on this page until you submit the final review."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <ol className="flex flex-wrap gap-2">
            {steps.map((s, i) => (
              <li key={s} className="flex min-w-0 flex-1 items-center gap-2">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    i < step
                      ? "bg-primary text-primary-foreground"
                      : i === step
                        ? "bg-gold text-gold-foreground"
                        : "border border-border bg-card text-muted-foreground"
                  }`}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </span>
                <span
                  className={`hidden truncate text-xs font-semibold lg:block ${i === step ? "text-primary" : "text-muted-foreground"}`}
                >
                  {s}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-gradient-to-r from-primary to-gold transition-all"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 sm:p-8">
            <p className="eyebrow text-primary">
              Step {step + 1} of {steps.length}
            </p>
            <h2 className="mt-2 text-2xl font-bold">{steps[step]}</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {step === 0 && (
                <>
                  <Field
                    label="Full name"
                    name="fullName"
                    value={data.fullName ?? ""}
                    onChange={set}
                    error={errors.fullName}
                    placeholder="As on your NIC"
                  />
                  <Field
                    label="NIC / Passport number"
                    name="nic"
                    value={data.nic ?? ""}
                    onChange={set}
                    error={errors.nic}
                    maxLength={30}
                  />
                  <Field
                    label="Date of birth"
                    name="dob"
                    type="date"
                    value={data.dob ?? ""}
                    onChange={set}
                    error={errors.dob}
                  />
                  <Field
                    label="Gender"
                    name="gender"
                    as="select"
                    value={data.gender ?? ""}
                    onChange={set}
                    error={errors.gender}
                    options={[
                      { value: "female", label: "Female" },
                      { value: "male", label: "Male" },
                      { value: "other", label: "Other" },
                      { value: "undisclosed", label: "Prefer not to say" },
                    ]}
                  />
                </>
              )}

              {step === 1 && (
                <>
                  <Field
                    label="Programme"
                    name="course"
                    as="select"
                    value={data.course ?? ""}
                    onChange={set}
                    error={errors.course}
                    options={courses.map((c) => ({ value: c.id, label: c.title }))}
                  />
                  <Field
                    label="Language stream"
                    name="language"
                    as="select"
                    value={data.language ?? ""}
                    onChange={set}
                    error={errors.language}
                    options={[
                      { value: "sinhala", label: "සිංහල — Sinhala" },
                      { value: "tamil", label: "தமிழ் — Tamil" },
                      { value: "english", label: "English" },
                    ]}
                  />
                  {selectedCourse && (
                    <div className="rounded-lg bg-primary-soft p-4 text-sm sm:col-span-2">
                      <p className="font-bold text-primary-dark">{selectedCourse.title}</p>
                      <p className="mt-1 text-foreground/75">
                        {selectedCourse.duration} · {selectedCourse.level} · {selectedCourse.intake}
                      </p>
                    </div>
                  )}
                </>
              )}

              {step === 2 && (
                <>
                  <Field
                    label="Highest qualification"
                    name="education"
                    value={data.education ?? ""}
                    onChange={set}
                    error={errors.education}
                    placeholder="e.g. G.C.E. A/L 2024"
                  />
                  <Field
                    label="School / institution"
                    name="school"
                    value={data.school ?? ""}
                    onChange={set}
                    placeholder="Optional"
                  />
                  <div className="sm:col-span-2">
                    <Field
                      label="Media or performance experience (optional)"
                      name="experience"
                      as="textarea"
                      maxLength={1000}
                      value={data.experience ?? ""}
                      onChange={set}
                      placeholder="Stage, school drama, camera work, voice work…"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Field
                      label="Why do you want to join this programme?"
                      name="motivation"
                      as="textarea"
                      maxLength={1000}
                      value={data.motivation ?? ""}
                      onChange={set}
                      error={errors.motivation}
                    />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={data.email ?? ""}
                    onChange={set}
                    error={errors.email}
                    maxLength={255}
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    value={data.phone ?? ""}
                    onChange={set}
                    error={errors.phone}
                    maxLength={30}
                    placeholder="+94 ..."
                  />
                  <div className="sm:col-span-2">
                    <Field
                      label="Address"
                      name="address"
                      value={data.address ?? ""}
                      onChange={set}
                      error={errors.address}
                      maxLength={300}
                    />
                  </div>
                  <Field
                    label="City"
                    name="city"
                    value={data.city ?? ""}
                    onChange={set}
                    error={errors.city}
                    maxLength={100}
                  />
                  <Field
                    label="District"
                    name="district"
                    value={data.district ?? ""}
                    onChange={set}
                    maxLength={100}
                    placeholder="Optional"
                  />
                </>
              )}

              {step === 4 && (
                <div className="sm:col-span-2">
                  <div className="rounded-xl border-2 border-dashed border-gold bg-gold-soft p-8 text-center">
                    <Upload className="mx-auto h-8 w-8 text-primary" aria-hidden />
                    <p className="mt-3 font-display font-bold text-primary-dark">
                      Upload a document image
                    </p>
                    <p className="mx-auto mt-2 max-w-md text-sm text-foreground/75">
                      Choose an image for your identity document, certificate or passport-size
                      photograph.
                    </p>
                    <label className="mt-5 inline-flex cursor-pointer rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary-dark">
                      Choose image
                      <input
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={(event) => {
                          const file = event.target.files?.[0];
                          if (file?.type.startsWith("image/")) setUploadFileName(file.name);
                        }}
                      />
                    </label>
                    {uploadFileName && (
                      <div className="mx-auto mt-5 flex max-w-md items-center gap-2 rounded-md border border-emerald-200 bg-white px-3 py-2 text-left text-sm text-emerald-800">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                        <span className="break-all font-medium">{uploadFileName}</span>
                      </div>
                    )}
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {[
                      "National Identity Card or birth certificate",
                      "Educational certificates",
                      "Passport-size photograph",
                      "Audition, screen test or voice sample (if applicable)",
                    ].map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step === 5 && (
                <div className="sm:col-span-2">
                  <dl className="divide-y divide-border rounded-lg border border-border">
                    {[
                      ["Full name", data.fullName],
                      ["NIC / Passport", data.nic],
                      ["Date of birth", data.dob],
                      ["Programme", selectedCourse?.title],
                      ["Language stream", data.language],
                      ["Highest qualification", data.education],
                      ["Email", data.email],
                      ["Phone", data.phone],
                      [
                        "Address",
                        [data.address, data.city, data.district].filter(Boolean).join(", "),
                      ],
                    ].map(([label, value]) => (
                      <div
                        key={label as string}
                        className="grid grid-cols-[10rem_minmax(0,1fr)] gap-4 p-4 text-sm"
                      >
                        <dt className="font-semibold">{label}</dt>
                        <dd className="min-w-0 break-words text-muted-foreground">
                          {value || "—"}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-xs text-muted-foreground">
                    By submitting you confirm the information above is accurate. The academy will
                    contact you by email.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="inline-flex items-center gap-1.5 rounded-md border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-primary"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
                Back
              </button>
              <button
                type="button"
                onClick={next}
                className="inline-flex items-center gap-1.5 rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                {step === steps.length - 1 ? "Submit application" : "Continue"}
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
