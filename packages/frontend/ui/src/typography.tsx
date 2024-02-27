import { ComponentProps, ReactNode, forwardRef } from "react";
import { Linking, Text as NativeText, Platform } from "react-native";
import { TextLink as SolitoTextLink } from "solito/link";

/**
 * You can use this pattern to create components with default styles
 */
export const P = ({ children, className }: { children: ReactNode; className?: string }) => (
  <NativeText className={`my-4 text-base text-black ${className}`}>{children}</NativeText>
);

/**
 * Components can have defaultProps and styles
 */
export const H1 = ({ children, className }: { children: ReactNode; className?: string }) => (
  <NativeText className={`my-4 text-3xl font-extrabold ${className}`}>{children}</NativeText>
);

/**
 * This is a more advanced component with custom styles and per-platform functionality
 */
export interface AProps extends ComponentProps<typeof NativeText> {
  href?: string;
  target?: "_blank";
}

export const A = forwardRef<NativeText, AProps>(function A(
  { className = "", href, target, children, ...props },
  ref
) {
  const nativeAProps = Platform.select<Partial<AProps>>({
    web: {
      href,
      target,
    },
    default: {
      onPress: (event) => {
        props.onPress && props.onPress(event);
        if (Platform.OS !== "web" && href !== undefined) {
          Linking.openURL(href);
        }
      },
    },
  });

  return (
    <NativeText
      accessibilityRole="link"
      className={`text-blue-500 hover:underline ${className}`}
      {...props}
      {...nativeAProps}
      ref={ref}
    >
      {children}
    </NativeText>
  );
});

/**
 * Solito's TextLink doesn't work directly with styled() since it has a textProps prop
 * By wrapping it in a function, we can forward style down properly.
 */
export const TextLink = ({
  style,
  textProps,
  href,
  className,
  children,
  ...props
}: ComponentProps<typeof SolitoTextLink>) => (
  <SolitoTextLink
    href={href}
    textProps={{ ...textProps, style: [style, textProps?.style] }}
    {...props}
  >
    <NativeText className={`text-base font-bold text-blue-500 hover:underline ${className}`}>
      {children}
    </NativeText>
  </SolitoTextLink>
);
