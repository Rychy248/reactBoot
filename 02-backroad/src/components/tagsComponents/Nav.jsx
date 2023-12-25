
export default function Nav({ children, ...props}) {
  return (
    <nav {...props}>
      {children}
    </nav>
  );
};