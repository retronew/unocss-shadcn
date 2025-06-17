import type { VariantObject } from '@unocss/core'
import { definePreset } from '@unocss/core'
import { variantGetParameter } from '@unocss/preset-wind4/utils'

export interface Colors {
  [key: string]: Colors & { DEFAULT?: string } | string
}

interface Theme {
  colors?: Colors
}

function getShadcnThemeCSS() {
  return `
  :root {
    --background: oklch(1 0 0);
    --foreground: oklch(0.145 0 0);

    --card: oklch(1 0 0);
    --card-foreground: oklch(0.145 0 0);

    --popover: oklch(1 0 0);
    --popover-foreground: oklch(0.145 0 0);

    --primary: oklch(0.205 0 0);
    --primary-foreground: oklch(0.985 0 0);

    --secondary: oklch(0.97 0 0);
    --secondary-foreground: oklch(0.205 0 0);

    --muted: oklch(0.97 0 0);
    --muted-foreground: oklch(0.556 0 0);

    --accent: oklch(0.97 0 0);
    --accent-foreground: oklch(0.205 0 0);

    --destructive: oklch(0.577 0.245 27.325);
    --destructive-foreground: oklch(0.577 0.245 27.325);

    --border: oklch(.92 .004 286.32);
    --input: oklch(.871 .006 286.286);
    --ring: oklch(.871 .006 286.286);
    --radius: 0.625rem;

    --chart-1: oklch(0.646 0.222 41.116);
    --chart-2: oklch(0.6 0.118 184.704);
    --chart-3: oklch(0.398 0.07 227.392);
    --chart-4: oklch(0.828 0.189 84.429);
    --chart-5: oklch(0.769 0.188 70.08);

    --sidebar: oklch(0.985 0 0);
    --sidebar-foreground: oklch(0.145 0 0);
    --sidebar-primary: oklch(0.205 0 0);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.97 0 0);
    --sidebar-accent-foreground: oklch(0.205 0 0);
    --sidebar-border: oklch(0.922 0 0);
    --sidebar-ring: oklch(0.708 0 0);
  }

  .dark {
    --background: oklch(0.145 0 0);
    --foreground: oklch(0.985 0 0);

    --card: oklch(0.145 0 0);
    --card-foreground: oklch(0.985 0 0);

    --popover: oklch(0.145 0 0);
    --popover-foreground: oklch(0.985 0 0);

    --primary: oklch(0.985 0 0);
    --primary-foreground: oklch(0.205 0 0);

    --secondary: oklch(0.269 0 0);
    --secondary-foreground: oklch(0.985 0 0);

    --muted: oklch(0.269 0 0);
    --muted-foreground: oklch(0.708 0 0);

    --accent: oklch(0.269 0 0);
    --accent-foreground: oklch(0.985 0 0);

    --destructive: oklch(0.396 0.141 25.723);
    --destructive-foreground: oklch(0.637 0.237 25.331);

    --border: oklch(0.269 0 0);
    --input: oklch(0.269 0 0);
    --ring: oklch(0.439 0 0);

    --chart-1: oklch(0.488 0.243 264.376);
    --chart-2: oklch(0.696 0.17 162.48);
    --chart-3: oklch(0.769 0.188 70.08);
    --chart-4: oklch(0.627 0.265 303.9);
    --chart-5: oklch(0.645 0.246 16.439);

    --sidebar: oklch(0.205 0 0);
    --sidebar-foreground: oklch(0.985 0 0);
    --sidebar-primary: oklch(0.488 0.243 264.376);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.269 0 0);
    --sidebar-accent-foreground: oklch(0.985 0 0);
    --sidebar-border: oklch(0.269 0 0);
    --sidebar-ring: oklch(0.439 0 0);
  }

  * {
    border-color: var(--border);
    outline-color: color-mix(in oklch, var(--ring) 50%, transparent);
  }
  body {
    background-color: var(--background);
    color: var(--foreground);
  }
`
}

function getTheme(): Theme {
  return {
    colors: {
      border: 'var(--border)',
      input: 'var(--input)',
      ring: 'var(--ring)',
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      primary: {
        DEFAULT: 'var(--primary)',
        foreground: 'var(--primary-foreground)',
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        foreground: 'var(--secondary-foreground)',
      },
      destructive: {
        DEFAULT: 'var(--destructive)',
        foreground: 'var(--destructive-foreground)',
      },
      muted: {
        DEFAULT: 'var(--muted)',
        foreground: 'var(--muted-foreground)',
      },
      accent: {
        DEFAULT: 'var(--accent)',
        foreground: 'var(--accent-foreground)',
      },
      popover: {
        DEFAULT: 'var(--popover)',
        foreground: 'var(--popover-foreground)',
      },
      card: {
        DEFAULT: 'var(--card)',
        foreground: 'var(--card-foreground)',
      },
      chart: {
        1: 'var(--chart-1)',
        2: 'var(--chart-2)',
        3: 'var(--chart-3)',
        4: 'var(--chart-4)',
        5: 'var(--chart-5)',
      },
      sidebar: {
        DEFAULT: 'var(--sidebar)',
        foreground: 'var(--sidebar-foreground)',
        background: 'var(--sidebar-background)',
        primary: {
          DEFAULT: 'var(--sidebar-primary)',
          foreground: 'var(--sidebar-primary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--sidebar-accent)',
          foreground: 'var(--sidebar-accent-foreground)',
        },
        border: 'var(--sidebar-border)',
        ring: 'var(--sidebar-ring)',
      },
    },
  }
}
const variantAriaInvalid: VariantObject = {
  name: 'aria-invalid',
  match(matcher, ctx) {
    const variant = variantGetParameter('aria-invalid-', matcher, ctx.generator.config.separators)
    if (variant) {
      const [match, rest] = variant
      return {
        matcher: rest,
        selector: s => `${s}[aria-invalid="${match}"]`,
      }
    }

    if (matcher.startsWith('aria-invalid:')) {
      return {
        matcher: matcher.slice('aria-invalid:'.length),
        selector: s => `${s}[aria-invalid="true"]`,
      }
    }
  },
}

export const presetShadcn = definePreset(() => {
  return {
    name: 'shadcn-theme',
    preflights: [
      {
        getCSS: getShadcnThemeCSS,
      },
    ],
    theme: getTheme(),
    variants: [variantAriaInvalid],
  }
})
