import { Turnstile } from '@marsidev/react-turnstile';

const SITE_KEY = import.meta.env.VITE_SITE_KEY;

interface CaptchaProps {
  setToken: (status: string) => void;
}

export default function Captcha({ setToken }: CaptchaProps) {
  return (
    <Turnstile
      siteKey={SITE_KEY}
      onError={() => setToken('error')}
      onExpire={() => setToken('expired')}
      onSuccess={(token) => setToken(token)}
      options={{
        size: 'invisible',
      }}
    />
  );
}
