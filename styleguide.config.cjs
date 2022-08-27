const path = require('path');
const webpackConfig = require('./webpack.config.cjs');
const {defineConfig} = require('vue-styleguidist');

module.exports = defineConfig({
  serverPort: process.env.SERVER_PORT,
  components: 'src/elements/**/*.vue',
  require: [
    path.join(__dirname, 'src/assets/fonts/fonts.scss'),
  ],
  theme: {
    fontFamily: {
      base: '"LL Circular", sans-serif',
    },
  },
  // Collapse sidebar navigation
  tocMode: 'collapse',
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.vue');
    return `import { Vy${name} } from '@vidyard/construction-yard';`;
  },
  pagePerSection: true,
  sections: [
    {
      name: 'About',
      sectionDepth: 2,
      sections: [
        {
          name: 'Getting Started',
          content: './docs/getting-started.md',
        },
        {
          name: 'Contributing',
          content: './docs/contributing.md',
        },
        {
          name: 'Adding New Components',
          content: './docs/adding-new-components.md',
        },
        {
          name: 'Pull Requests',
          content: './docs/pull-requests.md',
        },
        {
          name: 'Release Process',
          content: './docs/release-process.md',
        },
      ],
      components: () => ['./docs/components/Statistics.vue'],
    },
    {
      name: 'Design',
      sectionDepth: 2,
      sections: [
        {
          name: 'Design Tokens',
          content: './docs/tokens.md',
        },
        {
          name: 'Typography',
          components: () => [
            './docs/components/tokens/FontSize.vue',
            './docs/components/tokens/Spacing.vue',
            './docs/components/tokens/Depth.vue',
          ],
        },
      ],
      components: () => [
        './docs/components/tokens/Color.vue',
        './docs/components/tokens/All.vue',
      ],
    },
    {
      name: 'Forms',
      sectionDepth: 2,
      sections: [
        {
          name: 'Input',
          components: () => [
            './src/elements/forms/Autocomplete.vue',
            './src/elements/forms/Checkbox.vue',
            './src/elements/forms/input/Input.vue',
            './src/elements/forms/input/InputV2.vue',
            './src/elements/forms/text-area/TextArea.vue',
            './src/elements/forms/InputNumber.vue',
          ],
        },
        {
          name: 'Radio',
          components: () => [
            './src/elements/forms/radio/Radio.vue',
            './src/elements/forms/radio/RadioGroup.vue',
            './src/elements/forms/radio/RadioButton.vue',
          ],
        },
      ],
      components: () => [
        './src/elements/forms/date-picker/DatePicker.vue',
        './src/elements/forms/DateTimePicker.vue',
        './src/elements/forms/Switch.vue',
        './src/elements/forms/slider/Slider.vue',
      ],
    },
    {
      name: 'General',
      sectionDepth: 2,
      sections: [
        {
          name: 'Buttons',
          components: () => [
            './src/elements/general/buttons/Button.vue',
            './src/elements/general/buttons/OverflowMenu.vue',
            './src/elements/general/buttons/Menu.vue',
            './src/elements/general/buttons/MenuRadio.vue',
            './src/elements/general/buttons/CustomDatePicker.vue',
            './src/elements/general/buttons/Link.vue',
          ],
        },
        {
          name: 'Feedback',
          components: () => [
            './src/elements/general/Alert.vue',
            './src/elements/general/Banner.vue',
            './src/elements/general/toast/ToastComponent.vue',
          ],
        },
        {
          name: 'Tags',
          components: () => [
            './src/elements/general/Tag.vue',
            './src/elements/general/TagBox.vue',
          ],
        },
        {
          name: 'Breadcrumb',
          components: () => [
            './src/elements/general/Breadcrumb.vue',
            './src/elements/general/BreadcrumbItem.vue',
          ],
        },
        {
          name: 'Tooltips',
          components: () => [
            './src/elements/general/Tooltip.vue',
            './src/mixins/Tooltip.vue',
          ],
        },
        {
          name: 'Thumbnails',
          components: () => [
            './src/elements/general/Thumbnails/PlaylistThumbnail.vue',
            './src/elements/general/Thumbnails/VideoThumbnail.vue',
            './src/elements/general/Thumbnails/Thumbnail.vue',
          ],
        },
      ],
      components: () => [
        './src/elements/general/AspectRatio.vue',
        './src/elements/general/Progress.vue',
        './src/elements/general/Spinner.vue',
        './src/elements/general/Truncate.vue',
        './src/elements/general/TruncateList.vue',
        './src/elements/general/Badge.vue',
        './src/elements/general/ColorPicker/ColorPicker.vue',
        './src/elements/general/Icon.vue',
        './src/elements/general/Status.vue',
      ],
    },
    {
      name: 'Layout',
      sectionDepth: 2,
      sections: [
        {
          name: 'Tabs',
          components: () => [
            './src/elements/layout/tabs/Tabs.vue',
            './src/elements/layout/tabs/Tab.vue',
          ],
        },
        {
          name: 'Cards',
          components: () => [
            './src/elements/layout/cards/Card.vue',
            './src/elements/layout/cards/CardButton.vue',
          ],
        },
      ],
      components: () => [
        './src/elements/layout/Collapse.vue',
        './src/elements/layout/Dialog.vue',
        './src/elements/layout/DialogContainer.vue',
        './src/elements/layout/drag-and-drop/DragAndDrop.vue',
        './src/elements/layout/Grid.vue',
        './src/elements/layout/Heading.vue',
        './src/elements/layout/NavBar.vue',
        './src/elements/layout/Paragraph.vue',
        './src/elements/layout/SidePanel.vue',
        './src/elements/layout/Table.vue',
        './src/elements/layout/Pagination.vue',
        './src/elements/layout/Popover.vue',
        './src/elements/layout/SortableTh.vue',
        './src/elements/layout/OverflowObserver.vue',
      ],
    },
  ],
  webpackConfig,
});