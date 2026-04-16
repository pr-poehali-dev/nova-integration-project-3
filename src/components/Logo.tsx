export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Triangle/Peak icon */}
      <path
        d="M20 4L36 36H4L20 4Z"
        fill="white"
      />
      <path
        d="M20 12L28 28H12L20 12Z"
        fill="#0a0a0a"
      />
      <text x="48" y="30" fill="white" fontFamily="monospace" fontSize="18" fontWeight="bold" letterSpacing="2">METRICS</text>
    </svg>
  );
};