const NTA_LOGO_URL = "https://7cb7ea62-361c-49d0-9f0c-633481c62f71.lovableproject.com/__l5e/assets-v1/05329787-2761-4cfd-a86f-e82290ea0734/nta-logo.jpeg";

export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return <img src={NTA_LOGO_URL} alt="National Television Academy logo" className={className} loading="eager" />;
}
