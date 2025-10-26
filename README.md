# Microblog Custom Theme

A modern two-column microblog theme based on theme-blank with centered content and responsive design.

## Features

- ✨ Modern, clean design with a professional two-column layout
- 📱 Fully responsive (works on mobile, tablet, and desktop)
- 🌙 Automatic dark mode support based on system preferences
- 🎨 Consistent design tokens (CSS Custom Properties) for easy customization
- ⚡ Smart content centering that adapts to content height
- 🏷️ Beautiful tag and metadata display
- 🔗 Social media and syndication link styling
- 🎯 Micropost detection (posts under 280 characters get special styling)
- 👤 Sidebar with profile, avatar, bio, and social links
- 🧭 Horizontal navigation in main content area

## Design

The theme uses a two-column layout inspired by modern design systems like shadcn/ui:

- **Left sidebar**: Profile section with avatar, bio, social links, and navigation
- **Right main content**: Horizontal navigation bar and centered content area

The content area intelligently centers content vertically when there are few posts, and switches to top-aligned when there's more content to scroll through.

## Customization

The theme uses CSS Custom Properties for easy customization. Key variables can be found in `/static/css/main.css`:

- Colors (using HSL format for easy theming)
- Font families (Inter for sans-serif, JetBrains Mono for monospace)
- Spacing and sizing
- Sidebar width (can be customized in config.json)

## Installation

This theme is designed to work with Micro.blog. Simply upload the theme or use it as a custom design.

## Credits

- Based on [theme-blank](https://github.com/microdotblog/theme-blank) by Micro.blog
- Design inspired by shadcn/ui design system
- Created by Doug Hatcher

## License

MIT License
