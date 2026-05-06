import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const aspectRatioVariants = cva("relative flex items-center justify-center overflow-hidden", {
	variants: {
		ratio: {
			"16/9": "[--aspect-ratio:16/9]",
			"4/3": "[--aspect-ratio:4/3]",
			"3/2": "[--aspect-ratio:3/2]",
			"1/1": "[--aspect-ratio:1/1]",
			"21/9": "[--aspect-ratio:21/9]",
		},
		maxWidth: {
			none: "max-w-none",
			sm: "max-w-sm",
			md: "max-w-md",
			lg: "max-w-lg",
			xl: "max-w-xl",
			"2xl": "max-w-2xl",
			"3xl": "max-w-3xl",
			"4xl": "max-w-4xl",
			"5xl": "max-w-5xl",
			"6xl": "max-w-6xl",
		},
		width: {
			auto: "w-auto",
			none: "w-none",
			sm: "w-sm",
			md: "w-md",
			lg: "w-lg",
			xl: "w-xl",
			"2xl": "w-2xl",
			"3xl": "w-3xl",
			"4xl": "w-4xl",
			"5xl": "w-5xl",
			"6xl": "w-6xl",
			"7xl": "w-7xl",
			"8xl": "w-8xl",
			"9xl": "w-9xl",
		},
	},
	defaultVariants: {
		ratio: "1/1",
		maxWidth: "none",
		width: "auto",
	},
});

type RatioVariant = VariantProps<typeof aspectRatioVariants>["ratio"];

export interface AspectRatioProps
	extends Omit<React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>, "ratio">,
		Omit<VariantProps<typeof aspectRatioVariants>, "ratio"> {
	ratio?: React.ComponentProps<typeof AspectRatioPrimitive.Root>["ratio"] | RatioVariant | "" | null;
}

const RATIO_MAP: Record<string, number> = {
	"16/9": 16 / 9,
	"4/3": 4 / 3,
	"3/2": 3 / 2,
	"1/1": 1,
	"21/9": 21 / 9,
};

const AspectRatio = React.forwardRef<React.ElementRef<typeof AspectRatioPrimitive.Root>, AspectRatioProps>(
	({ className, ratio, maxWidth, width, ...props }, ref) => {
		let numericRatio: number | undefined = 1; // Default radix ratio
		let variantRatio: RatioVariant | undefined = undefined; // Let cva handle default variants

		if (typeof ratio === "number") {
			numericRatio = ratio;
		} else if (typeof ratio === "string" && ratio in RATIO_MAP) {
			numericRatio = RATIO_MAP[ratio];
			variantRatio = ratio as RatioVariant;
		}

		return (
			<AspectRatioPrimitive.Root
				ref={ref}
				className={cn(aspectRatioVariants({ ratio: variantRatio, maxWidth, width, className }))}
				ratio={numericRatio}
				{...props}
			/>
		);
	}
);
AspectRatio.displayName = AspectRatioPrimitive.Root.displayName;

export { AspectRatio, aspectRatioVariants };
