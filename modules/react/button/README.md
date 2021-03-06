# Canvas Kit Button

Clickable button elements that extend the native `<button>` element with Canvas styling.

[> Workday Design Reference](https://design.workday.com/components/buttons/buttons)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

---

## Table of Contents

- [PrimaryButton](#primarybutton)
- [SecondaryButton](#secondarybutton)
- [TertiaryButton](#tertiarybutton)
- [DeleteButton](#deletebutton)
- [Hyperlink](#hyperlink)
- [IconButton](#iconbutton)
- [ToolbarIconButton](#toolbariconbutton)
- [ToolbarDropdownButton](#toolbardropdownbutton)
- [Deprecated Buttons](#deprecated-buttons)

---

# PrimaryButton

```tsx
import * as React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

<PrimaryButton>Button Label</PrimaryButton>;
```

## Component Props

### Required

#### `children: ReactNode`

> Buttons cannot be empty

### Optional

#### `size: 'small' | 'medium' | 'large'`

> The size of the button

Default: `'medium'`

| Theme    | Description                            |
| -------- | -------------------------------------- |
| `small`  | 24px tall, small padding, small text   |
| `medium` | 32px tall, medium padding, medium text |
| `large`  | 48px tall, large padding, larger text  |

---

#### `grow: boolean`

> If true, the button will grow to its container's width.

Default: `false`

---

#### `ref: React.Ref<HTMLButtonElement>`

> Returns the ref to the rendered HTMLButtonElement.

---

#### `dataLabel: String`

> The data label of the button (generally used for media timestamps).
>
> Note: not displayed at `small` size.

---

### `icon: CanvasSystemIcon`

> The icon of the button.
>
> Note: not displayed at `small` size.

---

#### `iconPosition: ButtonIconPosition`

> The position of the TextButton icon.

Default: `left`

---

### `as: React.ElementType`

> The alternative container type for the button. If `as="a"` is provided, We use Emotion's special
> `as` prop to render an `a` tag instead of a `button`.

> When defined, all props available via `React.AnchorHTMLAttributes<HTMLAnchorElement>` (e.g.
> `href`, `target`, etc.) become available.

Default: `undefined`

---

# SecondaryButton

```tsx
import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

<SecondaryButton>Button Label</SecondaryButton>;
```

## Component Props

### Required

#### `children: ReactNode`

> Buttons cannot be empty

### Optional

#### `variant: 'inverse' | undefined`

> The style of the button

Default: `undefined`

| Theme     | Description   |
| --------- | ------------- |
| `outline` | Gray outline  |
| `inverse` | White outline |

---

#### `size: 'small' | 'medium' | 'large'`

> The size of the button

Default: `'medium'`

| Theme    | Description                            |
| -------- | -------------------------------------- |
| `small`  | 24px tall, small padding, small text   |
| `medium` | 32px tall, medium padding, medium text |
| `large`  | 48px tall, large padding, larger text  |

---

#### `grow: boolean`

> If true, the button will grow to its container's width.

Default: `false`

---

#### `ref: React.Ref<HTMLButtonElement>`

> Returns the ref to the rendered HTMLButtonElement.

---

#### `dataLabel: String`

> The data label of the button (generally used for media timestamps).
>
> Note: not displayed at `small` size.

---

### `icon: CanvasSystemIcon`

> The icon of the button.
>
> Note: not displayed at `small` size.

---

#### `iconPosition: ButtonIconPosition`

> The position of the TextButton icon.

Default: `left`

---

### `as: React.ElementType`

> The alternative container type for the button. If `as="a"` is provided, We use Emotion's special
> `as` prop to render an `a` tag instead of a `button`.

> When defined, all props available via `React.AnchorHTMLAttributes<HTMLAnchorElement>` (e.g.
> `href`, `target`, etc.) become available.

Default: `undefined`

---

# TertiaryButton

```tsx
import * as React from 'react';
import {TertiaryButton} from '@workday/canvas-kit-react/button';

<TertiaryButton>Button Label</TertiaryButton>;
```

## Component Props

### Required

#### `children: ReactNode`

> Buttons cannot be empty

### Optional

#### `variant: 'inverse' | undefined`

> The type of the button

Default: `undefined`

| Theme       | Description |
| ----------- | ----------- |
| `undefined` | Blue text   |
| `inverse`   | White text  |

---

#### `size: 'small' | 'medium' | 'large'`

> The size of the button

Default: `'medium'`

| Theme    | Description                            |
| -------- | -------------------------------------- |
| `small`  | 24px tall, small padding, small text   |
| `medium` | 32px tall, medium padding, medium text |
| `large`  | 48px tall, large padding, larger text  |

---

#### `iconPosition: ButtonIconPosition`

> The position of the TextButton icon.

Default: `left`

---

#### `ref: React.Ref<HTMLButtonElement>`

> Returns the ref to the rendered HTMLButtonElement.

---

### `icon: CanvasSystemIcon`

> The icon of the button.

---

### `allCaps: boolean`

> The capitialization of the text in the button.

---

### `as: React.ElementType`

> The alternative container type for the button. If `as="a"` is provided, We use Emotion's special
> `as` prop to render an `a` tag instead of a `button`.

> When defined, all props available via `React.AnchorHTMLAttributes<HTMLAnchorElement>` (e.g.
> `href`, `target`, etc.) become available.

Default: `undefined`

---

# DeleteButton

```tsx
import * as React from 'react';
import {DeleteButton} from '@workday/canvas-kit-react/button';

<DeleteButton>Button Label</DeleteButton>;
```

## Component Props

### Required

#### `children: ReactNode`

> Buttons cannot be empty

### Optional

#### `size: 'small' | 'medium' | 'large'`

> The size of the button

Default: `'medium'`

| Theme    | Description                            |
| -------- | -------------------------------------- |
| `small`  | 24px tall, small padding, small text   |
| `medium` | 32px tall, medium padding, medium text |
| `large`  | 48px tall, large padding, larger text  |

---

#### `ref: React.Ref<HTMLButtonElement>`

> Returns the ref to the rendered HTMLButtonElement.

---

#### `grow: boolean`

> If true, the button will grow to its container's width.

Default: `false`

---

### `as: React.ElementType`

> The alternative container type for the button. If `as="a"` is provided, We use Emotion's special
> `as` prop to render an `a` tag instead of a `button`.

> When defined, all props available via `React.AnchorHTMLAttributes<HTMLAnchorElement>` (e.g.
> `href`, `target`, etc.) become available.

Default: `undefined`

---

# Hyperlink

```tsx
import * as React from 'react';
import {Hyperlink} from '@workday/canvas-kit-react/button';

<Hyperlink href={url}>Link</Hyperlink>;
```

Hyperlink will apply our link styling, but follow the font styles of it's container (size, weight,
line-height, etc.).

## Component Props

### Required

> None

### Optional

#### `href: string`

> The href url of the anchor tag

---

### `as: React.ElementType`

> The alternative container type for the button. If `as="a"` is provided, We use Emotion's special
> `as` prop to render an `a` tag instead of a `button`.

> When defined, all props available via `React.AnchorHTMLAttributes<HTMLAnchorElement>` (e.g.
> `href`, `target`, etc.) become available.

Default: `undefined`

---

# IconButton

> Button containing an icon. Icon may be a component from
> [`canvas-kit-react-icon`](../../icon/react) or an svg element.

## Usage

```tsx
import * as React from 'react';
import {IconButton} from '@workday/canvas-kit-react/button';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

<IconButton icon={activityStreamIcon} aria-label="Activity Stream" />;
```

## Component Props

### Required

#### `aria-label: string`

> The accessibility label to indicate the action triggered by clicking the icon button.

---

### Optional

#### `variant: 'square' | 'squareFilled' | 'plain' | 'circle' | 'circleFilled' | 'inverse' | 'inverseFilled'`

> The type of the icon button

Default: `'circle'`

| Theme           | Description                                      |
| --------------- | ------------------------------------------------ |
| `square`        | Square, white background, dark gray icon         |
| `squareFilled`  | Square, gray background, dark gray icon          |
| `plain`         | Dark gray icon                                   |
| `circle`        | Circular, dark gray icon                         |
| `circleFilled`  | Circular, gray background, dark gray icon        |
| `inverse`       | Circular, transparent background, white icon     |
| `inverseFilled` | Circular, semitransparent background, white icon |

---

#### `size: 'small' | 'medium`

> The size of the icon button

Default: `'medium'`

| Theme    | Description                   | Is Default |
| -------- | ----------------------------- | ---------- |
| `Small`  | 32px Diameter, 20px Icon Size | False      |
| `Medium` | 40px Diameter, 24px Icon Size | True       |

---

#### `toggled: boolean | undefined`

> If defined as a boolean, then it manages the button state: on (`true`) or off (`false`). This is a
> [_controlled_](https://reactjs.org/docs/forms.html#controlled-components) `button` component. If
> left `undefined` then the button is not considered toggle-able (`aria-pressed` is `undefined`) and
> will act as a normal button.

Default: `undefined`

---

#### `onToggleChange: (toggled: boolean | undefined) => void`

> The callback that is fired when a button toggle prop changes This is true when the toggle changes
> from `true` to `false` but also if you disable the toggle-ability of a button (in other words, if
> `toggle` changes from a `boolean` to `undefined`). This is important because the `aria-pressed`
> attribute for accessibility is goverened by whether or not the `toggle` prop is defined.

---

#### `ref: React.Ref<HTMLButtonElement>`

> Returns the ref to the rendered HTMLButtonElement.

---

### `icon: CanvasSystemIcon`

> The icon of the button. Optional because IconButton can also wrap a SystemIcon component.

---

### `as: React.ElementType`

> The alternative container type for the button. If `as="a"` is provided, We use Emotion's special
> `as` prop to render an `a` tag instead of a `button`.

> When defined, all props available via `React.AnchorHTMLAttributes<HTMLAnchorElement>` (e.g.
> `href`, `target`, etc.) become available.

Default: `undefined`

---

# ToolbarIconButton

> Button containing an icon. Icon may be a component from
> [`canvas-kit-react-icon`](../../icon/react) or an svg element. Note: This button is intended to be
> used within a toolbar.

## Usage

```tsx
import * as React from 'react';
import {ToolbarIconButton} from '@workday/canvas-kit-react/button';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
<ToolbarIconButton icon={activityStreamIcon} aria-label="Activity Stream" />;
```

## Static Properties

> None

## Component Props

### Required

#### `aria-label: string`

> The accessibility label to indicate the action triggered by clicking the toolbar icon button.

---

### Optional

#### `toggled: boolean | undefined`

> If defined as a boolean, then it manages the button state: on (`true`) or off (`false`). This is a
> [_controlled_](https://reactjs.org/docs/forms.html#controlled-components) `button` component. If
> left `undefined` then the button is not considered toggle-able (`aria-pressed` is `undefined`) and
> will act as a normal button.

Default: `undefined`

---

#### `onToggleChange: (toggled: boolean | undefined) => void`

> The callback that is fired when a button toggle prop changes This is true when the toggle changes
> from `true` to `false` but also if you disable the toggle-ability of a button (in other words, if
> `toggle` changes from a `boolean` to `undefined`). This is important because the `aria-pressed`
> attribute for accessibility is goverened by whether or not the `toggle` prop is defined.

---

#### `ref: React.Ref<HTMLButtonElement>`

> Returns the ref to the rendered HTMLButtonElement.

---

### `icon: CanvasSystemIcon`

> The icon of the button. Optional because ToolbarIconButton can also wrap a SystemIcon component.

---

# ToolbarDropdownButton

> Button containing an icon or custom element. Icon may be a component from
> [`canvas-kit-react-icon`](../../icon/react) or an svg element. By default, the button has a down
> chevron to the right indicating that it's a dropdown button. Note: This button is intended to be
> used within a toolbar.

## Usage

```tsx
import * as React from 'react';
import {ToolbarDropdownButton} from '@workday/canvas-kit-react/button';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
<ToolbarDropdownButton icon={activityStreamIcon} aria-label="Activity Stream" />;
```

## Static Properties

> None

## Component Props

### Required

#### `aria-label: string`

> The accessibility label to indicate the action triggered by clicking the toolbar icon button.

---

### Optional

#### `ref: React.Ref<HTMLButtonElement>`

> Returns the ref to the rendered HTMLButtonElement.

---

### `icon: CanvasSystemIcon`

> The icon of the button. Optional because ToolbarDropdownButton can also wrap a SystemIcon
> component.

---

### Deprecated Buttons

> We have rolled out our next iteration of our buttons and will be deprecating the old style (orange
> primary, and accompanying secondary, and delete). These are still avialable, but will be removed
> in the first major release after they are available for all Workday customers. The biggest change
> is with regards to colors and styling, but the behavior should remain the same.

If you need to continue to use the old style buttons, you can use the `deprecated_Button` component.
Usage will be the same as before, but you must change your imports. Note: this will be removed
entirely in a future release.

```tsx
import * as React from 'react';
import {deprecated_Button as Button} from '@workday/canvas-kit-react/button';

<Button>Button Label</Button>;
```

Deprecation tags have been added to all the pieces regarding the old buttons including it's types
and the component itself. Tslint and your IDE should reflect this warning but you should still be
able to compile your code.
