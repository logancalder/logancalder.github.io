# Website Architecture - Multilingual System

## Overview

This website has been restructured to use a single-file architecture with JavaScript-based language switching, eliminating the need for separate language directories and duplicated content.

## New Structure

### Main Pages

- `home.html` - Consolidated home page with language switching
- `about.html` - Consolidated about page with language switching
- `projects.html` - Consolidated projects page with language switching
- `tutor.html` - Consolidated tutor page with language switching

### Language System

- `js/language.js` - Language management system that handles:
  - Language detection and storage
  - Content translation
  - Language switching
  - URL management

### Project Pages

- Project pages are now in a single `projects/` directory
- All project pages use the English versions (no language duplication)
- Navigation has been updated to point to the new consolidated pages
- Language switching is handled by the main navigation system

## How It Works

### Language Detection

1. Checks localStorage for user's preferred language
2. Falls back to browser language detection
3. Defaults to English if no preference is found

### Content Translation

1. All translatable content uses `data-translate` attributes
2. Content is stored in JavaScript objects in `language.js`
3. Language switching updates all elements with translation keys

### Language Switching

1. Click the language button in navigation
2. System switches between English and Spanish
3. Preference is saved to localStorage
4. Page title and all content updates immediately

## Benefits

1. **No Duplication**: Single files instead of separate language versions
2. **Easy Maintenance**: Update content in one place
3. **Better UX**: Instant language switching without page reloads
4. **SEO Friendly**: Clean URLs without language prefixes
5. **Scalable**: Easy to add new languages

## Adding New Languages

To add a new language (e.g., French):

1. Add translations to the `translations` object in `language.js`
2. Update the language detection logic
3. Add language switcher option

## Content Management

### Adding New Translatable Content

1. Add the content to the appropriate language object in `language.js`
2. Add `data-translate="key.path"` attribute to HTML elements
3. Use `data-translate-placeholder="key.path"` for form placeholders

### Example

```html
<h1 data-translate="home.title">Default English Text</h1>
<input
  placeholder="Default placeholder"
  data-translate-placeholder="home.formNamePlaceholder"
/>
```

## Migration Notes

- **REMOVED**: Old language directories (`/en/` and `/es/`) have been completely removed
- **CONSOLIDATED**: All main pages now use the new single-file system with language switching
- **SIMPLIFIED**: Project pages are now in a single `projects/` directory (no language duplication)
- **UPDATED**: All navigation and references have been updated to work with the new structure
- **PERSISTENT**: Language preferences are maintained across sessions
