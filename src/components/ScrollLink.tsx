'use client';
import React, { PropsWithChildren } from 'react';

const ScrollLink = ({
  children,
  id,
  ...props
}: PropsWithChildren & {
  id: string;
  className?: string;
  onTouchEnd?: any;
  onClick?: any;
}) => {
  const handleScroll = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div {...props} onClick={handleScroll}>
      {children}
    </div>
  );
};

// type AnchorProps = Omit<
//     React.AnchorHTMLAttributes<HTMLAnchorElement>,
//     keyof LinkProps
// >;
// type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// // component definition
// const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
//     const router = useRouter();
//     const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//         e.preventDefault();
//
//         const [href, targetId] = e.currentTarget.href.split("#");
//         if (href !== window.location.href) {
//             router.push(e.currentTarget.href);
//         }
//         const elem = document.getElementById(targetId);
//         if (elem !== null) {
//             window.scrollTo({
//                 top: elem.offsetTop,
//                 behavior: "smooth",
//             });
//         }
//     };
//     return (
//         <Link {...props} onClick={handleScroll}>
//             {children}
//         </Link>
//     );
// };
export default ScrollLink;
